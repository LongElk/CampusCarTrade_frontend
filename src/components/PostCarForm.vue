<template>
  <el-form :model="form" label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="form.title" />
    </el-form-item>

    <el-form-item label="类型">
      <el-input v-model="form.type" />
    </el-form-item>

    <el-form-item label="描述">
      <el-input type="textarea" v-model="form.description" />
    </el-form-item>

    <el-form-item label="价格">
      <el-input-number v-model="form.price" :min="0" />
    </el-form-item>

    <el-form-item label="里程">
      <el-input-number v-model="form.mileage" :min="0" />
    </el-form-item>

    <el-form-item label="地点">
      <el-input v-model="form.location" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { publishCar } from '../api/car'
import type { PublishCarParams } from '../api/car'

const form = ref<PublishCarParams>({
  title: '',
  type: '',
  description: '',
  price: 0,
  mileage: 0,
  location: '',
})

const submit = async () => {
  try {
    await publishCar(form.value)
    ElMessage.success('车辆信息已发布')
    // 可选：重置表单
    // Object.assign(form.value, { title: '', type: '', description: '', price: 0, mileage: 0, location: '' })
  } catch {
    ElMessage.error('发布失败')
  }
}
</script>
