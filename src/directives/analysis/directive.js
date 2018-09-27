import Vue from 'vue'
let analysis = {
	bind(el, binding,vnode) {//被绑定
		el.addEventListener('click', () => {
			const data = binding.value;
			console.log(binding.value)
			// 在此调用接口发送数据
			Vue.prototype.$addAnalysisData(data)
			
		}, false);
	},
    inserted(){//绑定到节点
    	
    },
    update(){//组件更新
    	
    },
    componentUpdated(){//组件更新完成
    	
    },
    unbind(){//指令与元素解绑，这个无法完成手动解绑
       
	}
};

export default analysis;