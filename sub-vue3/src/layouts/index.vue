<template>
  <div class="view">
    <app-aside class="view-aside">
    </app-aside>
    <div class="view-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import AppAside from "./components/app-aside/index.vue";
</script>

<style lang="scss" scoped>
.view {
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  .view-aside {
    height: calc(100vh - 88px);
    overflow: auto;
  }
  .view-body {
    margin-left:10px;
  }

}
</style>