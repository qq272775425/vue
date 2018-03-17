// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://www.wwtliu.com'; //定义全局链接,在子组件中postget请求不需要在写主域名

Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//配置headers post方法需要配置一下请求头

Vue.config.productionTip = false
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("请求"+config);
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("响应"+response);
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
