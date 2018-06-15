// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
Vue.config.productionTip = false

/* eslint-disable no-new */
import ElementUI from 'element-ui';
Vue.use(ElementUI, {
    size: 'small'
});
import '@/assets/style/element-#D59B55/index.css';
import '@/assets/style/index.css';
import 'font-awesome/css/font-awesome.css';
import './register';
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
