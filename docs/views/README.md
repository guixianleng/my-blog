### :tada: 移动端组件

### vue组件开发规范和思路

:100: 组件库就是为了统一不同/相同产品线之间的风格，给用户更好的体验，减少单次开发中写UI组件时浪费的时间和人力，提高开发效率。封装组件可以从中提炼自己的技术点和更深层次的对vue的理解，构建自己的网站和Blog（使用vuepress）,加强文档的编写能力

## 1. 封装组件库收获
- 深入对vue的理解
- 学习组件封装技能，掌握组件设计思路
- 劣实js/css基础
- 加强文档编写能力

## 2. 组件设计的思路和标准
- 可扩展性强
- 适用程度高
- 文档清楚详细
- 版本隔离，小版本优化加功能，大改需要大版本更新
- 和UI协调统一，要求UI交互参与进来

## 3. 组件设计和开发
:100: 开发用到的vue api
- $parent： 获取当前组件父组件。继承父组件的props
- $props: 获取继承父组件的props
- $slots：获取当前插槽。
- $refs： 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例。
- $el: Vue实例使用的根 DOM 元素。
- $emit： 组件触发自定义事件。
- .sync：语法糖，单向数据流中，父组件监听到子组件props并修改，用了.sync不需要显式在父组件监听组件内部触发的自定义事件去修改值, 父组件只要写:x.sync="value", 注意此时子组件触发的事件必须是"update:x"此语法糖才生效。

## 4. 组件库
### 4.1. Toast组件

![An image](/my-blog/static/toast.gif)
---
### 基本用法
``` js

Toast('提示文案');
Toast({
  type: 'loading',
  message: '加载中...'
});
Toast.success('成功文案');
Toast.fail('失败文案');

```

### 方法
|       方法名      |          参数        |    返回值  |      介绍      |
|----------------|----------------------|------------|----------------|
| Toast          | `options/message`  | toast 实例 | 展示提示       |
| Toast.loading  | `options/message`  | toast 实例 | 展示加载提示   |
| Toast.success  | `options/message`  | toast 实例 | 展示成功提示   |
| Toast.fail     | `options/message`  | toast 实例 | 展示失败提示   |
| Toast.close    | `close: Boolean`     | `Void`     | 关闭提示       |

### Options
|       参数    |                                   说明                                   |   类型   | 默认值 |
|---------------|--------------------------------------------------------------------------|----------|--------|
| type     |提示类型，可选值为`loading` `success` `fail` `close` `normal` `colorful` `html`| `String` | `text` |
| position | 位置，可选值为 `top bottom`                    |  `String`  | `middle`   |
| duration | 展示时长(ms)                                   |  `Number`  | `3000`     |
| mask     | 是否显示背景遮罩层                             |  `Boolean` | `true`     |
|transition| 提示开场动画，可选值为`slide-down` `slide-up` `slide-left` `slide-right` |  `String`    | `fade`    |
| bgContent| 提示内容的背景颜色，可选值为`white` `transparent`|  `String`  | `black`    |
|background| 遮盖层的背景，支持十六进制和rgb格式            |  `String`  |  `rgba(0, 0, 0, 0.3)`  |
| colorText| 色彩文案，只限于type为`colorful`使用           |  `String`  | -          |
| color    | 色彩文案颜色，只限于type为`colorful`使用       |  `String`  | `#F89516`  |
| title    | 标题，只限于type为`normal`使用                 |  `String`  | -          |
| icon     | 加载的图标，只支持svg                          |  `String`  | `loading`  |
| size     | 加载的图标大小                                 |  `Number`  | `48`       |
| isClose  | 主动关闭加载提示                               |  `Boolean` | `false`    |
| animation| 是否开启加载的动画，只限于type为loading            |  `Boolean` | `false`    |
| animationName| 开启加载的动画名，只限于type为loading        |  `String`  | -          |
---
### 4.2. Step组件
![An image](/my-blog/static/steps.gif)
---
### 基本用法
``` html

<pl-step :active="active" active-text-color="#313131">
    <pl-steps>预约成功</pl-steps>
    <pl-steps>预约专家</pl-steps>
    <pl-steps>正在服务</pl-steps>
    <pl-steps>完成服务</pl-steps>
</pl-step>
```
### API
|       参数      |         说明        |    类型  |      默认值    |
|-----------------|---------------------|----------|----------------|
| active            | 当前步骤                         | `Number` | 0       |
| active-svg        | 自定义激活状态底部图标，详见svg组件  | `String` | `checked`   |
| dot-svg           | 自定义未激活状态底部图标，详见svg组件| `String` | `dot-circle`|
| active-text-color | 自定义激活状态颜色               | `String` | `#268AED`   |
| active-line-color | 自定义激活线束颜色               | `String` | `#268AED`   |
---
### 4.3. collapse组件
![An image](/my-blog/static/collapse.gif)
---
### 基本用法
``` html

<pl-collapse :value="value" />
<pl-collapse :value="value" type="character" align="left" />
<pl-collapse :value="value" align="right" type="character" unfold-text="详细" fold-text="挂起" />
```
### API
|       参数      |         说明        |    类型  |      默认值    |
|-----------------|---------------------|----------|----------------|
| value           | 展开的内容                     | `String`       | -       |
| type            | 展开方式, 可选值`character`    | `String`       | `arrow` |
| align           | 展开动作的位置`left` `right`   | `String`       | `center`|
| unfold-text     | 展开描述文字                   | `String`       | `展开`  |
| fold-text       | 折叠描述文字                   | `String`       | `收起`  |

### 4.4. Switch开关
```html
  <pl-switch />
  <pl-switch is-checked />
  <pl-switch oblate />
```
---
<pl-switch isChecked />

<pl-switch oblate />

<pl-switch onOff isChecked />

<pl-switch rightWrong />

<pl-switch rightWrong isDisabled />

<pl-switch oblate isDisabled isChecked />

<pl-switch groupOn />

<pl-switch groupRw isChecked />

### API

|       参数      |         说明        |    类型  |      默认值    |
|-----------------|---------------------|----------|----------------|
| is-checked      | 是否选中             | `Boolean`       | `false` |
| is-disabled     | 是否禁用选中         | `Boolean`       | `false` |
| oblate          | 选中类型             | `Boolean`       | `false` |
| right-wrong     | 选中文本展示类型      | `Boolean`       | `false` |
| on-off          | 选中文本展示类型      | `Boolean`       | `false` |
| group-on        | 内部文本展示类型      | `Boolean`       | `false` |
| group-rw        | 内部文本展示类型      | `Boolean`       | `false` |

> 未完待续