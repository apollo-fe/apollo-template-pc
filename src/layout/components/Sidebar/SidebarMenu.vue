<!--
 * @Author: Marshall
 * @Date: 2022-04-30 09:52:44
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 10:46:49
 * @Description: 
 * @FilePath: /apollo-admin-plus/src/layout/components/Sidebar/SidebarMenu.vue
-->
<template>
  <el-menu
    :default-active="activeMenu"
    :collapse="!appStore.sidebarOpened"
    :background-color="themeStore.variables.menuBg"
    :text-color="themeStore.variables.menuText"
    :active-text-color="themeStore.variables.menuActiveText"
    :unique-opened="APP_MENU_UNIQUE_OPEN"
    router
  >
    <SidebarItem
      v-for="item in routes"
      :key="item.path"
      :route="item"
    />
  </el-menu>
</template>

<script lang="ts" setup>
import { ComputedRef, computed } from 'vue';
import SidebarItem from './SidebarItem.vue';
import { useRouter, useRoute } from 'vue-router';
import { useThemeStore, useAppStore } from '@/store';
import { APP_MENU_UNIQUE_OPEN } from '@config/constant';
import { filterRouters, generateMenus } from '@/utils/route';

const themeStore = useThemeStore();
const appStore = useAppStore();
const mainColor = themeStore.variables.mainColor;

console.log('main:', mainColor);

// 计算路由表结构
const router = useRouter();
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateMenus(filterRoutes);
});

console.log('路由信息：', routes);

// 计算高亮 menu 的方法
const route = useRoute();
const activeMenu: ComputedRef<any> = computed((): any => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>

<style lang="scss" scoped>
:deep(.el-menu-item.is-active) {
  background-color: v-bind(mainColor);
}
</style>
