<template>
  <p>当前处于{{ isQiankun ? "qiankun" : "独立运行" }}环境</p>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script setup>
import { reactive, computed, ref } from "vue";

const isQiankun = computed(() => window.__POWERED_BY_QIANKUN__);
</script>

