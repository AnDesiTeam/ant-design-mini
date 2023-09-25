---
toc: false
---

## 贡献指南


### 1. 克隆代码

代码仓库： https://github.com/ant-design/ant-design-mini/

```
$ git clone git@github.com:ant-design/ant-design-mini.git
```

### 2. 安装依赖
```
$ npm i
```

### 3. 使用IDE编辑

### 4. 预览文档

```
$ npm run dev
```
### 5. Commit 规范
提交 commit 时，需要遵循以下原则：

- 最小化代码变更：保证每个 commit 的逻辑独立、原子化。一个 commit 只做一件事，哪怕这件事只改了 1 行代码，你也应该独立 commit 这次变更；
- 遵循 [Conventional Commits 原则](https://www.conventionalcommits.org/zh-hans/v1.0.0/)：避免没有意义、看不懂的 Commit Message 引入，并且在代码提交的时候会有 Commit Message 格式校验。一般情况下，你会大量的使用到：
  1. 使用 feat(scope): xxx 来描述一个 feature 的 commit；
  2. 使用 fix(scope): xxx 来描述一个 bug fixes 的 commit；
  3. 使用 chore(scope): xxx 来来描述一个无关 feature 和 bug fixes 的小调整；
- issue：如果改动与 issue 相关，请在 Commit Message 中带上 issue 参数，如：fix(scope): [#1] xxxxxx；

## Ant Design Mini 的工程方案

### 函数式组件

从 v2 版本起，我们逐渐使用“React 函数式组件”的形式来开发小程序自定义组件，它的背后依赖了 [functional-mini](https://github.com/ant-design/functional-mini) 这个SDK。一个典型的案例是日历组件（ [Calendar/index.ts](https://github.com/ant-design/ant-design-mini/blob/master/src/Calendar/index.ts) ）。

[functional-mini](https://github.com/ant-design/functional-mini) 是纯运行时SDK，它接管了小程序的逻辑层代码，但又不侵入视图层，为我们在项目架构复杂度和编码习惯上带来了平衡。函数式组件的基本特性也因此得以施展，提升了代码可维护度，如更易组装数据加工逻辑、更方便实现 hooks 逻辑复用等。

我们欢迎你一同参与 Ant Design Mini 的函数式组件开发，共同探索更优质的小程序工程形态。
