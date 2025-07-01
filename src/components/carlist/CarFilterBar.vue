<template>
  <div class="filter-bar">
    <el-select v-model="type" placeholder="全部类型" style="width: 120px; margin-right: 12px;">
      <el-option label="全部" value="" />
      <el-option label="自行车" value="BICYCLE" />
      <el-option label="电动车" value="ELECTRIC" />
    </el-select>
    <el-input-number v-model="minPrice" :min="0" :max="maxPrice || undefined" placeholder="最低价"
      style="width: 110px; margin-right: 8px;" />
    <span style="margin: 0 4px;">-</span>
    <el-input-number v-model="maxPrice" :min="minPrice || 0" placeholder="最高价"
      style="width: 110px; margin-right: 16px;" />
    <el-button type="primary" @click="onFilter" style="margin-left: 8px;">筛选</el-button>
    <el-button @click="onReset" style="margin-left: 4px;">重置</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from 'vue'

const props = defineProps<{
  type: string
  minPrice: number | null
  maxPrice: number | null
}>()
const emit = defineEmits(['update:type', 'update:minPrice', 'update:maxPrice', 'filter', 'reset'])

const type = ref(props.type)
const minPrice = ref<number | null>(props.minPrice)
const maxPrice = ref<number | null>(props.maxPrice)

watch(() => props.type, v => type.value = v)
watch(() => props.minPrice, v => minPrice.value = v)
watch(() => props.maxPrice, v => maxPrice.value = v)

watch(type, v => emit('update:type', v))
watch(minPrice, v => emit('update:minPrice', v))
watch(maxPrice, v => emit('update:maxPrice', v))

const onFilter = () => {
  emit('filter')
}
const onReset = () => {
  type.value = ''
  minPrice.value = null
  maxPrice.value = null
  emit('reset')
}
</script>

<style scoped>
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 8px 0;
  background: var(--el-bg-color, #fff);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-bottom: 12px;
  gap: 8px;
}

@media (max-width: 600px) {
  .filter-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
}
</style>
