import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/lost',
    name: 'lost',
    component: () => import('@/components/NotFound.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/components/Editor')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog')
  },
  {
    path: '/links',
    name: 'link',
    component: () => import('@/views/Links')
  },
  {
    path: '/words',
    name: 'words',
    component: () => import('@/views/LeaveWords')
  },
  {
    path: '*',
    redirect: '/lost'
  }
]

const router = new VueRouter({
  routes
})

export default router
