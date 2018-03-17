import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',//传递数据使用
      component: Index
    },{
      path: '/course',
      name: 'Course',//传递数据使用
      component: Course
    }
  ]
})
