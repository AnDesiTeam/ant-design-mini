import { UploaderDefaultProps, IUploaderData, File } from './props';
import { chooseImage, previewImage, uploadFile } from '../_util/promisify';
import controlled from '../mixins/controlled';
import formMixin from '../mixins/form';

Component({
  mixins: [controlled(), formMixin()],
  props: UploaderDefaultProps,
  data: {
    fileList: [],
  } as IUploaderData,
  didMount() {
    const { value } = this.props;
    this.setData({
      fileList: value
    });
  },
  methods: {
    async onChooseImage() {
      const { fileList } = this.data;
      const { maxCount, sourceType } = this.props;

      const chooseImageRes = await chooseImage({
        count: maxCount - fileList.length,
        sourceType
      });

      if (chooseImageRes && chooseImageRes.success) {
        const tasks = chooseImageRes.tempFiles.map((file) => this.uploadFile(file));
        await Promise.all(tasks);
      }
    },

    async uploadFile(file) {
      const { action, fileName, formData, onBeforeUpload, onUpload } = this.props;
      const { fileList } = this.data;
      const { path } = file;

      try {
        if (onBeforeUpload) {
          const beforeUploadRes = await onBeforeUpload.call(this.props, file, fileList);
          if (beforeUploadRes === false) return;
        }

        const tempFileList = fileList.concat([{
          /** 这里以图片的本地地址作为key */
          key: path,
          url: '',
          localPath: path,
          status: 'pending'
        }]);

        this.setData({
          fileList: tempFileList
        });

        if (action) {
          const res = await uploadFile({
            url: action,
            fileType: 'image',
            fileName: `${fileName}_${Date.now()}`,
            filePath: path,
            formData: formData || {},
            hideLoading: true,
          });

          /** 这里uploadFile api接口类型定义有问题，ide返回的是string，真机返回的是number，作下兼容 */
          if (res.statusCode === 200 || res.statusCode === '200') {
            const data = JSON.parse(res.data);
            if (data.success && data.data && data.data.url) {
              this.updateFileList(path, 'done', data.data.url);
            } else {
              this.updateFileList(path, 'error');
              my.showToast({
                content: '接口返回格式有误'
              });
            }
          } else {
            this.updateFileList(path, 'error');
            my.showToast({
              content: '上传失败，请重试'
            })
          }
          return;
        }

        if (onUpload) {
          const onUploadRes = await onUpload.call(this.props, {
            key: path,
            url: '',
            localPath: path,
            status: 'pending'
          });
          this.updateFileList(path, onUploadRes.status, onUploadRes.url);
        }
      } catch (e) {
        this.updateFileList(path, 'error');
        my.showToast({
          content: e.errorMessage || '上传失败，请重试',
          type: 'fail',
        });
      }
    },

    updateFileList(path, status, url?) {
      const { fileList } = this.data;
      const { onChange } = this.props;

      const tempFileList = fileList.map((file) => {
        if (file.key === path) {
          return {
            ...file,
            url: url ? url : '',
            status
          } as File;
        }
        return file;
      });

      this.setData({
        fileList: tempFileList
      });

      onChange && onChange.call(this.props, tempFileList);
    },

    async onDeleteImage(e) {
      const { fileList } = this.data;
      const { onDelete, onChange } = this.props;
      const { deleteImageIndex } = e.target.dataset;
      const deleteFile = fileList.find((item, index) => index === deleteImageIndex);
      const tempFileList = fileList.filter((item, index) => index !== deleteImageIndex);

      if (onDelete) {
        const onDeleteRes = await onDelete.call(this.props, deleteFile);
        if (onDeleteRes === false) return;
      }
      this.setData({
        fileList: tempFileList
      });
      onChange && onChange.call(this.props, tempFileList);
    },

    onPreviewImage(e) {
      const { fileList } = this.data;
      const { preview, enableShowPhotoDownload, enableSavePhoto, onPreview } = this.props;
      const { previewImageIndex } = e.target.dataset;

      if (!preview) return;

      if (onPreview) {
        onPreview.call(this.props, fileList);
        return;
      }

      previewImage({
        current: previewImageIndex,
        urls: fileList.map((file) => file.url),
        enableShowPhotoDownload,
        enablesavephoto: enableSavePhoto
      });
    },

    onPreviewDemoImage() {
      const { demoImage } = this.props;

      previewImage({
        urls: [demoImage],
        current: 0,
      })
    }
  }
})