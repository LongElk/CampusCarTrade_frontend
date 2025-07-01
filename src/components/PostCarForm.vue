<template>
  <el-form :model="form" label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="form.title" />
    </el-form-item>

    <el-form-item label="类型">
      <el-select v-model="form.type" placeholder="请选择类型">
        <el-option label="自行车" value="BICYCLE" />
        <el-option label="电动车" value="ELECTRIC" />
      </el-select>
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

    <el-form-item label="车辆图片">
      <el-upload class="upload-demo" action="" :file-list="fileList" :auto-upload="false" :on-change="handleFileChange"
        :on-remove="handleFileRemove" multiple list-type="picture-card">
        <el-icon>
          <Plus />
        </el-icon>
        <template #file="{ file }">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        </template>
      </el-upload>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { publishCar, uploadCarImage } from '../api/car'
import type { PublishCarParams } from '../api/car'
import { Plus } from '@element-plus/icons-vue'

const form = ref<PublishCarParams>({
  title: '',
  type: 'BICYCLE',
  description: '',
  price: 0,
  mileage: 0,
  location: '',
  imageUrls: [],
})

import type { UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([])
const files = ref<File[]>([])

const handleFileChange = (file: UploadUserFile, fileList_: UploadUserFile[]) => {
  fileList.value = fileList_
  files.value = fileList_.map(f => f.raw as File).filter(Boolean)
}
const handleFileRemove = (file: UploadUserFile, fileList_: UploadUserFile[]) => {
  fileList.value = fileList_
  files.value = fileList_.map(f => f.raw as File).filter(Boolean)
}

const submit = async () => {
  try {
    // 先上传所有图片，获取图片url
    const imageUrls: string[] = []
    for (let i = 0; i < files.value.length; i++) {
      const res = await uploadCarImage(files.value[i], i)
      if (res.code === 0 && res.data.url) {
        imageUrls.push(res.data.url)
      }
    }

    // 发布车辆信息，带上图片url
    const payload = {
      ...form.value,
      imageUrls,
    }
    await publishCar(payload)

    ElMessage.success('车辆信息已发布')
    // 可选：重置表单和图片
    // Object.assign(form.value, { title: '', type: '', description: '', price: 0, mileage: 0, location: '', imageUrls: [] })
    // fileList.value = []
    // files.value = []
  } catch {
    ElMessage.error('发布失败')
  }
}
</script>
