import { createRouter, createWebHistory } from 'vue-router';

const LoginView = () => import('@/views/LoginView.vue');
const CatalogView = () => import('@/views/CatalogView.vue');
const EquipmentView = () => import('@/views/EquipmentView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/catalog',
      name: 'catalog',
      props: { type: 'categories' },
      component: CatalogView,
      children: [
        {
          path: ':category',
          name: 'category',
          props: { type: 'subcategories' },
          component: CatalogView,
          children: [
            {
              path: ':subcategory',
              name: 'subcategory',
              props: route => ({ id: route.params.subcategory }),
              component: EquipmentView,
            }
          ],
        }
      ],
    },
  ],
});

export default router
