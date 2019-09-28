import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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

Vue.use(ElementUI,);
const app = new Vue({
    el: '#app',
    render: h => h(App)
  });
app.$mount()


