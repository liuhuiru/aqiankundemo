<template>
  <router-view></router-view>
</template>

<script setup>
// import NProgress from 'nprogress';
import { ref, watch, nextTick, computed } from "vue";
import { useStore } from "@/store";

const store = useStore();
const isLoading = computed(() => store.isLoading)

// watch(isLoading, (val) => {
//   if (!val) {
//     nextTick(() => {
//       NProgress.done();
//     });
//   }
// });
// NProgress.start();
</script>

<style lang="scss">
html,
body {
  margin: 0 !important;
  padding: 0;
}
</style>
