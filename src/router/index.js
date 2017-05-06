import Vue from 'vue'
import Router from 'vue-router'
import content from '../views/content'
import index from '../views/index'
import comment from '../views/comment'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      name:'comment',
      path:'/stories/latest/:id/comments',
      component:comment
    }
  ],
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }

    let position={
      x:0,
      y:0
    }

    if(to.path==='/'){
      position.y=+sessionStorage.getItem('scrollTop')
    }

    return position
  }
})
