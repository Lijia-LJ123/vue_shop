import Vue from "vue";
import { Button, Message, Form, FormItem, input } from "element-ui";
// 导入弹框提示组件
// import { } from "element-ui";

// 注册为全局组件
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(input);
// 挂载到Vue的原型上，这样可以在任意组件中通过this访问
Vue.prototype.$message = Message;
