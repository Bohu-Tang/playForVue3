<template>
  <el-container>
    <el-aside width="auto">
      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>底部</el-footer>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import SideMenu from './components/SideMenu.vue'
import Header from './components/Header.vue'


</script>
<style lang="scss">
.el-container {
  height: 100%;

  .el-aside {
    background-color: #d9ecff;
  }

  .el-container {
    .el-header {
      background-color: #c6e2ff;
    }

    .el-main {
      background-color: #ecf5ff;
    }

    .el-footer {
      background-color: #c6e2ff;
    }
  }
}
</style>
