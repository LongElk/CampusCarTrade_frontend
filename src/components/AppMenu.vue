<template>
  <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" router background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="/home">
      <el-icon>
        <House />
      </el-icon>
      <span>首页</span>
    </el-menu-item>

    <el-menu-item index="/list">
      <el-icon>
        <List />
      </el-icon>
      <span>车辆列表</span>
    </el-menu-item>

    <el-menu-item index="/post">
      <el-icon>
        <Edit />
      </el-icon>
      <span>发布车辆</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// 引入图标（可按需更换）
import { House, List, Edit } from '@element-plus/icons-vue'

const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 200px;
  min-height: 100vh;
}
</style>
