function SelfVue(data,el,exp){
	var self = this;
	this.data = data
	observe(data)
	el.innerHTML = this.data[exp]  // 初始化模板数据的值
	new Watcher(this,exp,function (value) {
		el.innerHTML = value
	});
	return this
}