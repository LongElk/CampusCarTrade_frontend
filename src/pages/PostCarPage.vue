<template>
  <div>
    <el-page-header content="发布二手车" />
    <el-card class="mt">
      <el-form :model="form" label-width="80px">
        <el-form-item label="品牌">
          <el-input v-model="form.brand" />
        </el-form-item>

        <el-form-item label="型号">
          <el-input v-model="form.model" />
        </el-form-item>

        <el-form-item label="年份">
          <el-input-number v-model="form.year" :min="1990" :max="2025" />
        </el-form-item>

        <el-form-item label="价格">
          <el-input-number v-model="form.price" :min="0" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

interface CarForm {
  brand: string
  model: string
  year: number
  price: number
}

const form = ref<CarForm>({
  brand: '',
  model: '',
  year: 2020,
  price: 0,
})

const submit = () => {
  console.log('发布成功：', form.value)
  ElMessage.success('车辆信息已发布')
}
</script>

<style scoped>
.mt {
  margin-top: 20px;
}
</style>
