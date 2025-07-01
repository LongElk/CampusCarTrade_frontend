<template>
  <div>
    <el-row :gutter="20">
      <el-col v-for="car in carList" :key="car.id" :xs="24" :sm="12" :md="8" :lg="6">
        <el-card class="car-card" shadow="hover" @click="goDetail(car.id)" style="cursor:pointer;">
          <img :src="car.imageUrl" alt="车辆图片" class="car-img" />
          <div class="car-info">
            <div class="car-title">{{ car.title }}</div>
            <div>价格：{{ car.price }} 元</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-empty v-if="!loading && carList.length === 0 && !error" description="暂无车辆" />
    <el-alert v-if="error" type="error" :title="error" show-icon class="mt" />
    <el-skeleton v-if="loading" :rows="4" animated />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { CarListItem } from '../../api/car'
import { useRouter } from 'vue-router'

defineProps<{
  carList: CarListItem[]
  loading: boolean
  error: string
}>()

const router = useRouter()
const goDetail = (id: number) => {
  router.push({ name: 'CarDetail', params: { id } })
}
</script>

<style scoped>
.car-card {
  margin-bottom: 20px;
}

.car-card {
  cursor: pointer;
}

.car-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  margin-bottom: 12px;
}

.car-info {
  font-size: 14px;
}

.car-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 6px;
}

.mt {
  margin-top: 20px;
}
</style>
