### :100: 优雅降级的处理图片加载异常

在开发过程中，难免不会碰到加载图片，因此怎么提升交互体验是一个问题，可以查看[img标签](https://www.w3school.com.cn/tags/tag_img.asp)处理

## 1. 监听`error`事件

图片加载失败后，会抛出一个`error`事件，可以通过监听`error`事件的方式来对图片进行降级处理
```html
<img id="img" src="img.png">
```
监听`error`事件

```js
let img = document.getElementById('img');

img.addEventListener('error', function (e) {
    e.target.src = 'default.png' // 为当前图片设定默认图
})
```
缺点：每张图片都需要通过 JS 进行获取, 并监听`error`事件的降级处理，不利于大量图片处理。

因此可以通过内联的onerror事件， 监听error事件降级处理

```html
<img src="img.png" onerror="this.src = 'default.png'">
```
当img.png不存在时，触发`onerror`事件，将图片替换成default.png。即img.png存在，显示logo.png，否则显示default.png。

**问题**：如果default.png也不存在，会一直触发 `onerror`事件，导致死循环，特别说明：如果图片存在，但网络很不通畅，也可能触发 onerror事件。

**解决方法**：中断循环

```html
 <img src="img.png" @error="imgError($event)" alt="image">
 
 <img src="img.png" onerror="imgError()" alt="image">
```

```js
<!-- vue -->
imgError (event) {
  var img = event.srcElement
  img.src = 'default.png'
  img.onerror = null // 控制不要一直跳动
}
<!-- 原生js -->
<script type="text/javascript"> 
    function imgerrorfun (event) { 
      var img = event.srcElement
      img.src = 'default.png' 
      img.onerror = null // 控制不要一直跳动 
    } 
</script> 
```
## 2. 全局监听

2.1 网络正常情况：

```js
window.addEventListener('error', function (e) {
    // 当前异常是由图片加载异常引起的
    if( e.target.tagName.toUpperCase() === 'IMG' ){
        e.target.src = 'default.jpg';
    }
}, true)
```

2.2 网络异常情况：

必然会出现什么网络图片都无法加载的情况，这样就会导致我们监听的 error 事件 被无限触发，所以我们可以设定一个计数器，当达到期望的错误次数时停止对图片赋予默认图片的操作，改为提供一个Base64的图片（网络异常时，default.img也是加载不了的，那么base64就能解决这个问题）

```js
window.addEventListener('error', function (e) {
    let target = e.target,
        times = Number(target.dataset.times) || 0, // 以失败的次数，默认为0
        allTimes = 3; // 总失败次数，此时设定为3
    // 当前异常是由图片加载异常引起的
    if ( target.tagName.toUpperCase() === 'IMG' ) {
      if (times >= allTimes) {
        target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      } else {
        target.dataset.times = times + 1;
        target.src = 'default.jpg';
      }
    }
}, true)

```