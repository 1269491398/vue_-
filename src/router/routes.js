/*
将所有路由配置单独卸写在一个文件中

*/ 
import MSite  from "../pages/MSite/MSite.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Search from "../pages/Search/Search.vue"


export default [
    {
        path: "/msite",
        component: MSite
    },
    {
         path: "/search",
         component: Search
    },
    {
        path: "/order",
        component: Order
    },
    {
        path: "/profile",
        component: Profile
    },
    // 配置一个自动重定向的路由
    {
        path: "/",
        redirect: "/msite"
    }

]