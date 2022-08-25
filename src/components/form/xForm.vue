<template>
  <el-form ref="ruleFormRef" :model="formData" :rules="rules">
    <el-form-item v-for="(item,index) in selfGroups" :key="index" :label="item.label" :prop="item.prop"
                  :style="{width:item.width||'50%'}">
      <component
          :is="item.type" v-model="formData[item.prop]"
          @change="item.onChange?item.onChange($event,formData):''"
      />
    </el-form-item>
    <el-form-item>
      <el-button @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {defineProps, toRefs, ref, reactive, defineEmits} from "vue"
import type {FormInstance, FormRules} from 'element-plus'

const emit = defineEmits(['submit'])

// 处理 selfGroups
interface IProps {
  groups: any
}

const props = defineProps<IProps>()
const {groups: selfGroups} = toRefs(props)

// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()

}
/**
 * 表单数据提交
 * */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      emit('submit', formData)
    } else {
      return false
    }
  })
}

/**
 * 表单数据
 */
const formData = reactive({})

Object.keys(selfGroups.value).forEach(key => {
  formData[key] = selfGroups.value[key].value
})


/**
 * 表单校验
 */
const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({})
// 生成表单校验规则---封装为一个方法抛出，好在外面使用
const refreshRules = () => {
  Object.keys(selfGroups.value).forEach(key => {
    rules[key] = selfGroups.value[key].rules
  })
  // 更新校验规则时清空当前校验状态
  if(ruleFormRef.value){
    ruleFormRef.value.clearValidate()
  }
}
refreshRules()

/**
 * 抛出的内容，使用ref可以读取到
 */
defineExpose({
  refreshRules: refreshRules
})
</script>
