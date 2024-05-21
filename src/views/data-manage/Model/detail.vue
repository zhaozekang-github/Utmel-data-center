<!--
 * @Author: ZZK
 * @Date: 2024-05-21 15:04:06
 * @Description: 
-->
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
        <el-descriptions-item label="PID：" :span="2">kooriookami</el-descriptions-item>
        <el-descriptions-item label="型号：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="厂商：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="厂商ID：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="一级分类：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="二级分类：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="封装（package）：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="描述：" :span="2">18100000000</el-descriptions-item>
        <el-descriptions-item label="行业应用：" :span="2">Suzhou</el-descriptions-item>
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
