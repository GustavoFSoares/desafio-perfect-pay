import Vue from "vue";
import Vuex from "vuex";

import MoneyStore from "./Money";

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    MoneyStore
  }
});

Vue.prototype.$store = Store;

export default Store;
