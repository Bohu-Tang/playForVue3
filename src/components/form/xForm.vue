<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
    <el-form-item v-for="(item,index) in groups" :key="index" :label="item.label" :prop="item.prop">
      <component :is="item.type" v-model="item.value" @valueChange="valueChange" :prop="item.prop" v-bind="item.attrs"/>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {defineProps, toRefs, ref, reactive} from "vue"


// 处理 groups
interface IProps {
  groups: any
}

const props = defineProps<IProps>()
const {groups} = toRefs(props)

// 表单数据
const ruleForm = reactive({})
Object.keys(groups.value).forEach(key => {
  ruleForm[key] = groups.value[key].value
})

// 数据变化
const valueChange = (value, item, prop) => {
  ruleForm[prop] = value

}

// 表单校验
import type {FormInstance, FormRules} from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({})

Object.keys(groups.value).forEach(key => {
  rules[key] = groups.value[key].rules
})


</script>
