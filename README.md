# do-yourself-vuejs
vuejs原理和简单实现一个Vue框架

用Vue有一段时间了,感觉是时候探究探究原理了,go it!



# 原理

vue2采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter,getter，在数据变动时发布消息给订阅者，触发相应的监听回调


# Object.defineProperty
1.换种方式打印对象属性

# 参考
https://juejin.cn/post/6844903650653913095

https://segmentfault.com/a/1190000013051584
