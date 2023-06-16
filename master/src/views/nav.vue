<template>
  <div class="layout-wrapper">
    header
    <button @click="gotoSub">去子应用</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router'
const router = useRouter() 
function gotoSub() {
  router.push('/sub-vue3')
}
</script>
