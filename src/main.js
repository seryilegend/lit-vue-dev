import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './components/Header.vue'
import example_1 from './components/example_1.vue'
import example_2 from './components/example_2.vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Header },
  { path: '/example_1/', component: example_1 },
  { path: '/example_2/', component: example_2 }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')