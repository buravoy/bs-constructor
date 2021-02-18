import 'bootstrap/dist/css/bootstrap.min.css';
import 'line-awesome/dist/font-awesome-line-awesome/css/all.css';

import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.js';


import Vue from 'vue';
import App from './App.vue';
import store from './store'

Vue.config.productionTip = false;


new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

