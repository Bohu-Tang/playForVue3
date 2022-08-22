<template>
    <!-- <el-button class="default-text">{{ scope.row[col.prop] }}</el-but> -->
    <div class="text-btn">
        <el-button v-for="(item, index) in col.btns" :type="item.type ? item.type : ''" :link="item.link"
            @click="item.cb(scope.row)">{{ item.label }}</el-button>
    </div>
</template>
<script lang="ts" setup>
import { toRefs, defineProps, withDefaults } from "vue"

interface Iprops {
    scope: any,
    col: any
}

const props = withDefaults(defineProps<Iprops>(), {
    scope: {},
    col: {}
})

const { scope, col } = toRefs(props)
</script>
