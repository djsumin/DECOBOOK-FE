<template>
  <div>
    <h1>다이어리 리스트 뷰</h1>
    <div>1.</div>
    <div>2.</div>
    <div>3.</div>
    <button @click="goMonthly()">달력보기</button>
    <button @click="goRegist()">기록남기기</button>
  </div>
</template>

<script setup>
import router from "@/router";
const goMonthly = function () {
  router.push({ name: "diaryMonthly" });
};

const goRegist = function () {
  router.push({ name: "registDiary" });
};
</script>

<style scoped></style>
