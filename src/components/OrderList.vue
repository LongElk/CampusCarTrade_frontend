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
    <el-table-column label="操作" width="100">
      <template #default="{ row }">
        <el-popconfirm
          title="确定要删除该订单吗？"
          @confirm="onDelete(row.id)"
        >
          <template #reference>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { getBuyerOrderList, getSellerOrderList, deleteOrder } from '../api/order'
import type { Order } from '../api/order'
import { ElMessage } from 'element-plus'

const props = defineProps<{
  type: 'sell' | 'buy'
}>()

const orders = ref<Order[]>([])

const fetchOrders = async () => {
  let res
  if (props.type === 'sell') {
    res = await getSellerOrderList()
  } else {
    res = await getBuyerOrderList()
  }
  orders.value = res.data.items
}

const onDelete = async (orderId: number) => {
  try {
    await deleteOrder(orderId)
    ElMessage.success('订单已删除')
    fetchOrders()
  } catch (e: unknown) {
    let msg = '删除失败'
    if (e instanceof Error) {
      msg = e.message
    }
    ElMessage.error(msg)
  }
}

watch(() => props.type, fetchOrders, { immediate: true })
onMounted(fetchOrders)
</script>

