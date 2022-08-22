<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">账号登陆</div>
      <div class="form-wrapper">
        <input type="text" name="username" placeholder="账号" class="input-item" v-model="username">
        <input type="password" name="password" placeholder="密码" class="input-item" v-model="password">
        <div class="btn" @click="login">登录</div>
      </div>
      <div class="msg">
        Don't have account?
        <a href="#">Sign up</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ElMessage} from "element-plus"
import {ref, computed} from "vue"
import {useRouter} from "vue-router"
import md5 from "md5"
import apiService from "@/apiService"

const username = ref<string>('')
const password = ref<string>('')

const canLogin = computed(() => {
  return username.value && password.value
})

const router = useRouter()

// 登录方法
async function login() {
  if (canLogin.value) {
    const param = {
      username: username.value,
      password: md5(password.value)
    }
    const res = await apiService.login(param)
    // 登录结果处理
    if (res.data.status === 'success') {
      ElMessage({
        message: '登录成功，正在跳转...',
        type: res.data.status
      })
      localStorage.setItem('token', res.data.data)
      setTimeout(() => {
        router.push('/')
      }, 500)
    }else {
      ElMessage({
        message: res.data.msg,
        type: res.data.status
      })
    }

  } else {
    ElMessage({
      message: '请输入账号/密码',
      type: 'error',
    })
  }

}
</script>
<style lang="scss">
.container {
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}

.input-item::placeholder {
  text-transform: uppercase;
}

.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}

.msg {
  text-align: center;
  line-height: 88px;
}

a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>
