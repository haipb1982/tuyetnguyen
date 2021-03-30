import Vue from "vue";
import Vuex from "vuex";
import basic from "./basic/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    basic,
  }
});
