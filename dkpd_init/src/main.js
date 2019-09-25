import Vue from 'vue'
import App from './App'
import './style/box.css'
import './style/background.css'
import './style/icon.css'
import './style/pages.css'
import './style/font.css'
import './style/list.css'
import './style/title.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

