Page({
    data: {
        radius: false,
    },
    handleTap(e) {
        my.alert({
            title: 'onTap',
            content: e.currentTarget.dataset.info,
        });
        console.log(e);
    },
    handleSetRadius(checked) {
        this.setData({
            radius: checked,
        });
    },
});
