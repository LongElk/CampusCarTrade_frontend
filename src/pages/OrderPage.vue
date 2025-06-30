<template>
  <div>
    <el-page-header content="订单管理" />
    <el-card>
      <el-radio-group v-model="orderType" style="margin-bottom: 20px;">
        <el-radio-button label="sell">卖出订单</el-radio-button>
        <el-radio-button label="buy">买进订单</el-radio-button>
      </el-radio-group>
      <OrderList :type="orderType" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import OrderList from '@/components/OrderList.vue'

const orderType = ref<'sell' | 'buy'>('sell')
</script>
