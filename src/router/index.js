import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioSesionView from '../views/InicioSesionView.vue'
import CrearCuentaView from '@/views/CrearCuentaView.vue'
import PasswordView from '@/views/PasswordView.vue'
import CrearAlbumView from '@/views/CrearAlbumView.vue'

const routes = [
  { path: '/', name: 'inicio sesion', component: InicioSesionView },

  { path: '/home', name: 'home', component: HomeView },

  { path: '/crear-user', name: 'crear cuenta', component: CrearCuentaView},

  { path: '/recover-password', name: 'password', component: PasswordView},

  { path: '/create-album', name: 'crear album', component: CrearAlbumView},

  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
