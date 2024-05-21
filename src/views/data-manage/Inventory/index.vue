<!--
 * @Author: ZZK
 * @Date: 2024-05-15 14:31:23
 * @Description: 
-->
<template>
  <div class="app-container">
    <el-card shadow="never" class="table-container">
      <DataTable :table-config="tableConfig" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import tableConfig from "./config/select";
</script>

<style lang="scss"></style>
