---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: content
---

# Input input box

<!-- <code src="../../docs/components/compatibility.tsx" inline></code> -->

Enter content through the keyboard, is the most basic form field packaging.

## When to use

Generally used in the form page for information collection.

## Code example

### Input basic usage

<code src='../../demo/pages/Input/index'></code>

### SearchBar search box

<!-- <code src='pages/InputSearchBar/index'></code> -->

### Textarea

<!-- <code src='pages/InputTextarea/index'></code> -->

### Custom

<!-- <code src='pages/InputCustom/index'></code> -->

## API

### Input, Textarea the same property

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| className | Class Name | string | - |
| controlled | There are keyboard input problems, you can use `controlled="{{false}}"` | boolean | - |
| defaultValue | Initial value | string | - |
| disabled | Disable | boolean | false |
| maxLength | Maximum length | number | 140 |
| placeholder | Placeholder | string | - |
| style | Style | string | - |
| value | The value of the input box. Controlled mode. | string | - |
| onConfirm | This callback is triggered when the keyboard is clicked to complete | (value: string, event: Event) => void | - |
| onFocus | Trigger this callback when focused | (value: string, event: Event) => void | - |
| onBlur | Trigger this callback when out of focus | (value: string, event: Event) => void | - |
| onChange | This callback is triggered when input | (value: string, event: Event) => void | - |

### Input property

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| allowClear | You can click the clear icon to delete content | boolean | false |
| enableNative | Whether to use native | boolean | - |
| focus | Focus, View[Detailed Description](#input-focus) | boolean | - |
| password | Whether it is password type | boolean | false |
| prefix | input prefix | slot | - |
| suffix | input suffix | slot | - |

### Textarea Properties

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| autoHeight | Whether to increase automatically. | boolean | false |
| enableNative | Whether to use native | boolean | - |
| showCount | Show word count | boolean | true |

### Input, Textarea More Same Properties

- confirm-type
- name
- placeholder-class
- placeholder-style
- type

[Input](https://opendocs.alipay.com/mini/component/input)  
[Textarea](https://opendocs.alipay.com/mini/component/textarea)

### Input focus

To use the focus attribute, you need to add it to the app.json window. `"enableInPageRenderInput": "YES"`Otherwise, the keyboard cannot be opened in iOS.

### Input, Textarea instance methods

Instance methods require small programs `component2` Can be used.

| Property | Description | Type |
| --- | --- | --- |
| update | Update Value | (value: string) => void |
| getValue | get value | () => string |

## FAQ

### Input focus does not open the keyboard

You need to add it to the app.json window. `"enableInPageRenderInput": "YES"`。

### Cursor problem with Input

Can be viewed [This document](https://opendocs.alipay.com/mini/component/input#FAQ) Use `enableNative` property to resolve.

### Keyboard problems using value controlled mode

This is due [A known issue with input boxes](https://opendocs.alipay.com/mini/component/input#Bug%20%26%20Tip)。

The solution is to call the input update method in ref mode without using value controlled mode.

```html
<input defaultValue="{{defaultValue}}" ref="handleRef" />
<button onTap="clear">clear</button>
```

```js
Page({
  handleRef(input) {
    this.input = input;
  },
  clear() {
    this.input.update('');
  },
});
```

Starting with v2.15.0, updating values via the update method is not supported in controlled mode.

### Instance method not available

need to use `component2`, for details see[ref Get Component Instance](https://opendocs.alipay.com/mini/framework/component-ref)。
