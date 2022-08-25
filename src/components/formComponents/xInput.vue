<template>
  <div class="x-input" :style="{ width: width }">
    <el-input v-model="selfValue" @change="input" @input="input" :placeholder="placeholder"></el-input>
  </div>
</template>
<script lang="ts" setup>
import {defineProps, withDefaults, defineEmits, ref, toRefs, watch} from "vue"

interface IProps {
  width?: string,
  value?: string | number,
  placeholder?:string
}

const props = withDefaults(defineProps<IProps>(), {
  width: '100%',
  value: ''
})
let {width, value, placeholder} = toRefs(props)

const emit = defineEmits(['update:modelValue', 'change'])

// 定义自己的value用于双向绑定
let selfValue = ref<string | number>('')

// input事件
function input(value: string | number) {
  emit('update:modelValue', value)
  emit('change', value)
}

// 监听value变化,将传入的value反应在组件内部
watch(
    value,
    (newValue) => {
      selfValue.value = newValue
      emit('update:modelValue', newValue)
    },
    {
      immediate: true
    }
)


</script>
