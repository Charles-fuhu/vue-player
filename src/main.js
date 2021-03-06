import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import VueRouter from 'vue-router'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
import "babel-polyfill"
import APlayer from '@moefe/vue-aplayer'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
// 全局过滤器
Vue.filter('formatDuration', (dt) => {
    let min = Math.ceil(dt / 1000 / 60);
    // 转分
    min = min < 10 ? '0' + min : min;
    // 秒
    let sec = Math.ceil((dt / 1000) % 60);
    sec = sec < 10 ? '0' + sec : sec;
    return min + ':' + sec;
})
Vue.filter('formatCount', (count) => {
    if (count / 10000 > 10) {
        return parseInt(count / 10000) + '万';
    } else {
        return count;
    }
})
Vue.use(element)
Vue.use(VueLazyload, {

    loading: require("./assets/0.jpg"),//加载状态图片
    attempt: 3,
})
Vue.use(APlayer, {
    defaultCover: require('./assets/COVER.jpg'),
    productionTip: true,
});
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router,store
}).$mount('#app')