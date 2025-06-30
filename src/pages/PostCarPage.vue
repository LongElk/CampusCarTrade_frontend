<template>
  <div>
    <el-page-header content="发布二手车" />
    <el-card class="mt">
      <PostCarForm />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import PostCarForm from '@/components/PostCarForm.vue'
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>
