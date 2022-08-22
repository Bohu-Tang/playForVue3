<template>
  <data-list width="100%" height="300px" :data="tableData" :filter-groups="groups" :auto-search="false"
    :columns="columns" :loading="loading" :show-header="true" :border="true" :selection="true" :show-index="true"
    :show-page="true" page-position="left" @selectionChange="selectionChanged" @select="select" @searchMethod="getData">
    <el-button @click="dialogVisible = true">添加</el-button>
  </data-list>

  <!--  添加数据-->
  <el-dialog v-model="dialogVisible" title="添加品种" width="30%">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
      :size="formSize" status-icon>
      <el-form-item label="品种名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="品种code" prop="code">
        <el-input v-model="ruleForm.code" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="resetForm(ruleFormRef)">取消</el-button>
        <el-button type="primary" @click="submitAdd(ruleFormRef)">
          保存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import DataList from "@/components/dataList/dataList.vue"
import apiService from "@/apiService"
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from "element-plus"

// 弹窗相关
const dialogVisible = ref<boolean>(false)

interface IaddForm {
  name: string,
  code: string
}

const formSize = ref('default')
const ruleForm = reactive<IaddForm>({ name: '', code: '' })
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  name: [{ required: true, message: '请输入品种名称', trigger: 'blur' }],
  code: [{ required: true, message: '请输入品种code', trigger: 'blur' }]
})
// 新增保存
const submitAdd = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      insertAppleType(ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 新增品种请求
interface IappleType {
  name: string,
  code: string
}
const insertAppleType = async (param: IappleType) => {
  const res = await apiService.insertAppleType(param)
  ElMessage({
    message: res.data.msg,
    type: res.data.status
  })
  dialogVisible.value = false
  getData()
}
// 重置表单并清空表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  dialogVisible.value = false
}

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
let tableData = ref([])
// 列表loading状态
let loading = ref(false)


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
  const res = await apiService.getAppleType()
  console.log(res)
  tableData.value = res.data
}


</script>

<style scoped>
</style>
