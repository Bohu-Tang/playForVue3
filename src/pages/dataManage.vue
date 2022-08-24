<template>
  <!--  <el-button @click="testClick">测试</el-button>-->
  <x-form :groups="groups" @change="formChange"></x-form>
</template>

<script lang="ts" setup>
import xForm from '@/components/form/xForm.vue'
import {reactive, shallowReactive, markRaw, ref} from 'vue'
import formComponents from '@/components/formComponents/index'
import {required} from '@/common/validate'

// const testClick = () => {
//   groups.name.label = 'name'
// }

const formChange = (data: any) => {
  console.log(data)

}
const groups = reactive({
      age: {
        label: '年龄',
        prop: 'age',
        type: markRaw(formComponents.xInput),
        value: '1',
        width: '50%',
        attrs: {
          placeholder: '请输入'
        },
        rules:[required('请输入年龄','change')],
        onChange(value: any) {
          console.log(value, '----')
        }
      },
    })
</script>
