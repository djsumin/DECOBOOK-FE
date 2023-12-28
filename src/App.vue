<template>
  <div>
    <div>
      <TheHeaderNav class="app-header" />
    </div>
    <div>
      <RouterView />
    </div>
    <div>
      <TheFooterNav class="app-footer" />
    </div>
    
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheHeaderNav from "./components/common/TheHeaderNav.vue";
import TheFooterNav from "./components/common/TheFooterNav.vue";


</script>

<style scoped>
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
