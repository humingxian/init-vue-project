import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/test'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../page/home/index.vue'),
      redirect: '/home/a',
      children: [
        {
          path: 'a',
          name: 'a',
          component: () => import('../page/home/children/a.vue'),
          redirect: '/home/a/A',
          children: [
            {
              path: 'A',
              name: 'A',
              component: () => import('../page/home/children/children/A.vue')
            },
            {
              path: 'B',
              name: 'B',
              component: () => import('../page/home/children/children/B.vue')
            }
          ]
        },
        {
          path: 'b',
          name: 'b',
          component: () => import('../page/home/children/b.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/about/index.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../page/test.vue')
    },
    {
      path: '/animate',
      name: 'animate',
      component: () => import('../page/animate')
    },
    {
      path: '/three',
      name: 'three',
      component: () => import('../page/three'),
      redirect: '/three/example_01',
      children: [
        {
          path: 'example_01',
          name: 'example_01',
          component: () => import('../page/three/example_01.vue')
        },
        {
          path: 'example_02',
          name: 'example_02',
          component: () => import('../page/three/example_02.vue')
        },
        {
          path: 'example_03',
          name: 'example_03',
          component: () => import('../page/three/example_03.vue')
        },
        {
          path: 'example_04',
          name: 'example_04',
          component: () => import('../page/three/example_04.vue')
        }
      ]
    }
  ]
})
