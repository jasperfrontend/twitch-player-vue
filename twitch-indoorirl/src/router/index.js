import { createRouter, createWebHistory } from 'vue-router'
import TwitchPlayer from '@/components/TwitchPlayer.vue';

const routes = [
  {
    path: '/:streamer',
    name: 'Streamer',
    component: TwitchPlayer,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
