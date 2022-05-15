/*
 * @Author: Marshall
 * @Date: 2022-04-30 04:15:17
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-03 05:57:36
 * @Description:
 * @FilePath: /apollo-admin-plus/src/store/modules/app.ts
 */
import { defineStore } from 'pinia';
import { getItem, setItem } from '@/utils/storage';
import { APP_TAGS_VIEW } from '@config/constant';

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      sidebarOpened: true,
      tagsViewList: getItem(APP_TAGS_VIEW) || [],
    };
  },
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened;
    },
    /**
     * 添加 tags
     */
    addTagsViewList(tag) {
      const isFind = this.tagsViewList.find((item) => {
        return item.path === tag.path;
      });
      // 处理重复
      if (!isFind) {
        this.tagsViewList.push(tag);
        setItem(APP_TAGS_VIEW, this.tagsViewList);
      }
    },
    /**
     * 为指定的 tag 修改 title
     */
    changeTagsView({ index, tag }) {
      this.tagsViewList[index] = tag;
      setItem(APP_TAGS_VIEW, this.tagsViewList);
    },
    /**
     * 删除 tag
     * @param {type: 'other'||'right'||'index', index: index} payload
     */
    removeTagsView(payload) {
      if (payload.type === 'index') {
        this.tagsViewList.splice(payload.index, 1);
      } else if (payload.type === 'other') {
        this.tagsViewList.splice(
          payload.index + 1,
          this.tagsViewList.length - payload.index + 1,
        );
        this.tagsViewList.splice(0, payload.index);
      } else if (payload.type === 'right') {
        this.tagsViewList.splice(
          payload.index + 1,
          this.tagsViewList.length - payload.index + 1,
        );
      }
      setItem(APP_TAGS_VIEW, this.tagsViewList);
    },
  },
});
