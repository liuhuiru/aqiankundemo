<template>
  <router-view></router-view>
</template>

<script setup>
import { ref, watch, nextTick, computed } from "vue";
import { useStore } from "@/store";

const store = useStore();
const isLoading = computed(() => store.isLoading)

</script>

<style lang="scss">
html,
body {
  margin: 0 !important;
  padding: 0;
}
</style>
