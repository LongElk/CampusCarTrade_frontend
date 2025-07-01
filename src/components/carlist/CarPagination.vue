<template>
  <div class="pagination-wrapper">
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="total"
      :page-size="size"
      :current-page="page"
      @current-change="onPageChange"
      class="mt"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  total: number
  page: number
  size: number
}>()
const emit = defineEmits(['page-change'])

const onPageChange = (newPage: number) => {
  emit('page-change', newPage)
}
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
  padding: 16px 0;
}

.mt {
  margin-top: 0;
}

.el-pagination {
  --el-pagination-bg-color: #f8f9fa;
  --el-pagination-border-radius: 8px;
  --el-pagination-hover-color: #42b983;
  --el-pagination-active-bg-color: #e6f9f0;
  --el-pagination-active-color: #42b983;
  font-size: 1.08rem;
}
</style>
