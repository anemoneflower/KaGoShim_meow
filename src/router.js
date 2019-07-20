import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{ //존재하지 않는 모든 경로를 로그인 컴포넌트로 리다이렉션
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Login.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () =>
                import ('./components/SignupEmail.vue')
        },
        {
            path: '/mypage',
            name: 'mypage',
            component: () =>
                import ('./views/MyPage.vue')
        },
        {
            path: '/support',
            name: 'support',
            component: () =>
                import ('./views/Support.vue')
        }
    ]
})