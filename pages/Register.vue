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
          <el-input v-model="ruleForm.email"></el-input>
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
import CryptoJS from "crypto-js";
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
            validator:(rule, value, callback) => {
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
    //username  password  邮箱验证
    sendMsg() {
      let _this = this;
      let nameErrMsg;
      let emailErrMsg;
      if (this.timerid) {
        return false;
      }
      this.$refs["ruleForm"].validateField("name", errMsg => {
        nameErrMsg = errMsg;
      });
      if (nameErrMsg) {
        return false;
      }

      this.$refs["ruleForm"].validateField("email", errMsg => {
        emailErrMsg = errMsg;
      });

      if (!nameErrMsg && !emailErrMsg) {
        this.$axios
          .post("/users/verify", {
            username: encodeURIComponent(this.ruleForm.name),
            email: this.ruleForm.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60;
              this.statusMsg = `验证已发送,剩余${count--}秒`;
              this.timerid = setInterval(() => {
                _this.statusMsg = `验证已发送,剩余${count--}秒`;
                if (count === 0) {
                  clearInterval(_this.timerid);
                  _this.timerid = null;
                  _this.statusMsg = "";
                }
              }, 1000);
            }
          });
      }
    },
    //注册功能
    register() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$axios
            .post("/users/signup", {
              username: encodeURIComponent(this.ruleForm.name),
              password: CryptoJS.MD5(this.ruleForm.pwd).toString(),
              email: this.ruleForm.email,
              code: this.ruleForm.code
            })
            .then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  location.href = "/login";
                } else {
                  this.errorMsg = data.msg;
                }
              } else {
                this.errorMsg = `服务器出错,错误码为: ${status}`;
              }
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/register/index.scss";
@import "@/assets/css/login/index.scss";
</style>