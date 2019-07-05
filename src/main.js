import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import BootstrapVue from "bootstrap-vue";

// import "src/styles/global.scss";
// import "./styles/global.scss";
import "./styles/test.scss";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
