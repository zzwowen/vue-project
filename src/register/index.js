//创建时间2018-06-13 <zhouzw@3clear.com>

import Vue from 'vue';
import libs from './lib.js';
import _ from 'lodash';
let GlobePlugin = {};
GlobePlugin.install = function (Vue, options) {

    let env = process.env;
    _.forEach(libs, function(item,key) {//注册jquery为全局方法
     Vue.prototype['$$' + key] = item;
   });

}
Vue.use(GlobePlugin);
