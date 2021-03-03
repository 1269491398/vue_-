//路由的入口js文件 
/*
    向外暴露路由器对象模块
 */ 
import Vue from "vue"
import VueRouter from "vue-router"

//引入路由配置的文件
import routes from "./routes"

//需要引入刚刚写的四个路由组件 pages文件夹下的
// import { MSite } from "./pages/MSite/MSite.vue";
// import Order from "./pages/Order/Order.vue"
// import Profile from "./pages/Profile/Profile.vue"
// import Search from "./pages/Search/Search.vue"

//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({

    mode: "history", //配置这个选项后 路由路径中没有 # 号

   //配置项目中所有的路由 
   routes
})