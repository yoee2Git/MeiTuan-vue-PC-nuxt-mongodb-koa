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
          <h4 class="tips" v-if="errorMsg">
            <i>{{ errorMsg }}</i>
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
import CryptoJS from 'crypto-js';
export default {
  name: "",
  layout: "Blank",
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "",
      checked: ""
    };
  },
  methods: {
    login() {
      console.log(111)
      this.$axios.post('/users/signin',{
        username: encodeURIComponent(this.username),
        password: CryptoJS.MD5(this.password).toString()
      }).then(({status,data}) => {
        if(status === 200){
          if(data && data.code === 0){
            location.href = '/'
          }else{
          this.errorMsg = data.msg;
          }
        }else{
          this.errorMsg = `服务器出错,错误码为: ${status}`
        }
        setTimeout(() => {
          this.errorMsg = '';
        },1500)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/index.scss";
</style>