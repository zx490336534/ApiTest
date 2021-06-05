<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">用户登录</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" @focus="clearValidate('username')">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')"
                    @focus="clearValidate('password')">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="记住我" class="remember_me" size="mini">
          <el-switch v-model="ruleForm.remember_me"></el-switch>
          <el-link type="info" :underline="false" class="register_link" href="/register">没有账号？点击注册</el-link>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p class="login-tips" v-show="err_info">{{ err_msg }}</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/api'

export default {
  data: function () {
    return {
      ruleForm: {
        username: '',
        password: '',
        remember_me: false,
      },
      err_info: false, // 是否显示错误提示
      err_msg: '', // 具体错误提示
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm)
              .then((response) => {
                // 使用浏览器本地存储保存token
                if (this.remember_me) {
                  // 选择"记住我"
                  sessionStorage.clear();
                  localStorage.token = response.data.token;
                  localStorage.user_id = response.data.user_id;
                  localStorage.username = response.data.username;
                } else {
                  // 不选择"记住我"
                  localStorage.clear();
                  sessionStorage.token = response.data.token;
                  sessionStorage.user_id = response.data.user_id;
                  sessionStorage.username = response.data.username;
                }
                this.$router.push({
                  name: 'index'
                })
              })
              .catch(error => {
                this.err_info = true;
                if ("non_field_errors" in error) {
                  this.err_msg = '用户名或密码错误';
                }
                if (error.response) {
                  this.err_msg = '服务器异常';
                } else if (error.request) {
                  this.err_msg = "网络异常";
                }
                this.$message.error(this.err_msg);
              });
        } else {
          this.err_msg = '参数有误';
          this.err_info = true;
          this.$message.error(this.err_msg);
          return false;
        }
      });
    },
    clearValidate(prop_value) {
      this.$refs['ruleForm'].clearValidate(prop_value);
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/bg1.jpg);
  background-size: 100%;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  /* color: rgb(43, 155, 33); */
  color: #E4E7ED;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #F56C6C;
}

.register_link {
  padding-left: 70px;
  /* color: #E4E7ED; */
}

.remember_me >>> .el-form-item__label {
  /* color: #409EFF; */
  color: #E4E7ED;
}
</style>
