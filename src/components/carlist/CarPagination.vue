<template>
  <el-pagination background layout="prev, pager, next" :total="total" :page-size="size" :current-page="page"
    @current-change="onPageChange" class="mt" />
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
.mt {
  margin-top: 20px;
}
</style>
