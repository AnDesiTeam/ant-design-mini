---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---
# Picker 选择器
Picker 选择器	显示一个或多个选项集合的的可滚动列表，相比较于原生picker实现了ios跟android端体验一致
## 何时使用
- 提供一组或多组关联选项供用户选择
- 当少于5个选项时，建议直接将选项平铺，使用 Radio 是更好的选择

## 代码示例
### 基本使用
<code src='../../demo/pages/Picker'></code>

## 属性
```typescript
type PickerColumnItem = string | number | {
  label: string
  value: string|number
}
```

<hr />

| 属性 |  类型  | 必填 |  说明  | 默认值|
| -----|-----|-----|-----|-----|
| value | PickerColumnItem  &#124;  (PickerColumnItem)[] | 否|选中数据 | - |
| data |  PickerColumnItem数组 | 是 |picker 数据，配置每一列的选项 | [] |
| placeholder |string |否| 提示文案  | '请选择' |
| disabled | boolean |否| 是否禁用 | false |
| title |  string | 否  | 弹出框标题 | - |
| okText |string | 否| 确认按钮文案 | '确定' |
| dismissText | string| 否| 取消文案  | '取消' |
| maskStyle | string  | 否| 蒙层的样式  | -|
| maskClass | string | 否| 蒙层的类名| - |
| indicatorStyle | string | 否  | 选中框样式 | - |
| indicatorClass | string | 否   | 选中框的类名 | - |
| className |  string | 否| 类名 | - |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onOk | 点击确定按钮，触发回调 | (value: PickerColumnItem,  column: PickerColumnItem ) => void |
| onDismiss | 点击取消按钮，触发回调 | () => void |
| onChange | 选中项发生变化，触发回调 | (value: PickerColumnItem, column: PickerColumnItem) => void |
| onFormat | 选中值的文本显示格式 | (value: PickerColumnItem, column: PickerColumnItem) => string |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible:boolean) => void |

## 插槽
| 名称 | 说明 | 类型 |
| -----|-----|-----|
| default | 文本区域标签名称 | 作用域插槽，接收选中的value参数 |
| title | 弹窗窗体标题名称 |  - |


## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-picker | 文本展示区域样式 |
| amd-picker-placeholder | placeholder样式 |
| amd-picker-popup | 弹窗整体样式 |
| amd-picker-header | 弹窗头部区域样式 |
| amd-picker-header-item | 弹窗头部区域文本样式 |
| amd-picker-content | 选择区域样式 |
| amd-picker-content-item | 选择区域单个选项样式 |
