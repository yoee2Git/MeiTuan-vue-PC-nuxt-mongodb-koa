<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo"></a>
    </div>
    <div class="login-panel"></div>
    <el-row :gutter="20">
      <el-col :span="3"></el-col>
      <el-col :span="5">
        <div class="banner">
          <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
        </div>
      </el-col>
      <el-col :span="6">.</el-col>
      <el-col :span="6">
        <el-form class="form">
          <h4 class="tips" v-if="error">
            <i>{{ error }}</i>
          </h4>
          <p>
            <span>账号登录</span>
          </p>
          <el-form-item>
          <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
          <div class="foot">
            <el-checkbox v-model="checked" label>7天内免登录</el-checkbox>
            <b>忘记密码?</b>
            <el-button type="success" @click="login" size="mini" class="btn-login">登录</el-button>
          </div>
        </el-form>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  layout: "Blank",
  data() {
    return {
      username: "",
      password: "",
      error: "",
      checked: ""
    };
  },
  methods: {
    login() {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/index.scss";
</style>