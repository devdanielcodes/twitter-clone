import { createRouter, createWebHistory } from 'vue-router'

//Components
import Home from "@/components/Home.vue"
import Notifications from "@/components/Notifications.vue"
import Profile from "@/components/Profile.vue"


const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/notifications',
            name: 'Notifications',
            component: Notifications
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        }
    ],
    history: createWebHistory()
})

export default router