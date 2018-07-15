import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import talk from '@/components/talk'
import mark from '@/components/mark'
import index from '@/components/index'
import elm from '@/components/elm'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'index',
      component: index,
      redirect: '/Home',
      children: [{
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/Talk',
          name: 'Talk',
          component: talk
        },
      ]
    },
    {
      path: '/elm',
      name: 'elm',
      component: elm
    },
    {
      path: '/Mark',
      name: 'Mark',
      component: mark
    },



  ]
})
