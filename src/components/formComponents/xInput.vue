<template>
  <div class="x-input" :style="{ width: width }">
    <el-input v-model="inputValue" v-bind="attrs" @input="input"></el-input>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults, useAttrs, defineEmits, ref, toRefs, watch } from "vue"

interface IProps {
  prop?:string,
  width?: string,
  value?: string | number
}

const props = withDefaults(defineProps<IProps>(), {
  prop: '',
  width: '100%',
  value: ''
})
let { width, value: refValue, prop } = toRefs(props)

const attrs = useAttrs()
const emit = defineEmits(['valueChange','update:modelValue', 'change'])

// 定义自己的value用于双向绑定
let inputValue = ref<string | number>('')

// input事件
function input() {
  emit('valueChange', inputValue.value, attrs, prop.value)
  emit('update:modelValue', inputValue.value)
  emit('change', inputValue.value)
}

// 监听value变化,将传入的value反应在组件内部
watch(
    refValue,
    (newValue) => {
      inputValue.value = newValue
    },
    {
      immediate: true
    }
)


</script>
