---
nav:
  path: /components
group:
  title: 表单类组件
toc: false
---

# CheckboxGroup

复选框组合，内部由多个 CheckboxItem 组成。

## 注意事项

- 复选框组内部子元素，必须配合 CheckboxGroup 使用，有单独使用需求的请使用 Checkbox。
- CheckboxGroup 组件与 CheckboxItem 组件必须有相同的 uid，且 uid 全局唯一。
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `ChecboxGroup` 组件的 `mode` 的值为 `form`。

## 代码示例

<code src='../../demo/pages/CheckboxGroup'></code>

## API

### 属性

#### CheckboxGroup
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string[] | 否 | - | CheckboxGroup 的值，决定子元素是否勾选 |
| radius | boolean | 否 | false | 是否带圆角 |
| header | string | 否 | - | 头部说明 |
| footer | string | 否 | - | 底部说明 |
| className | string | 否 | - | 类名 |
| mode | 'noraml' &verbar; 'form' | 否 | normal | 配合From/FormItem组件使用时，需设置为 from |
| uid | string | 是 | - | `必须全局唯一`，需与内部的 CheckboxItem 组件的 uid 一致 |

#### CheckboxItem

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string | 否 | - | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用；在 CheckboxGroup 时亦有用 |
| disabled | boolean | 否 | false | 是否禁用 |
| className | string | 否 | - | 类名 |
| uid | string | 是 | - | `必须全局唯一`，需与内部的 CheckboxGroup 组件的 uid 一致 |

### 事件

#### CheckboxGroup
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 勾选状态变化时，触发此函数 |-----|

### 插槽

#### CheckboxGroup
| 名称 | 说明 |
| ----|----|
| header | 头部内容插槽 |
| footer | 底部内容插槽 |

### 样式类

#### CheckboxGroup
| 类名 | 说明 |
| -----|-----|
| amd-checkbox-group |整体样式|
| amd-list-header | 头部内容样式 |
| amd-list-body | 内部内容样式 |
| amd-list-footer |底部内容样式|

#### CheckboxItem

| 类名 | 说明 |
| -----|-----|
| amd-checkbox-item | 整体样式 |
| amd-checkbox | 原始 checkbox 整体样式 |
| amd-checkbox-base | 原始 checkbox 样式 |
| amd-checkbox-fake | 未选中 checkbox 样式 |
| amd-checkbox-checked | 选中 checkbox 样式 |

<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4)  {
    width: 50px
} 
</style> 