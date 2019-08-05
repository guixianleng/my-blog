### :tada: Redux的TodoList
## 1. Redux介绍
Redux 是 JavaScript 状态容器，提供可预测化的状态管理。官方的数据流如下图：
![image](https://user-gold-cdn.xitu.io/2019/7/29/16c3b1b732f51043?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

数据存储state，只能通过action改变，纯函数reducer执行修改state，驱动更新components

`store`文件夹的创建store（state 是只读的）

`index.js`
```js
    import { createStore } from 'redux'
    import reducer from './reducer'
    const store = createStore(reducer)
    
    export default store
```
`reducer.js`
```js
const defaultStore = {
    value: 'something value'
}
export default (state = defaultStore, action) => {
    switch () {
      case '':
        let newState = Object.assign({}, state, {
            value: action.value
        })
        return newState
      default:
        return state
    }
}
```

- state是唯一的、只读的
```js
console.log(store.getState())
```
- 只能通过action改变state
```js
const action = {
  type: 'TODO',
  index: 1
}
store.dispatch(action)
```
- 使用纯函数来执行修改
```js
function todos (state = [], action) {
  switch (action.type) {
    case 'TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
 
```
## 2. 初始化项目

2.1 安装脚手架
```shell
$ npm install -g create-react-app
```

2.2 创建项目
```shell
E：// 进入E盘
mkdir ReduxDemo
cd ReduxDemo
create-react-app todo
cd todo
npm start/ yarn start
```

2.3 安装Redux
```shell
$ npm install redux --save
```

2.4 插件`Redux DevTools`

##### 安装

[谷歌应用市场](!https://chrome.google.com/webstore?utm_source=chrome-ntp-icon)搜索 `Redux DevTools`并安装

##### 配置
```js
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

在store的`index.js`中添加
```js
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```
表示：判断window有没有这个方法，有则执行这个方法。
