import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import { useUserStore } from '@/stores/user';

const Login = () => import('@/views/Login.vue');
const Registro = () => import('@/views/Registro.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/registro',
    component: Registro,
    meta: { requiresAuth: false }
  },
  {
    path: '/tabs/',
    component: TabsPage,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(), //import.meta.env.BASE_URL
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isAuthenticated = !!userStore.authToken;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if(isAuthenticated && !to.meta.requiresAuth) {
    next('/tabs/tab1');
  } else {
    next();
  }
});

export default router
