function Watcher(vm,exp,cb){
	console.log(vm)
	console.log(exp)
	console.log(cb)
	this.cb = cb
	this.vm = vm
	this.exp = exp
	this.value = this.get()  // 将自己添加到订阅器
}

Watcher.prototype = {
	update:function(){
		this.run();
	},
	run:function(){
		var value = this.vm.data[this.exp]
		var oldVal = this.value
		if(value !== oldVal) {
			this.value = value
			this.cb.call(this.vm,value,oldVal)
		}
	},
	get:function(){
		Dep.target = this  //缓存
        var value = this.vm.data[this.exp]  // 执行监听器里的get函数,触发监听
        Dep.target = null //释放
        return value
	}
}