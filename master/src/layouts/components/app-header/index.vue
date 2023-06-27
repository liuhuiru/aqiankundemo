<template>
  <div class="header">
    <div class="header-left">
      <img alt="logo" src="@/assets/logo.png" />
      <span class="logo-name">QIANKUNDEMO</span>
    </div>
    <div class="header-menu">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :ellipsis="false"
        router
      >
        <el-menu-item v-for="item in headerMenuConfig" :index="item.index" :key="item.index">{{item.title}}</el-menu-item>
      </el-menu>
    </div>
    <div class="header-right">
      <el-icon><Bell /></el-icon>
      <div class="dropdown-menu">
        <el-dropdown @command="handleCommand">
          <img
            alt="avatar"
            src="@/assets/avatar15.png"
            class="avatar"
          />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "@/store";
import headerMenuConfig from "@/common/config/headerMenuConfig"

const router = useRouter();
const store = useStore();
const activeIndex = ref("/app/sub-vue3");

function handleCommand(command) {
  localStorage.clear();
  router.push("/login");
  ElMessage("已退出登录");
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 58px;
  align-items: center;
  position: relative;
  border-radius: 50px;
  .header-left {
    display: flex;
    align-items: center;
    margin-right: 10px;
    & > img {
      height: 35px;
      margin: 10px;
    }
    .logo-name {
      font-weight: bold;
    }
  }
  .header-menu {
    ::v-deep .el-menu {
      border-bottom: none;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    .dropdown-menu {
      margin: 0 10px;
      .avatar {
        height: 35px;
        outline: none;
      }
    }
  }
}
</style>
