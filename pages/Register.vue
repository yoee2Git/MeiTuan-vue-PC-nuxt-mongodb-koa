<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em class="tip">已有账号?</em>
          <nuxt-link to="/login">
            <el-button type="primary" size="small">登录</el-button>
          </nuxt-link>
        </span>
      </header>
    </article>
    <section>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input @click="resetForm('ruleForm')">重置</el-input>
          <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
          <span class="status">{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" maxlength="4"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="ruleForm.cpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="prinary" @click="register">同意以下协议并注册</el-button>
          <div class="error">{{ errorMsg }}</div>
        </el-form-item>
        <el-form-item>
          <a href="https://rules-center.meituan.com/rules-detail/4" target="_blank">《美团点评用户服务协议》</a>
          <a href="https://rules-center.meituan.com/rules-detail/2" target="_blank">《美团点评隐私政策》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  layout: "Blank",
  data() {
    return {
      statusMsg: "",
      errorMsg: "",
      ruleForm: {
        name: "",
        email: "",
        code: "",
        pwd: "",
        cpwd: ""
      },
      rules: {
        name: [
          {
            required: true,
            type: "string",
            message: "请输入昵称",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        pwd: [
          {
            required: true,
            message: "创建密码",
            trigger: "blur"
          }
        ],
        cpwd: [
          {
            required: true,
            message: "确认密码",
            trigger: "blur"
          },
          {
            validate(rule, value, callback) {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error("密码不一致"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    sendMsg() {},
    register() {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/register/index.scss";
@import "@/assets/css/login/index.scss";
</style>