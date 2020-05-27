import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Header from './components/Header.vue'
import example_1 from './components/example_1.vue'
import example_2 from './components/example_2.vue'
import App from './App.vue'
import VueCycle from './components/VueCycle.vue'
import { APP_STORE } from './components/store'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/', component: Header },
  { path: '/example_1/', component: example_1 },
  { path: '/example_2/', component: example_2 },
  { path: '/vuecycle/', component: VueCycle }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const store = new Vuex.Store(APP_STORE);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')