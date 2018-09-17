import Vue from 'vue';
import analysis from './analysis/directive.js'

let analysis = {};

/**
 * 注册所有指令
 */
analysis.install = function(){
    Vue.directive('analysis', analysis);
};

export default analysis;