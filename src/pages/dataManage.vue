<template>
  <x-form ref="testForm" :groups="groups" @submit="submit"></x-form>
</template>

<script lang="ts" setup>
import xForm from '@/components/form/xForm.vue'
import {reactive, shallowReactive, markRaw, ref, onMounted} from 'vue'
import formComponents from '@/components/formComponents/index'
import {required, required1} from '@/common/validate'
import {loadEnv} from "vite"

const testForm = ref()

const submit = (data: any) => {
  console.log(data)
}

const groups = reactive({
  age: {
    label: '年龄',
    prop: 'age',
    type: 'el-input',
    value: '1',
    width: '50%',
    placeholder: '请输入年龄',
    rules: [required({msg: '请输入年龄', trigger: 'change'})],
    onChange(a,b) {
      console.log(a,'=----=',b)
      if (a === '10') {
        b.name = '肖鲁新'
        groups.name.rules = []
        testForm.value.refreshRules()
      }
    }
  },
  name: {
    label: '名字',
    prop: 'name',
    // type: markRaw(formComponents.xInput),
    type: 'el-input',
    value: '2',
    width: '50%',
    placeholder: '请输入名字',
    rules: [required({msg: '请输入名字', trigger: 'change'})],

  },
})
</script>
