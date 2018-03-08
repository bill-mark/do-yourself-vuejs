function defineReactive(data,key,val){
    observer(val);  //递归深对象
    var dep = new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            if(Dep.target){  
                dep.addSub(Dep.target)  //添加订阅者
            }
            return val
        },
        set:function(newVal){
            if(val === newVal){
                return
            }
            val = newVal;
            dep.notify()
            console.log('属性'+key+'已被监听了,现在值为:" '+newVal.toString()+'"')
        }
    })
}

function Dep(){
    this.subs = []  //订阅者列表
}
Dep.target = null
Dep.prototype = {
    addSub:function(sub){
        this.subs.push(sub)
    },
    notify:function(){
        this.subs.forEach( (sub)=>{
            sub.update()
        })
    }
}


function observer(data){
    if(!data || typeof data !== 'object'){
        return
    }
    Object.keys(data).forEach(function(key){
        defineReactive(data,key,data[key])
    })
}

