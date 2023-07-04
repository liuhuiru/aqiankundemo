<template>
  <div class="home-content">
  <span class="home-title">HOME</span>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="hover"> <p>当前处于{{ isQiankun ? "qiankun" : "独立运行" }}环境</p> </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover"> <p>当前处于{{ isQiankun ? "qiankun" : "独立运行" }}环境</p> </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover"> <p>当前处于{{ isQiankun ? "qiankun" : "独立运行" }}环境</p> </el-card>
    </el-col>
  </el-row>
    
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";

const isQiankun = computed(() => window.__POWERED_BY_QIANKUN__);
</script>

<style scoped lang="scss">
.home-content {
  /* box-shadow: var(--el-box-shadow); */
  border-radius: 2px;
  .home-title {
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
