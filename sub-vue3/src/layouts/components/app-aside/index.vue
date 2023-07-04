<template>
  <div class="aside">
    <el-menu :default-active="activeIndex" router>
      <el-menu-item index="/home" class="menu-item">
        <el-icon><House /></el-icon>
        <span>Home</span>
      </el-menu-item>
      <el-sub-menu index="element">
        <template #title>
          <el-icon class="sub-menu-icon"><location /></el-icon>
          <span class="sub-menu-title">Elementplus</span>
        </template>
        <el-menu-item index="/element/form" class="menu-item sub-menu-item">
          <span>Form</span>
        </el-menu-item>
        <el-menu-item index="/element/table" class="menu-item sub-menu-item">
          <span>Table</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const activeIndex = ref("");
const route = useRoute()
activeIndex.value = route.path
</script>

<style lang="scss" scoped>
.aside {
  ::v-deep .el-menu {
    border-right: transparent;
  }
  ::v-deep .el-menu-item,
  ::v-deep .el-sub-menu .el-sub-menu__title {
    height: 40px;
    border-left: 4px solid #fff;
  }
  .menu-item.is-active {
    background-color: #edf1fc;
    border-left: solid 4px #1d54d9;
  }
  ::v-deep .el-sub-menu.is-active{
    .sub-menu-title, .sub-menu-icon {
      color: var(--el-menu-active-color)
    }
  }
    
  
  ::v-deep .el-menu-item.sub-menu-item {
    padding-left: 50px
  }
}
</style>
