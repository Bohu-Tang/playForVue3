<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
    <el-form-item v-for="(item,index) in groups" :key="index" :label="item.label" :prop="item.prop">
      <component :is="item.type" v-model="item.value" @valueChange="valueChange" @change="item.onChange"
                 :prop="item.prop" v-bind="item.attrs"/>
    </el-form-item>
    <el-form-item>
      <el-button @click="submitForm(ruleFormRef)">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {defineProps, toRefs, ref, reactive, defineEmits} from "vue"
import type {FormInstance, FormRules} from 'element-plus'

const emit = defineEmits(['submit'])

// 处理 groups
interface IProps {
  groups: any
}

const props = defineProps<IProps>()
const {groups} = toRefs(props)
/**
 * 表单数据提交
 * */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      emit('submit', ruleForm)
    } else {
      return false
    }
  })
}

/**
 * 表单数据
 */
const ruleForm = reactive({})
Object.keys(groups.value).forEach(key => {
  ruleForm[key] = groups.value[key].value
})

// 数据变化
const valueChange = (value: any, item: any, prop: any) => {
  ruleForm[prop] = value

}

/**
 * 表单校验
 */


const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({})
// 生成表单校验规则---封装为一个方法抛出，好在外面使用
const refreshRules = () => {
  Object.keys(groups.value).forEach(key => {
    rules[key] = groups.value[key].rules
  })
}
refreshRules()

/**
 * 抛出的内容，使用ref可以读取到
 */
defineExpose({
  refreshRules: refreshRules
})
</script>
