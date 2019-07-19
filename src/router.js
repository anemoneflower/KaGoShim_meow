import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ViewContact from './components/ViewContact.vue'
import NewContact from './components/NewContact.vue'
// import Contacts from './views/Contacts.vue'
// import About from './views.About.vue'
// import Goods from './views.Goods.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Goods.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contacts.vue')
      // conponent: Contacts
    },
    {
      path: '/contacts/add',
      name: 'new-contact',
      component: NewContact
    },
    {
      path: '/contacts/:person/:success?',
      name: 'view-contact',
      component: ViewContact
    }

  ]
})
