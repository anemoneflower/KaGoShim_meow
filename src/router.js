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
                import ('./views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./views/Login.vue')
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
        },
        {
            path: '/supportwriter',
            name: 'supportwriter',
            component: () =>
                import ('./components/SupportWriter.vue')

        },
        //Goods page
        {
            path: '/goods',
            name: 'goods',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Goods.vue')
        },
        //Add goods page
        {
            path: '/goods/add',
            name: 'new-goods',
            component: () =>
                import ('./components/NewGoods.vue')
        },
        {
            path: '/upload',
            name: 'upload',
            component: () =>
                import ('./components/Upload.vue')
        },
        {
            path: '/posts',
            name: 'community',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/community.vue')
        },
        {
            path: '/posts/add',
            name: 'new-posts',
            component: () =>
                import ('./components/newpost.vue')
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: () =>
                import ('./views/gallery.vue')
        },
        {
            path: '/gallery/add',
            name: 'new-gallery',
            component: () =>
                import ('./components/galleryuploader.vue')
        },
        {
            path: '/verification',
            name: 'verification',
            component: () =>
                import ('./components/verification.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () =>
                import ('./components/LogoutComp.vue')
        },
          {
            path: '/gallery/add2',
            name: 'new-gallery2',
            component: () => import('./views/galleryuploader2.vue')
          },
    ]
})