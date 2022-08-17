<template>
  <data-list
      width="100%"
      height="300px"
      :data="tableData"
      :filter-groups="groups"
      :auto-search="false"
      :columns="columns"
      :loading="loading"
      :show-header="true"
      :border="true"
      :selection="true"
      :show-index="true"
      :show-page="true"
      page-position="left"
      @selectionChange="selectionChanged"
      @select="select"
      @searchMethod="getData"
  />

  <el-button @click="addRow">点击加一条数据</el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import DataList from "@/components/dataList/dataList.vue"
import apiService from "@/apiService"

// 筛选面板配置
let groups = ref([
  {
    prop: 'name',
    placeholder: '请输入姓名',
    componentName: 'xInput',
    value: '金针菇',
    clearable: false
  },
  {
    prop: 'sex',
    placeholder: '请输入性别',
    componentName: 'xInput',
    value: undefined,
  },
  {
    prop: 'address',
    placeholder: '请输入地址',
    componentName: 'xInput',
    value: undefined
  },
])
// 列配置部分
let columns = ref([
  {
    label: '记录ID',
    prop: 'id',
    width: 180,
    type: 'defaultText'
  },
  {
    label: '名称',
    prop: 'name',
    width: 180,
    size: '30px',
    type: 'defaultText'
  },
  {
    label: '品种名称',
    prop: 'typeName',
    width: 180,
    type: 'defaultText'
  },
  {
    label: '品种code',
    prop: 'type',
    type: 'defaultText',
    showOverflowTooltip: true,
  }
])
// 列表数据
let tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
])
// 列表loading状态
let loading = ref(false)
// 添加一条数据
function addRow() {
  loading.value = true
  setTimeout(() => {
    tableData.value.push({
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    })
    loading.value = false
  }, 1000)
}

// 多选的数据
let multipleSelection = ref([])

// 多选数据发生变化时的回调
function selectionChanged(val: never[]): void {
  multipleSelection.value = val
}

// 当用户手动勾选数据行的 Checkbox 时触发的事件
function select(selection: Event) {
  // selection:已选中的所有数据 row：当前选中行的数据
  console.log(selection)
}

// 请求数据
async function getData() {
  const res = await apiService.getEnum()
  console.log(res)
  tableData.value = res.data
}
</script>

<style scoped>
</style>
