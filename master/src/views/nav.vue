<template>
  <div class="layout-wrapper">
    <el-container>
      <el-header class="layout-header">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :ellipsis="false"
          router
        >
          <div class="logo">
            <img
              alt="Vue logo"
              src="../assets/logo.png"
              style="height: 35px; margin: 10px"
            />
            <span>QIANKUNDEMO</span>
          </div>
          <el-menu-item index="/app/sub-vue3">sub-vue3</el-menu-item>
          <el-menu-item index="/app/sub-vue2">sub-vue2</el-menu-item>
          <div class="flex-grow" />
          <div class="user-info">
            你好{{ store.userInfo.name }}
            <div style="padding: 8px">
              <el-dropdown @command="handleCommand">
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-menu>
      </el-header>

      <el-main class="main-container">
        <div id="appContainer"></div>
        <!-- <router-view/> -->
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "@/store";

const router = useRouter();
const store = useStore();
const activeIndex = ref("/app/sub-vue3");

function handleCommand(command){
  localStorage.clear();
  // console.log('command', command)
  router.push('/login')
  ElMessage('已退出登录')
}

</script>

<style lang="scss" scoped>
.layout-wrapper {
  ::v-deep .el-header {
    padding: 0;
  }
  .layout-header ::v-deep .el-menu {
    height: 58px;
  }
  .logo {
    font-weight: bold;
    display: flex;
    justify-content: center;
    line-height: 58px;
    outline: none;
  }
  .user-info {
    display: flex;
    justify-content: center;
    line-height: 58px;
    ::v-deep .el-avatar {
      outline: none
    }
  }
  .flex-grow {
    flex-grow: 1;
    outline: none;
  }
  .main-container {
    height: calc(100vh - 60px)
  }
}
</style>
