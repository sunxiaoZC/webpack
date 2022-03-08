import Vue from 'vue'
import router from '@/router/index'
import App from './App.vue'
import store from './store'
// import VueI18n from 'vue-i18n'
import { bus } from '@/utils/bus'
// Vue.use(VueI18n)
Vue.config.productionTip = false

console.log('主入口文件')
// window.eventBus = new Vue() // 注册全局事件对象

Vue.prototype.$bus = bus // 修改vue的原型链
// Vue 实例化

// 引入全局的过滤器
import '@/utils/filter'

// 引入全局的mixin
import '@/utils/mixins'
new Vue({
  router, // 挂载路由  this.$router
  store, // 挂载store
  render: h => h(App)
}).$mount('#app')

//  app 渲染模板
//  render 模板渲染函数
//  把根组件App 渲染到 div#app 里面
