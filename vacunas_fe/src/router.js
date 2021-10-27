import { createRouter, createWebHashHistory } from 'vue-router'
import App                                    from './App.vue'

import Login                                  from './components/Login.vue'
import SignUp                                 from './components/SignUp.vue'
import asignacion                             from './components/asignacion.vue'
import Home                                   from './components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  }, 
  {
    path: '/asignacion/',
    name: 'asignacion',
    component: asignacion
  }, 
  {
    path: '/login/',
    name: 'login',
    component: Login
  }, 
  {
    path: '/territorio/',
    name: 'signUp',
    component: SignUp
  }, 
  {
    path: '/home/',
    name: 'home',
    component: Home
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
