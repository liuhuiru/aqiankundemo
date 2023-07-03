<template>
  <main class="layout">
    <app-header class="layout-header"></app-header>
    <div class="layout-body">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import AppHeader from './components/app-header/index.vue';
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  .layout-body {
    background-color: var(--el-menu-hover-bg-color);
    height: calc(100vh - 78px);
    padding: 10px;
  }
}
</style>
