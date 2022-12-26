Page({
  data: {
    rightBtns: [
      {
        text: '往来记录',
        bgColor: '#1677FF',
        color: '#fff',
      },
      {
        text: '设为常用',
        bgColor: '#FFA91B',
        color: '#fff',
      },
      {
        text: '删除',
        bgColor: '#FF2B00',
        color: '#fff',
      }
    ],
    swipeIndex: -1
  },
  onSwipeStart() {
    this.setData({ swipeIndex: '' });
  },
  onSwipeEnd(data, e) {
    const { index } = e.target.dataset.item;
    data.swiped && this.setData({ swipeIndex: index });
  },
});