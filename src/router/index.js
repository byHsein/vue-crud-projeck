import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateEdit from '@/views/CreateEdit.vue'
import Login from '@/views/Login.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CreateEdit',
    name: 'CreateEdit',
    component: CreateEdit
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },


]

const router = createRouter({
  linkActiveClass:'active',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
