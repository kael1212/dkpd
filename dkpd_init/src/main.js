import Vue from 'vue'
import App from './App'
import './style/icon.css'
import './style/pages.css'
import './style/font.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

