<!--
 * @Author: ZZK
 * @Date: 2024-05-16 09:37:09
 * @Description: 
-->
<!--
 * @Author: ZZK
 * @Date: 2024-05-15 14:31:23
 * @Description: 
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="table-container">
      <DataTable
        :hasAdd="true"
        :table-config="tableConfig"
        @pop-add-click="popAddClick"
      >
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
            @click="popAddClick(scope.row)"
          >
            <i-ep-edit />编辑
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
        <el-form-item label="供应商名称" prop="supplierName">
          <el-input v-model="formData.supplierName" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="供应商徽章" prop="supplierBadge">
          <el-input v-model="formData.supplierBadge" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="供应商会员类型" prop="membershipType">
          <el-input v-model="formData.membershipType" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="会员年限" prop="membershipYears">
          <el-input v-model="formData.membershipYears" placeholder="请输入" />
        </el-form-item>
        <el-row
          v-for="(personInfo, index) in formData.personInfo"
          :key="personInfo.key"
          :label="'personInfo' + index"
          :prop="'personInfo.' + index + '.value'"
        >
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="personInfo.name" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="手机" prop="name" label-width="60px">
              <el-input v-model="personInfo.tel" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-icon size="large" @click="addPersonInfo(index)"
              ><CirclePlus
            /></el-icon>
          </el-col>
        </el-row>
        <el-form-item label="传真" prop="fax">
          <el-input v-model="formData.fax" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="办公地点" prop="officeLocation">
          <el-input v-model="formData.officeLocation" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="formData.address" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="公司相册链接" prop="albumLink">
          <el-input v-model="formData.albumLink" placeholder="请输入" />
        </el-form-item>
        <el-form-item
          v-for="(business, index) in formData.business"
          :key="business.key"
          :label="'business' + index"
          :prop="'businesss.' + index + '.value'"
        >
          <el-input v-model="business.value" placeholder="请输入" />
          <el-icon size="large" @click="addBusiness(index)"
            ><CirclePlus
          /></el-icon>
        </el-form-item>
        <el-form-item label="供应商链接" prop="supplierLink">
          <el-input v-model="formData.supplierLink" placeholder="请输入" />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
          <el-button>取 消</el-button>
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
  supplierName: 1,
  supplierBadge: 1,
  membershipType: "",
  membershipYears: "",
  personInfo: [
    {
      key: 1,
      name: "zzz",
      tel: "123456",
    },
    {
      key: 1,
      name: "rrr",
      tel: "456789",
    },
  ],
  fax: "",
  officeLocation: "",
  address: "",
  albumLink: "",
  business: [
    {
      key: 1,
      value: "",
    },
    {
      key: 2,
      value: "",
    },
  ],
  supplierLink: "",
});

function openMenuDialog(row: RolePageVO) {
  console.log(row);
  router.push({
    path: "/data-manage/Supplierdetail",
    params: row,
  });
}

function popAddClick(row) {
  dialog.visible = true;
  if (row) {
    dialog.title = "编辑供应商";
    // formData = row;
  } else {
    dialog.title = "新增供应商";
  }
}

function addPersonInfo(index) {
  let uid = uuidv4();
  const newElement = {
    key: uid,
    value: "",
  };
  formData.personInfo.splice(index + 1, 0, newElement);
}

function addBusiness(index) {
  let uid = uuidv4();
  const newElement = {
    key: uid,
    value: "",
  };
  formData.business.splice(index + 1, 0, newElement);
}
// 关闭供应商表单弹窗
function closeDialog() {
  dialog.visible = false;
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
