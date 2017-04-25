import Vue from 'vue'
import Router from 'vue-router'
import content from '../views/content'
import index from '../views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'index',
      path:'/',
      component:index
    },
    {
      name:'content',
      path: '/stories/latest/:id',
      component:content
    }
  ]
})
