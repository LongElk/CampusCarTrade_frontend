<template>
  <div>
    <el-page-header content="二手车列表" />
    <el-card class="mt">
      <el-table :data="carList" style="width: 100%">
        <el-table-column prop="brand" label="品牌" />
        <el-table-column prop="model" label="型号" />
        <el-table-column prop="year" label="年份" />
        <el-table-column prop="price" label="价格（元）" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Car {
  brand: string
  model: string
  year: number
  price: number
}

const carList = ref<Car[]>([
  { brand: 'Toyota', model: 'Corolla', year: 2018, price: 35000 },
  { brand: 'Honda', model: 'Civic', year: 2020, price: 42000 },
  { brand: 'Volkswagen', model: 'Polo', year: 2017, price: 28000 },
])
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>
