<template>
  <el-form :model="form" @submit.prevent="onLogin">
    <el-form-item>
      <el-input v-model="form.email" placeholder="邮箱" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.password" type="password" placeholder="密码" />
    </el-form-item>
    <el-form-item>
      <el-button class="button" type="primary" @click="onLogin" style="width:100%">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { login } from '../api/auth'

const emit = defineEmits(['success'])
const form = ref({ email: '', password: '' })

async function onLogin() {
  if (form.value.email && form.value.password) {
    try {
      const res = await login(form.value.email, form.value.password)
      if (res && res.data && res.data.token) {
        localStorage.setItem('token', res.data.token)
        emit('success')
      } else {
        alert('登录失败，请检查邮箱和密码')
      }
    } catch {
      alert('登录请求失败')
    }
  } else {
    alert('请输入邮箱和密码')
  }
}
</script>
