function handleScroll(event, ownerComponent) {
  var currentScroll = event.detail.scrollTop;
  var dataset = event.instance.getDataset();
  var elementSize = dataset.elementsize,
    monthList = dataset.monthlist;
  var instance = ownerComponent.selectComponent('.ant-calendar-sticky-title');
  var sticky = ownerComponent.selectComponent('.ant-calendar-sticky');
  sticky.setStyle({
    display: currentScroll < 0 ? 'none' : 'block'
  });
  if (!elementSize) return;
  var monthHeight = elementSize.monthTitleHeight;
  var paddingHeight = elementSize.paddingHeight;
  var cellHeight = elementSize.cellHight;
  var heightList = monthList.map(function (p) {
    return monthHeight + cellHeight * p.cells.length / 7;
  });
  for (var i = 0; i < heightList.length; i++) {
    if (currentScroll < heightList[i]) {
      var topHeight = currentScroll - heightList[i] + monthHeight - paddingHeight;
      topHeight = Math.max(topHeight, 0);
      instance.setStyle({
        transform: "translateY(-".concat(topHeight, "px)")
      });
      ownerComponent.callMethod('setCurrentMonth', {
        month: topHeight > monthHeight * 0.8 ? i + 1 : i
      });
      break;
    } else {
      currentScroll = currentScroll - heightList[i];
    }
  }
}
export default {
  handleScroll: handleScroll
};