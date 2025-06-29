<template>
  <div class="auth-container">
    <el-card class="auth-card">
      <h2 class="auth-title">校园二手车交易平台</h2>
      <div class="tab-switch">
        <el-button :type="tab === 'login' ? 'primary' : 'default'" @click="tab = 'login'">登录</el-button>
        <el-button :type="tab === 'register' ? 'primary' : 'default'" @click="tab = 'register'">注册</el-button>
      </div>
      <login-form v-if="tab === 'login'" @success="onAuthSuccess" />
      <register-form v-else @success="onAuthSuccess" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

const tab = ref<'login' | 'register'>('login')
const router = useRouter()

function onAuthSuccess() {
  router.push('/')
}
</script>

<script lang="ts">
export default {
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background-soft);
}

.auth-card {
  width: 370px;
  padding: 2.5em 2em 1.5em 2em;
  border-radius: 14px;
  box-shadow: 0 6px 32px rgba(44, 62, 80, 0.12);
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
}

.auth-title {
  text-align: center;
  font-size: 1.6em;
  font-weight: bold;
  color: var(--vt-c-primary);
  margin-bottom: 1.5em;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
}

.tab-switch {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2em;
  gap: 1em;
}

.tab-switch .el-button {
  flex: 1;
  font-size: 1.1em;
  font-weight: 500;
  letter-spacing: 1px;
}

/* ...表单内容的样式由全局main.css控制... */
</style>
