import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import About from '@/views/About.vue'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/lost',
    name: 'lost',
    component: () => import('@/components/NotFound.vue'),
    meta: {
      keepAlive: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    console.log(to.path)
    store.commit('changeupToTop', false)
  } else {
    store.commit('changeupToTop', true)
  }
  next()
})

export default router
