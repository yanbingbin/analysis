import Vue from 'vue';
import analysisDirective from './directives/analysis/directive.js'

let analysis = {};

/**
 * 注册所有指令
 */
analysis.install = function(){
    Vue.directive('analysis', analysisDirective);
};

const addItem = function(value) {
	console.log(value)
}

export {addItem, analysis}

export default analysis;