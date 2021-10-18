function defineReactive(data, key, val) {
  observe(val); //递归深对象
  var dep = new Dep();
  console.log(dep)
  console.log( JSON.stringify(dep) )
  //return

  Object.defineProperty(data, key, {
    enumerable: true, //for in或者object,key 是否可枚举
    configurable: true, //对象隐藏属性是否可配置
    get: function () {
      if (Dep.target) {
        //判断是否需要添加订阅者
        dep.addSub(Dep.target); //添加订阅者
      }
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;

      console.log(
        "属性" + key + '已被监听了,现在值为:" ' + newVal.toString() + '"'
      );
      dep.notify(); // 如果数据变化，通知所有订阅者
    },
  });
}

//监听器
function observe(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
}

//订阅器
//专门收集多个订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理
//没有return  new的时候会返回一个对象
function Dep() {
  this.subs = []; //订阅者列表
}

Dep.target = null;
Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  notify: function () {  //notify 通知
    this.subs.forEach((sub) => {
      sub.update();
    });
  },
};
