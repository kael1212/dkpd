import Vue from 'vue'
import App from './index'

// add this to handle exception  异常处理函数
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
