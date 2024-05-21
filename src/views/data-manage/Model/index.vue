<!-- eslint-disable prettier/prettier -->
<!--
 * @Author: ZZK
 * @Date: 2024-05-15 14:31:23
 * @Description: 
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="table-container">
      <DataTable :hasAdd="true" :table-config="tableConfig" @pop-add-click="popAddClick">
        <template #options="scope">
          <el-button
            type="primary"
            size="small"
            link
            @click="openMenuDialog(scope.row)"
          >
            <i-ep-position />查看
          </el-button>
          <el-button
            type="primary"
            size="small"
            link
            @click="handleDelete(scope.row.id)"
          >
            <i-ep-delete />删除
          </el-button>
        </template>
      </DataTable>
    </el-card>

    <!-- 供应商表单弹窗 -->
    <el-dialog
      v-model="dialog.visible"
      :title="dialog.title"
      width="600px"
      @close="closeDialog"
    >
      <el-form
        ref="roleFormRef"
        label-position="right"
        :model="formData"
        :rules="rules"
        label-width="120px"
        width="300px"
      >
        <el-form-item label="型号" prop="model">
          <el-input v-model="formData.model" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="厂商" prop="manufacturer">
          <el-input v-model="formData.manufacturer" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="分类" prop="classify">
          <el-input v-model="formData.classify" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="封装" prop="packaging">
          <el-input v-model="formData.membershipYears" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="formData.description" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="行业应用" prop="industryApplication">
          <el-input v-model="formData.officeLocation" placeholder="请输入" />
        </el-form-item>
        <el-row
          v-for="(argument, index) in formData.argument"
          :key="argument.key"
          :label="'argument' + index"
          :prop="'argument.' + index + '.value'"
        >
          <el-col :span="11">
            <el-form-item :label="'参数名称' + index" prop="name">
              <el-input v-model="argument.name" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item :label="'参数值' + index" prop="name" label-width="80px">
              <el-input v-model="argument.value" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-icon size="large" @click="addArgument(index)"
              ><CirclePlus
            /></el-icon>
          </el-col>
        </el-row>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
          <el-button @click="closeDialog">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import tableConfig from "./config/select";
import { RolePageVO, RoleForm, RoleQuery } from "@/api/role/model";
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";

const router = useRouter();

const dialog = reactive({
  title: "",
  visible: false,
});
const formData = reactive<RoleForm>({
  model: 1,
  manufacturer: 1,
  classify: "",
  packaging: "",
  description: "",
  industryApplication: "",
  address: "",
  albumLink: "",
  argument: [
    {
      key: 1,
      name: "",
      value: "",
    },
    {
      key: 2,
      name: "",
      value: "",
    },
  ],
  supplierLink: "",
});

function openMenuDialog(row: RolePageVO) {
  console.log(row);
  router.push({
    path: "/data-manage/Modeldetail",
    params: row,
  });
}

function popAddClick(row) {
  dialog.visible = true;
  dialog.title = "新增供应商";
}

function addArgument(index) {
  let uid = uuidv4();
  const newElement = {
    key: uid,
    value: "",
  };
  formData.argument.splice(index + 1, 0, newElement);
}
</script>

<style lang="scss" scoped>
:deep(.el-form-item__content .el-input--default) {
  width: 85%;
}
:deep(.el-dialog .el-form-item__content .el-icon) {
  margin-left: 20px;
  cursor: pointer;
}
:deep(.el-row .el-icon) {
  cursor: pointer;
}
</style>
