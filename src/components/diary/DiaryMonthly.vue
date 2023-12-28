<template>
  <div>
    <h1>다이어리 달력 뷰</h1>

    <button @click="goRegist()">기록남기기</button>
    <button @click="goList()">리스트보기</button>
  </div>
</template>

<script setup>
import router from "@/router";

const goRegist = function () {
  router.push({ name: "registDiary" });
};

const goList = function () {
  router.push({ name: "diaryList" });
};
</script>

<style scoped></style>
