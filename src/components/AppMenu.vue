<template>
  <el-menu :default-active="activeMenu" class="el-menu-horizontal-demo" mode="horizontal" router background-color="#fff"
    text-color="#333" active-text-color="#42b983">
    <el-menu-item index="/">
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

    <el-menu-item index="/orders">
      <el-icon>
        <List />
      </el-icon>
      <span>订单</span>
    </el-menu-item>
    <el-menu-item class="menu-avatar-item" @click="onLogout">
      <el-avatar class="menu-avatar" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" style="cursor:pointer;" />
      <span class="logout-text">退出登录</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { House, List, Edit } from '@element-plus/icons-vue'
import { ElAvatar } from 'element-plus'

const route = useRoute()
const router = useRouter()
const activeMenu = computed(() => route.path)

const onLogout = () => {
  localStorage.removeItem('token')
  router.replace('/login')
}
</script>

<style scoped>
.el-menu-horizontal-demo {
  width: 100%;
  min-width: 0;
  border-radius: 0;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.08);
  margin-bottom: 24px;
  padding: 0 0;
  background: #fff;
  border: none;
  height: 60px;
  display: flex;
}

.el-menu--horizontal>.el-menu-item:nth-child(3) {
  margin-right: auto;
}

.menu-avatar-item {
  padding: 0 12px !important;
  cursor: pointer;
  background: transparent !important;
  display: flex;
  align-items: center;
}

.menu-avatar {
  cursor: pointer;
  border: 2px solid #e0e0e0;
  transition: border 0.2s;
  margin-right: 8px;
}

.menu-avatar:hover {
  border-color: #42b983;
}

.logout-text {
  font-size: 1rem;
  color: #888;
  margin-left: 2px;
  transition: color 0.2s;
}

.menu-avatar-item:hover .logout-text {
  color: #42b983;
}

.el-menu-horizontal-demo .el-menu-item {
  font-size: 1.08rem;
  font-weight: 500;
  padding: 0 28px;
  height: 60px;
  line-height: 60px;
  border-radius: 0;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  /* 让第一个和最后一个菜单项顶到两边 */
}

.el-menu-horizontal-demo .el-menu-item:first-child {
  margin-left: 0;
}

.el-menu-horizontal-demo .el-menu-item:last-child {
  margin-right: 0;
}

.el-menu-horizontal-demo .el-menu-item.is-active,
.el-menu-horizontal-demo .el-menu-item:hover {
  background: #f0f9f5 !important;
  color: #42b983 !important;
}

.el-menu-horizontal-demo .el-icon {
  margin-right: 8px;
  font-size: 1.2em;
  display: flex;
  align-items: center;
}
</style>
