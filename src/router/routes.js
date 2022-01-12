import Discovery from '../components/Discovery.vue'
export default [
    {
        path: '/',
        redirect: '/discovery'
    },
    {
        path: '/discovery',
        component: Discovery
    },
    {
        path: '/playlist',
        component: () => import('../components/Playlist.vue')
    },
    {
        path: '/songs',
        component: () => import('../components/songs.vue')
    },
    {
        path: '/mvs',
        component: () => import('../components/mvs.vue'),
    },
    {
        path: '/result',
        component: () => import('../components/result.vue')
    },
    {
        path: '/mv',
        component: () => import('../components/Mvplayer.vue')
    },
    {
        path: '/toplaylist',
        component: () => import('../components/Toplaylist.vue')
    }
]