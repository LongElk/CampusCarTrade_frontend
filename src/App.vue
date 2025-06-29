<template>
  <div class="layout">
    <AppMenu v-if="!isAuthPage" />
    <div class="main-content-wrapper">
      <router-view class="main-content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isAuthPage = computed(() => route.path === '/login')
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: transparent;
}

.main-content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.main-content {
  flex: 1;
  padding: 32px 16px 16px 16px;
  min-height: 0;
}
</style>
