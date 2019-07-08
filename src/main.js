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

// or import all icons if you don't care about bundle size
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

// globally (in your main .js file)
Vue.component("v-icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
