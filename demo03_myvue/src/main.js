import Vue from 'vue'
import App from './App'
import iView from 'iview'


Vue.use(iView)





Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

