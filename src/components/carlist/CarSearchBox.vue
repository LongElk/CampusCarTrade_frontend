<template>
  <el-input v-model="inputValue" placeholder="请输入关键词搜索" clearable class="mb" style="width: 300px"
    @keyup.enter="onSearch">
    <template #append>
      <el-button type="primary" @click="onSearch">搜索</el-button>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from 'vue'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue', 'search'])

const inputValue = ref(props.modelValue)
watch(() => props.modelValue, val => inputValue.value = val)
watch(inputValue, val => emit('update:modelValue', val))

const onSearch = () => {
  emit('search')
}
</script>

<style scoped>
.mb {
  margin-bottom: 16px;
}
</style>
