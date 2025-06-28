<template>
  <div class="layout">
    <AppMenu />
    <router-view class="main-content" />
  </div>
</template>

<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
</script>

<style scoped>
.layout {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
