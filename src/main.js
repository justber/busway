import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/base.css'
import api from './api/index.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$api = api;
Vue.config.productionTip = false
window._AMapSecurityConfig = {
            securityJsCode:'4eea9eea229a17d3102b295c629ceb38',
}
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
