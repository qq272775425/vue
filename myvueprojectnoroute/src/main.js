// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({//实例创建 
  el: '#app',//绑定元素 绑定根视图
  components: { App },//组件注入
  template: '<App/>'//指定跟组件
})

// //组件的引入需要三步
// 1. 组件的引入: import App from './App'
// 2.加载视图 template: '<App/>'//指定跟组件
// 3.创建一个组件的名字: components: { App },//组件注入,加载视图的名字和组件的名字是相同的