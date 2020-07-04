import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 路由重定向
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/home", component: Home }
  ]
});
// 路由导航守卫控制访问权限
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，next()表示放行  next('/login)强制放行
  if (to.path === "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});
export default router;
