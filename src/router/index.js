import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/test",
        name: "Test",
        component: () => import('@/components/Test')
    },
    {
        path: "/",
        name: "Home",
        component: () => import('@/components/HelloWorld')
    },
    {
        path: "/home",
        name: "HomePage",
        component: () => import('@/pages/Home')
    }
]

const router = new VueRouter({
    mode: "history",
    routes: routes,
    base: process.env.BASE_URL
})

export default router