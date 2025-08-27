import secutityRoutes from '@/modules/security/secutityRoutes.ts'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/modules/dashboard/DashboardPage.vue'
import { getContext } from '@/helpers/Security.ts'
import AdminLayout from '@/components/layouts/AdminLayout.vue'
import UserPage from '@/modules/user/UserPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: AdminLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardPage
        },
        {
          path: "/users",
          name: "user",
          component: UserPage
        },
      ]
    },
    ...secutityRoutes,
  ],
})

router.beforeEach((to, from, next) => {
  const context = getContext()
  if (!context && to.name !== 'login') {
    next({name: 'login'})
  }
  next()
})

export default router
