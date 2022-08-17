<template>
  <el-menu
      :default-active="activeRoute"
      class="el-menu-vertical"
      :collapse="collapseStore.isCollapsed"
      :collapse-transition="true"
      :router="true"
  >
    <template v-for="(item,index) in allRoutes" :key="index">
      <!--      有子集菜单的路由-->
      <el-sub-menu :index="item.path" v-if="item.children.length>0">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"/>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
          <el-icon>
            <component :is="child.meta.icon"/>
          </el-icon>
          <template #title>{{ child.meta.title }}</template>
        </el-menu-item>
      </el-sub-menu>
      <!--      没有子集菜单的路由-->
      <el-menu-item v-else :index="item.path">
        <el-icon>
          <component :is="item.meta.icon"/>
        </el-icon>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </template>

  </el-menu>
</template>

<script lang="ts" setup>
import useCollapse from "@/store/collapse"
import {useRouter, useRoute} from "vue-router"
import {ref} from 'vue'

/**
 * 菜单展开/收起
 * */
const collapseStore = useCollapse()

/**
 * 路由菜单渲染逻辑
 * */
// 所有路由（所有层级都打平的）
const router = useRouter()
// 找出不是子路由的，把他们渲染到菜单上(hidden的除外)
const allRoutes = router.getRoutes().filter(item => {
  return !item.meta.parentRoute && !item.meta.hidden
})
// 获取当前路由，设置活动的路由
const route = useRoute()
const activeRoute = ref<string>('/')
activeRoute.value = route.fullPath


</script>

<style lang="scss">
.el-menu-vertical{
  height: 100%;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  //min-height: 400px;
}
</style>
