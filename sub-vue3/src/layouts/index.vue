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
  .view-aside {
    /* width: 200px */
    height:100%
  }
  .view-body {
    margin-left:10px;
    height: 100%;
    width: 100%;
  }

}
</style>