<template>
  <div class="app-container">
    <el-card shadow="never" class="table-container">
      <el-descriptions
        title="基本信息"
        :column="2"
        :size="size"
        direction="horizontal"
        :style="blockMargin"
      >
        <el-descriptions-item label="供应商名称：" :span="2">kooriookami</el-descriptions-item>
        <el-descriptions-item label="供应商徽章：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="供应商会员类型：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="会员年限：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="电话：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="手机：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="传真：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="办公地点：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="地址：" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="经营的品牌：" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="供应商链接：" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();


</script>

<style scoped lang="scss">

</style>
