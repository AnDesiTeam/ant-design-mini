Page({
  data: {
    position: '',
    basicVisible: false,
    animation: true,
    scrollVisible: false,
    closeVisible: false,
  },
  handlePopupClose() {
    this.setData({
      basicVisible: false,
      scrollVisible: false,
      closeVisible: false,
    });
  },
  handleShowBasic(e) {
    const { position } = e.target.dataset;
    this.setData({
      position,
      basicVisible: true,
    });
  },
  handleShowScroll() {
    this.setData({ scrollVisible: true });
  },
  handleChangeAnimation(checked) {
    /// #if ALIPAY
    this.setData({ animation: checked });
    /// #endif

    /// #if WECHAT
    this.setData({ animation: checked.detail });
    /// #endif
  },
  handleShowClose() {
    this.setData({ closeVisible: true });
  },
});
