<template>
  <div class="ledger-container">
    <h1>가계부 뷰</h1>

    <RouterView />
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
