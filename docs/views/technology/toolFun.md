### :100: 工具类函数

为提高工作效率，节省开发时间，常用的一些工具类归纳总结

## 1. 时间格式化

```js
/**
 * @params time时间戳
 * @params cFormat 格式化类型 {y}-{m}-{d} {h}:{i}:{s}
 * 其中 y | m | d | h | m | s | a 分别表示 年 | 月 | 日 | 时 | 分 | 秒 | 周几
 * 支持 {y}-{m}-{d}、 {y}年{m}月{d}日
*/
export function formatTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') { return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
```
:::tip
formatTime(1568171857433) --> 2019-09-11 11:17:37

formatTime(1568171857433, '{y}-{m}-{d}') --> 2019-09-11

formatTime(1568171857433, '{h}:{i}:{s}') --> 11:17:37

formatTime(1568171857433, '{a}') --> 周三

formatTime(1568171857433, '{y}年{m}月{d}日') --> 2019年09月11日

formatTime(128000, '{i}:{s}') --> 02:08
:::

## 2. 以“天”为单位获取响应的时间戳
```js
/**
 * @params num > 0 获得未来的时间
 * @params num < 0 获得过去时间
*/
export function setDate(num) {
  return Date.now() + num * 24 * 60 * 60 * 1000
}
```
::: tip
12 个小时之前的时间 -> setDate(-.5)

24 个小时之前的时间 -> setDate(-1)

三天后的时间 -> setDate(3)
:::

## 3. 获取 URL 中的参数
```js
export function getUrlParams (param) {
  let reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)'),
    result = location.search.substring(1).match(reg)
  return result && result[2]
}
```
::: tip
举例：https://xxx.com?id=352&valiageId=25

getUrlParams(id) --> 352
:::
## 4. 深层拷贝
```js
export function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
```

## 5. 将驼峰命名转为中横杠
```js
export function toMiddleLine (str) {
  let temp = str.replace(/[A-Z]/g,
  function (match) {
    return '-' + match.toLowerCase()
  })
  // 如果首字母是大写，执行replace时会多一个-，这里需要去掉
  if (temp.slice(0, 1) === '-') {
    temp = temp.slice(1)
  }
  return temp
}
```
::: tip
toMiddleLine(PlInputGroup) --> pl-input-group
:::

## 6. 浏览器类型判断
```js
BrowserType = {
  isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
  isIPhone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
  isIPad: Boolean(navigator.userAgent.match(/ipad/ig)),
  isWeiChat: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/ig)),
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
}
```
> 浏览器是否为安卓 & 苹果 & iPad & 微信 & 支付宝 & 手机端

## 7. 多维数组降维
#### 二维数组
```js
export function toTwoArray(arr) {
  return Array.prototype.concat.apply([], arr)
}
```
:::tip
let arr = [ [1], [2], [3] ]

toTwoArray(arr) --> [1, 2, 3]
:::
#### 多维数组
[`Array.prototype.flat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

> flat 有兼容性问题，手机端问题不大。浏览器端不兼容 edge，使用 **`Infinity`** 作为深度，展开任意深度的嵌套数组
:::tip
  var arr1 = [1, 2, [3, 4]];
  arr1.flat(); 
  --> [1, 2, 3, 4]

  var arr2 = [1, 2, [3, 4, [5, 6]]];
  arr2.flat();
  --> [1, 2, 3, 4, [5, 6]]

  var arr3 = [1, 2, [3, 4, [5, 6]]];
  arr3.flat(2);
  --> [1, 2, 3, 4, 5, 6]

  // 使用 **`Infinity`** 作为深度，展开任意深度的嵌套数组

  arr3.flat(Infinity); 
  --> [1, 2, 3, 4, 5, 6]
:::

## 8. 数组最大最小值
```js
// 最小值
export function minimum (array) {                      
  return Math.min.apply(Math, array)   
}
// 最大值
export function maximum (array) {                      
  return Math.max.apply(Math, array) 
}
```
:::tip
minimum([0, 1, 4, 9]); --> 0

maximum([0, 1, 4, 9]); --> 9
:::
## 9. 防抖 & 节流
### 防抖
```js
function debounce (func, delay) {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
```
### 节流
```js
function throttle(func, wait) {
  let previous = 0
  return function() {
    let now = Date.now()
    let context = this
    let args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}
```
## 10. 生成一个取值内的随机数
```js
export const rand = (function () {
  const today = new Date()
  let seed = today.getTime()
  // 生成
  function generated() {
    seed = (seed * 9301 + 49297) % 233280
    return seed / (233280.0)
  }
  return function rand(number) {
    return Math.ceil(generated(seed) * number)
  }
})()
```

## 11. 数字单位转换
```js
export const transNumber = (num) => {
  let numStr = parseInt(num).toString()
  if (numStr.length < 5) { // 一万以内直接返回
    return num
  } else if (numStr.length > 8) { // 大于8位数是亿
    let decimal = numStr.substring(numStr.length - 8)
    return parseInt(parseInt(num / 100000000) + '.' + decimal) + '亿'
  } else {
    let decimal = numStr.substring(numStr.length - 4)
    return parseInt(parseInt(num / 10000) + '.' + decimal) + '万'
  }
}
```

## 12. 毫秒转标准分钟
用上面第一个方法`formatTime()`就可以实现
```js
// 毫秒转标准分钟
export function standardTime (second) {
  second = Math.floor(second)
  let minute = Math.floor(second / 60)
  second = second - minute * 60
  return minute + ':' + formatTime(second)
}

// 格式化分秒
export function formatMiniTime (time) {
  let timeStr = '00'
  if (time > 0 && time < 10) {
    timeStr = '0' + time;
  } else if (time >= 10) {
    timeStr = time
  }
  return timeStr
}
```