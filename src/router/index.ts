import Dashboard from '../components/Pages/Dashboard.vue';
import Welcome from '../components/Pages/Welcome.vue';
import Workout from '../components/Pages/Workout.vue';

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/workout',
      name: 'workout',
      component: Workout,
    },
    {
      path: '/workout/:id',
      name: 'workout-info',
      component: Workout,
    },
  ],
});

export default router;
