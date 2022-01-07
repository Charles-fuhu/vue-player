import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import VueRouter from 'vue-router'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
import "babel-polyfill"

Vue.use(element)



Vue.use(VueRouter)


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,


}).$mount('#app')