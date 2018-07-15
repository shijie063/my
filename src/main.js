// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(router)
Vue.use(MintUI)
Vue.config.productionTip = false//阻止启动生产消息
import '../static/css/reset.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
  