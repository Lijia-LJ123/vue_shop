<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="box-img">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录的表单区域 -->
      <el-form
        class="login-form"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-gerenzhongxin"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-suo"
            v-model="loginForm.password"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item prop="username" class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { log } from "util";
export default {
  data() {
    return {
      // 请求参数
      loginForm: {
        username: "admin",
        password: "123456"
      },
      // 登录的验证规则
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 15, message: "长度在 5 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 表单重置
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 登录
    login() {
      // 对表单进行预校验
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm);
        console.log(res);
        if (res.meta.status !== 200) return this.$message.error("登录失败");
        this.$message.success("登录成功");
        // console.log("登录");
        // 登录成功之后需要保存token到sessionStorage，这样才能根据token让用户只有在登录之后才能访问
        // 而且其他的API接口，只有在登录之后才能访问
        window.sessionStorage.setItem("token", res.data.token);

        // 通过编程时路由导航，跳转到home页面
        this.$router.push("/home");
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login-container {
  background-color: #2b4b6b;
  // background-color: #e5e5e5;
  height: 100%;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.box-img {
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  border: 1px solid #ccc;
  padding: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px #ddd;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
