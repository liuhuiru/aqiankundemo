<template>
  master
  <button @click="gotoSub">去子应用</button>
  <div id="appContainer"></div>
</template>

<script setup>
function gotoSub(){
  history.pushState(null, '/sub-vue3', '/sub-vue3/')
}
</script>

