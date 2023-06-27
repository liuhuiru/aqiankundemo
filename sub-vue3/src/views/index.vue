<template>
  <div class="index-left">
    <el-menu default-active="/home" router>
      <el-menu-item index="/home">
        <el-icon><House /></el-icon>
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="/form">
        <el-icon><Notebook /></el-icon>
        <span>Form</span>
      </el-menu-item>
      <el-menu-item index="/table">
        <el-icon><Grid /></el-icon>
        <span>Table</span>
      </el-menu-item>
      <el-menu-item index="/tablev2">
        <el-icon><Grid /></el-icon>
        <span>Virtualized Table</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="index-right">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss">
.index-left {
  width: 200px;
  height: calc(100vh - 100px);
  float: left
}
.index-right {
  margin-left: 200px
}
</style>
