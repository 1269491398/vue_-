import Vue from 'vue'
import App from './App.vue'
import "lib-flexible/flexible.js"
import "./assets/iconfont/iconfont.css"
//需要在入口js文件中注册路由器
import router from "./router/index"

Vue.config.productionTip = false

//以前的写法
// new Vue({
//   components:{
//     App
//   },
//   template: "<App>"
// })

new Vue({
  render: h => h(App),
  router,    //这个配置后 所有组件都能看到 $router和$route  一个代表路由器 一个代表路由 <router-link/> 和 <router-view/>
}).$mount('#app')
