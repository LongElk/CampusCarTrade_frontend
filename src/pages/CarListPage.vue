<template>
  <div>
    <el-page-header content="二手车列表" />
    <CarListPanel />
  </div>
</template>

<script setup lang="ts">
import CarListPanel from '@/components/carlist/CarListPanel.vue'
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>
