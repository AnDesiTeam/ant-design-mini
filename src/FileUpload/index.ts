import { UploaderDefaultProps, IUploaderData, File } from './props';
import { chooseFileFromDisk, downloadFile } from '../_util/promisify';

Component({
  props: UploaderDefaultProps,
  toastLock: false,
  data: {
    fileList: [],
  } as IUploaderData,
  didMount() {
    const { defaultValue } = this.props;
    this.setData({
      fileList: defaultValue
    });
  },
  methods: {
    async onChooseFile() {
      try {
        const chooseFileFromDiskRes = await chooseFileFromDisk();

        if (chooseFileFromDiskRes && chooseFileFromDiskRes.success) {
          const path = chooseFileFromDiskRes.apFilePath;
          const fileType = path.split('.').pop();

          const getFileInfoRes = await my.getFileInfo({
            apFilePath: path,
            digestAlgorithm: 'md5',
          });

          this.uploadFile({
            description: `${getFileInfoRes.digest.slice(0, 16)}.${fileType}`,
            size: getFileInfoRes.size,
            path,
          });
        }
      } catch (e) {
        my.showToast({
          content: e.errorMessage
        });
      }
    },
    async uploadFile(file) {
      const { action, formData, fileName, onBeforeUpload, onUpload } = this.props;
      const { fileList } = this.data;
      const { path, description, size } = file;

      try {
        if (onBeforeUpload) {
          const beforeUploadRes = await onBeforeUpload.call(this.props, file, fileList);
          if (beforeUploadRes === false) return;
        }

        const tempFileList = fileList.concat([{
          key: path,
          localPath: path,
          url: '',
          description,
          status: 'pending',
          size: this.getFileSize(size),
        }]);

        this.setData({
          fileList: tempFileList
        });

        if (action) {
          const uploadFileTask = my.uploadFile({
            url: action,
            fileType: 'pdf',
            fileName: `${fileName}_${Date.now()}`,
            filePath: path,
            formData: formData || {},
            hideLoading: true,
          });

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          uploadFileTask.onProgressUpdate(({ progress }) => {
            if (progress === 100) {
              this.updateFileList(path, 'done')
            } else {
              this.updateFileList(path, 'pending', progress)
            }
          })
        }

        if (onUpload) {
          const onUploadRes = await onUpload.call(this.props, {
            key: path,
            url: '',
            description,
            localPath: path,
            status: 'pending',
            size: this.getFileSize(size),
          });
          this.updateFileList(onUploadRes.url, onUploadRes.status);
        }
      } catch (e) {
        this.updateFileList('', 'error');
        my.showToast({
          content: e.errorMessage || '上传失败，请重试',
          type: 'fail',
        });
      }
    },
    updateFileList(url, status, progress = 100) {
      const { fileList } = this.data;
      const { onChange } = this.props;

      const tempFileList = fileList.map((file) => {
        if (file.url === path) {
          return {
            ...file,
            url,
            status,
            progress
          } as File;
        }
        return file;
      });

      this.setData({
        fileList: tempFileList
      });

      onChange && onChange.call(this.props, tempFileList);
    },
    async onPreviewFile(e) {
      const { onPreviewFail } = this.props;
      const { info } = e.target.dataset;
      const { url, tempFilePath, index } = info;
      const isTempFile = url.startsWith('https://resource');
      const isPdf = url.split('.').pop() === 'pdf';

      if (!isTempFile && !tempFilePath && isPdf) {
        const { apFilePath = '' } = await downloadFile({
          url
        });

        if (apFilePath) {
          this.previewPdf(apFilePath);
          this.tempFile(apFilePath, index);
        }
        return;
      }

      if (isTempFile && isPdf) {
        this.previewPdf(url);
        return;
      }

      if (tempFilePath) {
        this.previewPdf(tempFilePath);
        return;
      }

      if (!this.toastLock) {
        if (onPreviewFail) {
          onPreviewFail.call(this.props, url);
          return;
        }

        this.toastLock = true;
        my.showToast({
          content: '暂不支持预览该类型文件',
          type: 'fail',
          complete: () => {
            this.toastLock = false;
          }
        });
      }
    },
    tempFile(tempFilePath, index) {
      const { fileList } = this.data;
      const tempFileList = fileList.map((file, fileIndex) => {
        if (fileIndex === index) {
          return {
            ...file,
            tempFilePath
          } as File;
        }
        return file;
      });

      this.setData({
        fileList: tempFileList
      });
    },
    previewPdf(url) {
      my.openDocument({
        filePath: url,
        fileType: 'pdf',
        fail: (e) => {
          if (!this.toastLock) {
            this.toastLock = true;
            my.showToast({
              content: e.errorMessage,
              type: 'fail',
              complete: () => {
                this.toastLock = false;
              }
            });
          }
        },
      })
    },
    async onDeleteFile(e) {
      const { fileList } = this.data;
      const { onDelete, onChange } = this.props;
      const { deleteFileIndex } = e.target.dataset;
      const deleteFile = fileList.find((item, index) => index === deleteFileIndex);
      const tempFileList = fileList.filter((item, index) => index !== deleteFileIndex);

      if (onDelete) {
        const onDeleteRes = await onDelete.call(this.props, deleteFile);
        if (onDeleteRes === false) return;
      }
      this.setData({
        fileList: tempFileList
      });

      onChange && onChange.call(this.props, tempFileList);
    },
    getFileSize(size) {
      let result;
      if (size < 0.1 * 1024) {
        result = size.toFixed(2) + "B"
      } else if (size < 0.1 * 1024 * 1024) {
        result = (size / 1024).toFixed(2) + "KB"
      } else if (size < 0.1 * 1024 * 1024 * 1024) {
        result = (size / (1024 * 1024)).toFixed(2) + "MB"
      } else {
        result = (size / (1024 * 1024 * 1024)).toFixed(2) + "GB"
      }
      return result;
    }
  }
})