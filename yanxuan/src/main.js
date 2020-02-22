// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/index'
import 'lib-flexible/flexible'
import waterfall from 'vue-waterfall2'
import './veeValidate'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(waterfall)
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  // waterfall
})
