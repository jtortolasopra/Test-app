import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Settings from '@/views/Settings.vue';
import Users from '@/views/Users.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/users', name: 'Users', component: Users }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
