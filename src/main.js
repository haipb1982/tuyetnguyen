import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import Vuex from 'vuex'
import store from "./store/index";

import VueLoading from 'vuejs-loading-plugin'

// using default options
// Vue.use(VueLoading)

// overwrite defaults
Vue.use(VueLoading, {
    dark: true, // default false
    text: 'Đang tải', // default 'Loading'
    loading: true, // default false
    // customLoader: myVueComponent, // replaces the spinner and text with your own
    background: 'rgb(255,255,255)', // set custom background
    classes: ['myclass'] // array, object or string
})

Vue.use(Vuex)

Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')