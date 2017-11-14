import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import Index from '../pages/Index'
import CommonComponents from '../pages/CommonComponents'
import Pagination from '../pages/Pagination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/CommonComponents'
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/CommonComponents',
        name: 'CommonComponents',
        component: CommonComponents
      },{
        path: '/Pagination',
        name: 'Pagination',
        component: Pagination
      }]
    }
  ]
})
