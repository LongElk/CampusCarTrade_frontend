<template>
  <div>
    <el-page-header content="车辆详情" @back="$router.back()" />
    <el-card v-if="car" class="car-detail-card">
      <el-row :gutter="20">
        <el-col :xs="24" :md="12">
          <el-carousel height="300px" v-if="car.images && car.images.length">
            <el-carousel-item v-for="img in car.images" :key="img.id">
              <img :src="img.url" style="width:100%;height:300px;object-fit:cover;" />
            </el-carousel-item>
          </el-carousel>
          <el-empty v-else description="暂无图片" />
        </el-col>
        <el-col :xs="24" :md="12">
          <h2>{{ car.title }}</h2>
          <div>类型：{{ car.type }}</div>
          <div>价格：{{ car.price }} 元</div>
          <div>状态：{{ car.status }}</div>
          <div>里程：{{ car.mileage }} km</div>
          <div>地点：{{ car.location }}</div>
          <div>发布时间：{{ car.publishTime }}</div>
          <div>卖家：{{ car.seller.name }} ({{ car.seller.phone }})</div>
          <div>浏览量：{{ car.analytics.viewCount }}，收藏：{{ car.analytics.favoriteCount }}</div>
          <div class="desc">描述：{{ car.description }}</div>
          <el-button type="primary" @click="onBuy" :loading="buying" :disabled="car.status !== '在售'">购买</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-skeleton v-else :rows="6" animated />
    <el-alert v-if="error" type="error" :title="error" show-icon class="mt" />
    <el-dialog v-model="orderDialog" title="下单成功" width="300">
      <span>订单已创建，请联系卖家完成交易。</span>
      <template #footer>
        <el-button type="primary" @click="orderDialog = false">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCarDetail } from '@/api/car'
import { createOrder } from '@/api/order' // 你需要实现此API
import type { CarDetail } from '@/api/car'

const route = useRoute()
const car = ref<CarDetail | null>(null)
const error = ref('')
const buying = ref(false)
const orderDialog = ref(false)

const fetchDetail = async () => {
  error.value = ''
  try {
    const res = await getCarDetail(Number(route.params.id))
    car.value = res.data
  } catch (e) {
    error.value = (e instanceof Error ? e.message : '加载失败')
  }
}

const onBuy = async () => {
  if (!car.value) return
  buying.value = true
  try {
    await createOrder({ vehicleId: car.value.id, price: car.value.price })
    orderDialog.value = true
  } catch (e) {
    error.value = (e instanceof Error ? e.message : '下单失败')
  } finally {
    buying.value = false
  }
}

onMounted(fetchDetail)
</script>

<style scoped>
.car-detail-card {
  margin-top: 20px;
}

.desc {
  margin: 12px 0;
}

.mt {
  margin-top: 20px;
}
</style>
