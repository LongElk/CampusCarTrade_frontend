<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>登录校园二手车交易平台</h2>
      <el-form :model="form" @submit.prevent="onLogin">
        <el-form-item>
          <el-input v-model="form.username" placeholder="用户名" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" placeholder="密码" />
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="onLogin" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../api/auth'

const router = useRouter()
const form = ref({ username: '', password: '' })

async function onLogin() {
  if (form.value.username && form.value.password) {
    try {
      const res = await login(form.value.username, form.value.password)
      // 假设后端返回 { token: 'xxx' }
      if (res && res.token) {
        localStorage.setItem('token', res.token)
        router.push('/')
      } else {
        alert('登录失败，请检查用户名和密码')
      }
    } catch {
      alert('登录请求失败')
    }
  } else {
    alert('请输入用户名和密码')
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background-soft);
}

.login-card {
  width: 350px;
  padding: 2em 2em 1em 2em;
}
</style>
