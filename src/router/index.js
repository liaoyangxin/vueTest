import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CTwo from '@/components/CTwo'
import pageOne from '@/components/pages/pageOne'
import pageTwo from '@/components/pages/pageTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: 'CTwo',
          name: 'CTwo',
          component: CTwo,
        }
      ]
    },{
      path: '/pageOne',
      name: 'pageOne',
      component: pageOne
    },{
      path: '/pageTwo',
      name: 'pageTwo',
      component: pageTwo
    }
  ]
})
