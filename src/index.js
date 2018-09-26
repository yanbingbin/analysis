import Vue from 'vue';
import analysisDirective from './directives/analysis/directive.js'

export default {
	install(Vue, options) {
		Vue.globalMethod = function () { // 1、添加全局的方法或属性
			console.log('globalMethod')
		}; 
		
		Vue.directive('analysis', analysisDirective); // 2、添加全局资源：指令、过滤器等
		
		Vue.mixin({
			created: function () { // 3、通过全局mixin方法添加一些组件选项
				
			},
			methods: { // 在单文件组件中可以直接通过this.logInfo()调用
				logInfo() {
					console.log('logInfo'); 
				}
			}
		})
		
		Vue.prototype.$addAnalysisData = function (data) { // 4、添加实例方法,通过this.$addAnalysisData()调用
			// 把数据存储到本地
			let storage = window.localStorage; 
			let analysisData = JSON.parse(storage.getItem('analysis'));
			
			// 第一次添加无数据
			if (!analysisData) {
				analysisData = [];
			} 
			analysisData.push(data);
			storage.setItem('analysis',JSON.stringify(analysisData))
		}
	}
}
