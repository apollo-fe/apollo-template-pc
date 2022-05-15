<!--
 * @Author: Marshall
 * @Date: 2022-05-13 16:56:25
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 10:32:09
 * @Description: 
 * @FilePath: /apollo-admin-plus/src/components/Hamburger/index.vue
-->
<template>
  <div
    class="hamburger-container"
    @click="toggleClick"
  >
    <el-icon>
      <component :is="icon" />
    </el-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/store'
import { Expand, Fold } from '@element-plus/icons-vue'

const appStore = useAppStore()
const toggleClick = () => {
  appStore.triggerSidebarOpened()
}

const icon = computed(() => (appStore.sidebarOpened ? Fold : Expand))
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  display: flex;
  align-items: center;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
