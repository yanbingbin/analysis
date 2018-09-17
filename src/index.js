import Vue from 'vue';
import analysis from './directives/analysis/directive.js'

let analysis = {};

/**
 * 注册所有指令
 */
analysis.install = function(){
    Vue.directive('analysis', analysis);
};

const addItem = function(value) {
	console.log(value)
}

export {addItem, analysis}

export default analysis;