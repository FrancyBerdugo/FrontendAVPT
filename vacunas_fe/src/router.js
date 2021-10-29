import { createRouter, createWebHashHistory } from 'vue-router'
import App                                    from './App.vue'

import Login                                  from './components/Login.vue'
import SignUp                                 from './components/SignUp.vue'
import asignacion                             from './components/asignacion.vue'
import Home                                   from './components/Home.vue'
import Menu                                   from './components/Menu.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  }, 
  {
    path: '/login/',
    name: 'Login',
    component: Login
  }, 
  {
    path: '/territorio/',
    name: 'SignUp',
    component: SignUp
  }, 
  {
    path: '/Home/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/asignacion/',
    name: 'asignacion',
    component: asignacion
  }, 
  {
    path: '/menu/',
    name: 'Menu',
    component: Menu
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
