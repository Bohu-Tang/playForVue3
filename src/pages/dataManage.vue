<template>
  <x-form ref="testForm" :groups="groups"  @submit="submit"></x-form>
</template>

<script lang="ts" setup>
import xForm from '@/components/form/xForm.vue'
import {reactive, shallowReactive, markRaw, ref, onMounted} from 'vue'
import formComponents from '@/components/formComponents/index'
import {required, required1} from '@/common/validate'

const testForm = ref()

const submit=(data:any)=>{
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
    rules: [required({msg: '请输入年龄', trigger: 'change'})],
    onChange(data:any) {
      console.log(data, '----')
      if(data==='10'){
        groups.name.value = '肖鲁新'
        groups.name.rules = []
        testForm.value.refreshRules()
      }
    }
  },
  name: {
    label: '名字',
    prop: 'name',
    type: markRaw(formComponents.xInput),
    value: '1',
    width: '50%',
    attrs: {
      placeholder: '请输入'
    },
    rules: [required({msg: '请输入名字', trigger: 'change'})],
    onChange(data:any) {
      console.log(data, '----')
    }
  },
})
</script>
