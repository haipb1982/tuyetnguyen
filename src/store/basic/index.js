/* eslint-disable no-console */
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default {
  state() {
    return {
     dataView:[
     ]
    };
  },
  actions,
  mutations,
  getters
};
