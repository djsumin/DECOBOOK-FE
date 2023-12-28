<template>
  <div class="ledger-container">
    가계부 뷰
    <canvas id="myChart" width="400" height="400"></canvas>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style scoped>
.ledger-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
