<template>
  <div id="appContainer"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { registerMicroApps, start } from 'qiankun';
onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    start({
      prefetch: false,
    });
  }
});
</script>
