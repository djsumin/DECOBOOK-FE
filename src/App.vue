<template>
  <div>
    <TheHeaderNav class="app-header" />
    <h2 style="display: flex; justify-content: center">AppView</h2>
    <RouterView />
    <TheFooterNav class="app-footer" />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TheHeaderNav from "./components/common/TheHeaderNav.vue";
import TheFooterNav from "./components/common/TheFooterNav.vue";
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

* {
  font-family: "Noto Sans KR", sans-serif;
}
.app-header {
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.app-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
