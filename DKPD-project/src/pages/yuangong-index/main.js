import Vue from 'vue'
import App from './index'



const app = new Vue(App)
app.$mount()

export default {
  config: {
    usingComponents: {
      'i-radio-group': '../../../static/iview/radio-group/index',
      'i-radio': '../../../static/iview/radio/index'
    }
  }
}