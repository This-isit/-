import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Public from '../views/public/Public.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Home',
   redirect:'/'
  },
  {
    path: '/',
    name: 'public',
    component: Public,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
       {
    path: '/post',
    name: 'post',
   
    component: () => import( '../views/post.vue')
  },
  {
    path: '/detail',
    name: 'detail',
   
    component: () => import( '../views/detail.vue')
  },
  {
    path: '/air',
    name: 'air',
   
    component: () => import( '../views/air.vue')
  },
  {
    path: '/airpocket',
    name: 'airpocket',
   
    component: () => import( '../views/airpocket.vue')
  },
  {
    path: '/paymentair',
    name: 'paymentair',
   
    component: () => import( '../views/paymentair.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import( '../views/hotel.vue')
  },



  

    ]
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
 
  {
    path: '/hotel',
    name: 'hotel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/hotel.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
