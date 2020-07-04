<template>
  <el-container>
    <el-header>
      <el-button @click="loginOut">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    loginOut() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="less"></style>
