<template>
  <div>
    <h2>항목 별 자세히보기</h2>
    <div class="center-container">
      <div>
        <div>날짜 : {{ weatherStore.todayStr }}</div>
        <div>
          <span>수입 / 지출</span>
          <input type="radio" v-model="income" name="inandout" />수입
          <input type="radio" v-model="expense" name="inandout" />지출
        </div>
        <div>
          <span>분류 : {{}}</span>
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
      <div class="btn-group">
        <button @click="goList()">목록</button>
        <button @click="onUpdate()">수정</button>
        <button @click="goDelete()">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { useWeatherStore } from "@/stores/weather";
import { useLedgerStore } from "@/stores/ledger";

const weatherStore = useWeatherStore();
const store = useLedgerStore();

const goList = function () {
  router.push({ name: "ledgerList" });
};

const onUpdate = function () {
  store.updateLedger();
  router.push({ name: "ledgerUpdate" });
};

const goDelete = function () {
  store.deleteLedger();
  // router.push({ name: "ledgerList" });
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.center-container {
  display: flex;
  justify-content: center;
}
</style>
