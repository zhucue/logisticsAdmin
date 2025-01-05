import { createRouter, createWebHashHistory } from "vue-router"
const PublicRoutes: Array<any> = [
  {
    path: "/",
    redirect: "/login" // 添加根路径重定向
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/login/index.vue"), // 确保这里的 Login 组件已被正确导入
    meta: {
      title: "登录"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: PublicRoutes
})

export default router
