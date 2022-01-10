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
// 全局过滤器
import moment from 'moment';

Vue.filter('formatDuration', (dt) => {
    let min = Math.ceil(dt / 1000 / 60);
    // 转分
    min = min < 10 ? '0' + min : min;
    // 秒
    let sec = Math.ceil((dt / 1000) % 60);
    sec = sec < 10 ? '0' + sec : sec;
    return min + ':' + sec;
})
Vue.filter('formatTime', (time) => {
    return moment(time).format('YYYY-MM-DD hh:mm:ss');
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
    error: require('./assets/1.png'), //加载图片失败图片
    loading: require("./assets/0.jpg"),//加载状态图片
    attempt: 3,
})
Vue.use(APlayer, {
    defaultCover: require('./assets/推荐音乐图片.jpg'),
    productionTip: true,
});



Vue.use(VueRouter)


Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router,


}).$mount('#app')