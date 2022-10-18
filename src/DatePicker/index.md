---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---
# DatePicker 时间选择器
相比较于原生my.datePicker实现了ios跟android端体验一致
## 代码示例
### 基本使用
<code src='../../demo/pages/DatePicker'></code>



## 属性
#### DatePicker
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|-----|
| value | Date | 否 | - | 选中的时间 |
| format | string | 否 | 'YYYY/MM/DD' | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format) |
| min | Date | 否 | 十年前 | 最小值 |
| max | Date | 否 | 十年后 | 最大值 |
| precision |  'year' \|  'month' \|  'day' \|  'hour' \|  'minute' \|  'second' | 否 | 'day' | 选择精度 |
| disabled | boolean | 否 |  false | 是否禁用 |
| placeholder | string | 否 | '请选择' | 提示文案 |
| title | string | 否 | - |  弹出框标题 |
| okText | string | 否 | '确定' | 确认按钮文案 |
| dismissText | string | 否 | '取消' |  取消文案 | 
| maskClosable |  boolean | 否 |false | 点击蒙层是否可以关闭 | 
| maskStyle | string | 否 | - | 蒙层的样式 |
| maskClass | string | 否 | - |蒙层的类名 |
| indicatorStyle | string | 否 | - |选中框样式  |
| indicatorClass | string | 否 |  - |  选中框的类名 |
| popClassName |  string | 否| 弹出框类名 | - |
| popStyle |  string | 否| 弹出框样式 | - |
| className | string | 否 | - |类名| 
| style | string | 否 | - | 整体样式 |

#### RangePicker
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|-----|
| value | [Date, Date] | 否 | - | 选中的时间 |
| format | string | 否 | 'YYYY/MM/DD' | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format) |
| min | Date | 否 | 十年前 | 最小值 |
| max | Date | 否 | 十年后 | 最大值 |
| precision |  'year' \|  'month' \|  'day' \|  'hour' \|  'minute' | 否 | 'day' | 选择精度 |
| disabled | boolean | 否 |  false | 是否禁用 |
| placeholder | string | 否 | '请选择' | 提示文案 |
| startPlaceholder | string | 否 | '未选择' | 开始时间提示文案 |
| endPlaceholder | string | 否 | '未选择' | 结束时间提示文案 | 
| splitCharacter | string | 否 | '~' |  显示连接符 |
| title | string | 否 | - |  弹出框标题 |
| okText | string | 否 | '确定' | 确认按钮文案 |
| dismissText | string | 否 | '取消' |  取消文案 | 
| maskClosable |  boolean | 否 |false | 点击蒙层是否可以关闭 | 
| maskStyle | string | 否 | - | 蒙层的样式 |
| maskClass | string | 否 | - |蒙层的类名 |
| indicatorStyle | string | 否 | - |选中框样式  |
| indicatorClass | string | 否 |  - |  选中框的类名 |
| popClassName |  string | 否| 弹出框类名 | - |
| popStyle |  string | 否| 弹出框样式 | - |
| className | string | 否 | - |类名| 
| style | string | 否 | - | 整体样式 |

## 事件
#### DatePicker
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onOk | 点击确定按钮，触发回调 | (date: Date, dateStr: string, dateArr:number[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onDismiss | 点击取消按钮/蒙层，触发回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onPickerChange | 选中项发生变化，触发回调 | (date: Date, dateStr: string, dateArr:number[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFormat | 选中值的文本显示格式 | (date: Date, dateStr: string, dateArr:number[]) => string |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible: boolean, (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |

#### RangePicker
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onOk | 点击确定按钮，触发回调 | (date: [Date,Date], dateStr: [string,string], dateArr:[number[],number[]], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onDismiss | 点击取消按钮/蒙层，触发回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onPickerChange | 选中项发生变化，触发回调 | (type: 'start'\|'end', date: Date, dateStr: string, dateArr:number[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFormat | 选中值的文本显示格式 | (date: [Date,Date], dateStr: [string,string], dateArr:[number[],number[]]) => string |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible: boolean, (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |

## 插槽
| 名称 | 说明 | 作用域参数 |
| -----|-----|-----|
| title | 弹窗窗体标题名称，RangePicker暂不支持 |  - |
