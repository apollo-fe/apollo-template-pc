<!--
 * @Author: Marshall
 * @Date: 2022-04-30 09:07:53
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 12:43:48
 * @Description: 
 * @FilePath: /apollo-admin-plus/src/layout/index.vue
-->
<template>
  <el-container class="app-container">
    <!-- 左侧菜单 -->
    <Sidebar
      :title="APP_TITLE"
      :style="sidebarStyle"
    />
    <el-container>
      <el-header class="app-header">
        <!-- 顶部navbar -->
        <Navbar />
        <!-- tags -->
        <TagsView id="guide-tags" />
      </el-header>
      <!-- 内容区 -->
      <AppMain />
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/Index.vue';
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue';
import TagsView from '@/components/TagsView/index.vue'
import { APP_TITLE } from '@config/constant';
import { computed } from 'vue';
import { useThemeStore } from '@/store';

const themeStore = useThemeStore();

const sidebarStyle = computed(() => {
  return {
    backgroundColor: themeStore.variables.menuBg,
  };
});
</script>

<style lang="scss" scoped>
@import '../styles/variables.module.scss';
.app-container {
  height: 100vh;
}

.app-header {
  padding: 0;
  height: 86px;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
