<template>
  <div class="header">
    <el-row>
      <el-col :span="12">
        <el-icon @click="collapseStore.open" v-show="collapseStore.isCollapsed===true">
          <Expand/>
        </el-icon>
        <el-icon @click="collapseStore.close" v-show="collapseStore.isCollapsed === false">
          <Fold/>
        </el-icon>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import {Expand, Fold} from "@element-plus/icons-vue"
import useCollapse from "@/store/collapse"

const collapseStore = useCollapse()

</script>
<style lang="scss" scoped>
.header {
  .el-col {
    height: 60px;

    .el-icon {
      font-size: 30px;
      margin-top: 15px;
    }
  }

}
</style>
