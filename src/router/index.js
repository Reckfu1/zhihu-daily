import Vue from 'vue'
import Router from 'vue-router'
import content from '../views/content'
import index from '../views/index'
import comment from '../views/comment'
import themesList from '../views/themesList'

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
      path: '/stories/:frompath/:id',
      component:content
    },
    {
      name:'comment',
      path:'/stories/:id/comments',
      component:comment
    },
    {
      name:'themesList',
      path:'/themes/:id',
      component:themesList
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
  },
  base:'zhihu-daily/'
})
