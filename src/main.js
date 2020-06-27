import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/bootstrap-vue";
import VueSimpleAlert from "vue-simple-alert";

Vue.use(require("vue-moment"));
Vue.use(VueSimpleAlert);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
