<template>
  <div>
    <h2>항목 별 자세히보기</h2>
    <div>
      <div>날짜 : {{ weatherStore.todayStr }}</div>
      <div>
        <span>수입 / 지출</span>
        <input type="radio" v-model="income" name="inandout" />수입
        <input type="radio" v-model="expense" name="inandout" />지출
      </div>
      <div>
        <span>분류</span>
      </div>
      <div>
        <span>금액</span>
        <input placeholder="숫자만 입력가능" />원
      </div>
      <div>
        <span>메모</span>
        <input type="text" placeholder="내용을 입력해주세요" />
      </div>
    </div>
    <button>목록</button>
    <button @click="onUpdate()">수정</button>
    <button>삭제</button>
  </div>
</template>

<script setup>
import router from "@/router";
import { useWeatherStore } from "@/stores/weather";

const weatherStore = useWeatherStore();

const onUpdate = function () {
  router.push({ name: "ledgerUpdate" });
};
</script>

<style scoped></style>
