function itemContent(current, item) {
  return current.indexOf(item.index) >= 0 ? '' : "".concat(item.value.content.slice(0, 20), "...");
}
function extraText(current, item) {
  return current.indexOf(item.index) >= 0 ? '关闭' : '展开';
}
export default {
  itemContent: itemContent,
  extraText: extraText
};