import { SITE_TITLE } from '@/constants';
import { createRouter, createWebHistory } from 'vue-router';

declare module 'vue-router' { 
  interface RouteMeta {
    title: string;
  }
}

function createViewTitle(title: string) {
  return `${title} - ${SITE_TITLE}`;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: createViewTitle('Home'),
      },
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
    return;
  }

  document.title = SITE_TITLE;
});

export default router;
