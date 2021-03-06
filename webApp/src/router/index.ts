import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue'
import LoginPage from "@/views/LoginPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/Login',
    component: LoginPage,
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'Programmation',
        component: () => import('@/views/ProgrammationPage.vue')
      },
      {
        path: 'Settings',
        component: () => import('@/views/SettingsPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
