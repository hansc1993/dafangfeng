import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Tools from './utils/tools'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.less'
import './assets/font/iconfont.css'
import { install as Axios } from './api'
import API from './api/url'

Vue.use(ElementUI);
Vue.use(Axios);
Vue.prototype.API = API
Vue.prototype.Tools = Tools
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
