<template>
  <el-config-provider :locale="zhCn">
    <router-view/>
  </el-config-provider>
</template>
<script setup lang="ts">
// 引入中文语言包
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

</script>
<style lang="scss">

</style>

