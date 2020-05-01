import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/components/HelloWorld')
    },
    {
        path: "/home",
        name: "HomePage",
        component: () => import('@/pages/Home')
    },
    {
        path: "/products",
        name: "ProductPage",
        component: () => import('@/pages/Products')
    }
]

const router = new VueRouter({
    mode: "history",
    routes: routes,
    base: process.env.BASE_URL
})

export default router