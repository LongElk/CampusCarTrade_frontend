<template>
  <div class="search mb">
    <form @submit.prevent="onSearch">
      <input v-model="inputValue" type="text" placeholder="请输入关键词搜索" class="search-input" />
      <button type="submit" class="search-btn"></button>
    </form>
  </div>
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

/* 样式结束 */
<style scoped>
* {
  box-sizing: border-box;
}

.mb {
  margin-bottom: 16px;
}

.search {
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
}

form {
  position: relative;
  width: 300px;
  margin: 0;
}

input,
button {
  border: none;
  outline: none;
}

.search-input {
  width: 100%;
  height: 42px;
  padding-left: 13px;
  border: 2px solid #c5464a;
  border-radius: 19px;
  background: transparent;
  font-size: 15px;
  color: #333;
}

.search-btn {
  height: 42px;
  width: 60px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  background: #c5464a;
  border-radius: 0 19px 19px 0;
  transition: background 0.2s;
}

.search-btn:hover {
  background-color: #c7585c;
}

.search-btn:before {
  content: "搜索";
  font-size: 13px;
  color: #F9F0DA;
}
</style>
