// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import CreateRoom from './components/CreateRoom.vue';
import JoinRoom from './components/JoinRoom.vue';
import VotingRoom from './components/VotingRoom.vue';

const routes = [
    { path: '/scrumpoker', component: CreateRoom },
    { path: '/scrumpoker/join', component: JoinRoom },
    { path: '/scrumpoker/room/:id', component: VotingRoom },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;