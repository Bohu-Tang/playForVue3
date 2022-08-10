<script setup lang="ts">
import ElMain from "./components/container/Main.vue"
import ElButton from './components/button/Button.vue'
</script>

<template>
  <el-container>
    <el-aside width="200px">aside</el-aside>
    <el-container>
      <el-header>header</el-header>
      <el-main>
        <el-button size="large" type="success">按钮</el-button>
        <el-button size="medium" type="primary">按钮</el-button>
        <el-button size="small" type="danger">按钮</el-button>
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.el-container{
  width: 100%;
  height: 100%;
  .el-aside{
    background-color: #d5dce5;
  }
  .el-container{
    .el-header{
      background-color: #b5c0cf;
    }
    .el-main{
      background-color: #eaeef2;

    }
    .el-footer{
      background-color: #b5c0cf;
    }
  }
}


</style>

