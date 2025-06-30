<template>
  <div>
    <CarSearchBox v-model="keyword" @search="onSearch" />
    <CarList :carList="carList" :loading="loading" :error="error" />
    <CarPagination :total="total" :page="page" :size="size" @page-change="onPageChange" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { getCarList } from '../../api/car'
import type { CarListItem } from '../../api/car'
import CarSearchBox from './CarSearchBox.vue'
import CarList from './CarList.vue'
import CarPagination from './CarPagination.vue'

const keyword = ref('')
const carList = ref<CarListItem[]>([])
const loading = ref(false)
const error = ref('')
const total = ref(0)
const page = ref(1)
const size = ref(10)

const fetchCarList = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await getCarList({
      page: page.value,
      size: size.value,
      keyword: keyword.value,
    })
    carList.value = res.data.items
    total.value = res.data.total
  } catch (e: unknown) {
    if (e && typeof e === 'object' && 'message' in e) {
      error.value = (e as { message: string }).message
    } else {
      error.value = '加载失败'
    }
  } finally {
    loading.value = false
  }
}

const onSearch = () => {
  page.value = 1
  fetchCarList()
}

const onPageChange = (newPage: number) => {
  page.value = newPage
  fetchCarList()
}

watch([page, size], fetchCarList, { immediate: true })
</script>
