<template>
  <div class="layout-wrapper">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
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
import { ref } from "vue";

const router = useRouter();
const activeIndex = ref("/app/sub-vue3");

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

</script>

<style lang="scss" scoped>
.layout-wrapper {
  ::v-deep .el-header {
    padding: 0;
  }
  ::v-deep .el-menu {
    height: 58px;
  }

  .logo {
    font-weight: bold;
    display: flex;
    justify-content: center;
    line-height: 58px;
    outline: none;
  }
}
</style>
