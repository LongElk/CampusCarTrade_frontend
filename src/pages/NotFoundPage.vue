<template>
  <div class="not-found">
    <h1>404</h1>
    <p>页面未找到</p>
    <router-link to="/home">返回首页</router-link>
  </div>
</template>

<script setup lang="ts">
// ...无需脚本逻辑...
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}

.not-found h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
</style>
