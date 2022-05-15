<!--
 * @Author: Marshall
 * @Date: 2022-04-30 09:10:37
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 10:47:24
 * @Description: 
 * @FilePath: /apollo-admin-plus/src/layout/components/Sidebar/Index.vue
-->
<template>
  <el-aside :width="appStore.sidebarOpened ? '200px' : '64px'">
    <div class="logo-container">
      <el-avatar
        v-if="logo"
        class="logo-img"
        :size="APP_LOGO_HEIGHT"
        shape="square"
        :src="logo"
      />
      <span
        v-if="appStore.sidebarOpened"
        class="logo-title"
      >
        {{ title }}
      </span>
    </div>

    <el-scrollbar :style="scrollStyle">
      <SidebarMenu />
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts" setup>
import SidebarMenu from './SidebarMenu.vue';
import {
  APP_LOGO_HEIGHT,
  APP_LOGO_SRC,
  APP_PADDING_LARGE,
} from '@config/constant';
import { isExternal } from '@/utils/validate';
import { useAppStore } from '@/store';
import { computed } from '@vue/reactivity';

const appStore = useAppStore();

defineProps({
  title: {
    type: String,
    default: '',
  },
});

const logo = isExternal(APP_LOGO_SRC)
  ? APP_LOGO_SRC
  : new URL(`/src/assets/${APP_LOGO_SRC}`, import.meta.url).href;

const scrollStyle = computed(
  () => `height: calc(100vh - ${APP_LOGO_HEIGHT + APP_PADDING_LARGE * 3}px)`,
);
</script>

<style lang="scss" scoped>
@import '@/styles/variables.module.scss';

.logo-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin-bottom: 20px;
}

.logo-title {
  padding-left: 10px;
  font-weight: 600;
  font-size: 20px;
  white-space: nowrap;
  color: #ffffff;
}

:deep(.el-avatar) {
  --el-avatar-bg-color: translate;
}

:deep(.el-menu) {
  border-right: none !important;
}
</style>
