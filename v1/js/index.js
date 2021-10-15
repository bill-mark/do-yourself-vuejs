function SelfVue(data,el,exp){
	this.data = data  //传递过来的对象

	observe(data) //监听该对象

	el.innerHTML = this.data[exp]  // 初始化模板数据的值

	//订阅者 function更新会在watcher.js中回调
	new Watcher(this,exp,function (value) {
		el.innerHTML = value
	});
	
	return this
}