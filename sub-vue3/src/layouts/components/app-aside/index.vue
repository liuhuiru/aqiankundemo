<template>
  <el-menu default-active="/home" router>
    <el-menu-item index="/home">
      <el-icon><House /></el-icon>
      <span>Home</span>
    </el-menu-item>
    <el-sub-menu index="element">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Elementplus</span>
      </template>
      <el-menu-item index="/element/form">
        <el-icon><Notebook /></el-icon>
        <span>Form</span>
      </el-menu-item>
      <el-menu-item index="/element/table">
        <el-icon><Grid /></el-icon>
        <span>Table</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup></script>

<style lang="scss" scoped></style>
