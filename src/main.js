import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
// 所有资源都需要导入到入口文件中
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";

// 导入axios
import axios from "axios";
// 配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";
// 给Vue添加一个原型属性$http之后，就可以在任意的Vue界面中通过this访问$http
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
