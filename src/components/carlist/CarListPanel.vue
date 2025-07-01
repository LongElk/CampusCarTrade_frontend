<template>
  <div>
    <CarSearchBox v-model="keyword" @search="onSearch" />
    <CarFilterBar v-model:type="type" v-model:minPrice="minPrice" v-model:maxPrice="maxPrice" @filter="onFilter"
      @reset="onReset" />
    <CarList :carList="carList" :loading="loading" :error="error" />
    <CarPagination :total="total" :page="page" :size="size" @page-change="onPageChange" />
  </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'
import { getCarList } from '../../api/car'
import type { CarListItem } from '../../api/car'

import CarFilterBar from './CarFilterBar.vue'
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
const type = ref('')
const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)


const fetchCarList = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await getCarList({
      page: page.value,
      size: size.value,
      keyword: keyword.value,
      type: type.value,
      minPrice: minPrice.value ?? undefined,
      maxPrice: maxPrice.value ?? undefined,
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

const onFilter = () => {
  page.value = 1
  fetchCarList()
}

const onReset = () => {
  type.value = ''
  minPrice.value = null
  maxPrice.value = null
  page.value = 1
  fetchCarList()
}

const onPageChange = (newPage: number) => {
  page.value = newPage
  fetchCarList()
}

watch([page, size, type, minPrice, maxPrice], fetchCarList, { immediate: true })
</script>
