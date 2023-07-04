<template>
  <div class="view">
    <app-aside class="view-aside"> </app-aside>
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
  background-color: #f7f8fc;
  .view-aside {
    height: calc(100vh - 60px);
    overflow: auto;
    width: 200px;
    background-color: #fff;
    border-right: solid 2px #ecececb3;
  }
  .view-body {
    height: calc(100vh - 110px);
    background-color: #fff;
    margin: 15px;
    width: calc(100vw - 200px);
    border-radius: 2px;
    padding: 10px;
    box-shadow: 0px 0px 10px #cacacada;
  }
}
</style>
