<template>
  <div class="ledger-container">
    <h1>가계부 뷰</h1>
    <div class="charts-container">
      <div class="chart-item">
        <h2>달력</h2>
      </div>
      <div class="chart-item">
        <h2>막대그래프</h2>
        <button @click="goList()">자세히보기</button>
      </div>
      <div class="chart-item">
        <h2>원형그래프</h2>
        <button @click="goCategory()">자세히보기</button>
      </div>
    </div>
    <button @click="createLedger()">오늘의 수입/지출 남기기</button>
    <canvas id="myChart" width="400" height="400"></canvas>
    <RouterView />
  </div>
</template>

<script setup>
import router from "@/router";
import { RouterView } from "vue-router";

const goList = function () {
  router.push({ name: "ledgerList" });
};

const goCategory = function () {
  router.push({ name: "ledgerCategoryList" });
};

const createLedger = function () {
  router.push({ name: "registLedger" });
};
</script>

<style scoped>
.ledger-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.charts-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}

.chart-item {
  flex: 1;
  margin: 0 10px;
}
</style>
