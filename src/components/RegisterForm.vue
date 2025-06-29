<template>
  <el-form :model="form" @submit.prevent="onRegister">
    <el-form-item>
      <el-input v-model="form.email" placeholder="邮箱" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.name" placeholder="姓名" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.phone" placeholder="手机号" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.school" placeholder="学校" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.password" type="password" placeholder="密码" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.confirmPassword" type="password" placeholder="确认密码" />
    </el-form-item>
    <el-form-item>
      <el-button class="button" type="primary" @click="onRegister" style="width:100%">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { register } from '../api/auth'

const emit = defineEmits(['success'])
const form = ref({
  email: '',
  name: '',
  phone: '',
  school: '',
  password: '',
  confirmPassword: ''
})

async function onRegister() {
  if (!form.value.email || !form.value.password || !form.value.name || !form.value.phone || !form.value.school) {
    alert('请填写所有信息')
    return
  }
  if (form.value.password !== form.value.confirmPassword) {
    alert('两次输入的密码不一致')
    return
  }
  try {
    const params = {
      email: form.value.email,
      password: form.value.password,
      name: form.value.name,
      phone: form.value.phone,
      school: form.value.school
    }
    const res = await register(params)
    if (res && res.code === 200) {
      emit('success')
      console.log('注册成功')
    } else {
      alert('注册失败')
    }
  } catch (e) {
    console.error('注册请求失败', e)
    alert('注册请求失败')
  }
}
</script>
