<script setup lang="ts">
import ElMain from "./components/container/Main.vue";
</script>

<template>
  <el-container>
    <el-aside>aside</el-aside>
    <el-container>
      <el-header>header</el-header>
      <el-main>main</el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss">
.el-container{
  width: 100%;
  height: 100%;
  .el-aside{
    width: 300px;
    background-color: palegoldenrod;
  }
  .el-container{
    .el-header{
      background-color: pink;
    }
    .el-main{
      background-color: blueviolet;

    }
    .el-footer{
      background-color: aquamarine;
    }
  }
}


</style>

