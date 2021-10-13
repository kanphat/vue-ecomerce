import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateComponent from '../components/CreateComponent.vue'
import ListComponent from '../components/ListComponent.vue'
import EditComponent from '../components/EditComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CreateComponent
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    component: () =>
    import ( /* webpackChunkName: "demo" */ '../views/About.vue')
  },
  {
    path: '/view',
    name: 'View',
    component:ListComponent
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/ListComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
