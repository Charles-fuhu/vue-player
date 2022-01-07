export default [

    {
        path: '/discovery',
        component: () => import('../components/Discovery.vue')
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
        component: () => import('../components/mvs.vue')
    },
    {
        path: '/result',
        component: () => import('../components/result.vue')
    }



]