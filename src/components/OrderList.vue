<template>
  <el-table :data="orders" style="width: 100%">
    <el-table-column prop="id" label="订单号" width="120" />
    <el-table-column label="车辆">
      <template #default="{ row }">
        <div style="display: flex; align-items: center;">
          <img :src="row.vehicle.imageUrl" alt=""
            style="width: 48px; height: 32px; object-fit: cover; margin-right: 8px;" />
          <span>{{ row.vehicle.title }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="price" label="价格" />
    <el-table-column prop="status" label="状态" />
    <el-table-column prop="createdTime" label="下单时间" />
    <el-table-column prop="buyerName" label="买家" v-if="type === 'sell'" />
    <el-table-column prop="sellerName" label="卖家" v-if="type === 'buy'" />
  </el-table>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { getOrderList } from '../api/order'
import type { Order } from '../api/order'

const props = defineProps<{
  type: 'sell' | 'buy'
}>()

const orders = ref<Order[]>([])

const fetchOrders = async () => {
  const role = props.type === 'sell' ? 'seller' : 'buyer'
  const res = await getOrderList({ role })
  orders.value = res.data.items
}

watch(() => props.type, fetchOrders, { immediate: true })
onMounted(fetchOrders)
</script>
