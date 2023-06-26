<template>
  home
  <p>当前处于{{ isQiankun ? "qiankun" : "独立运行" }}环境</p>
</template>

<script setup>
import { reactive, computed, ref } from "vue";

const isQiankun = computed(() => window.__POWERED_BY_QIANKUN__);
</script>
