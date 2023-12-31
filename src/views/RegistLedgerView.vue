<template>
  <div>
    <h1>가계부 작성 뷰</h1>
    <div class="center-container">
      <div class="container">
        <div>날짜 : {{ weatherStore.todayStr }}</div>
        <div>
          <span>수입 / 지출</span>
          <input type="radio" v-model="income" name="inandout" />수입
          <input type="radio" v-model="expense" name="inandout" />지출
        </div>
        <div class="dropdown">
          <span>분류</span>
          <button class="dropbtn">
            <span>{{ selectedCategory || "분류 더보기" }}</span>
          </button>
          <div class="dropdown-content">
            <a href="#" @click="selectCategory('식비')">식비</a>
            <a href="#" @click="selectCategory('카페/간식')">카페/간식</a>
            <a href="#" @click="selectCategory('생활')">생활</a>
            <a href="#" @click="selectCategory('온라인 쇼핑')">온라인 쇼핑</a>
            <a href="#" @click="selectCategory('기타')">기타</a>
          </div>
        </div>
        <div>
          <span>금액</span>
          <input placeholder="숫자만 입력가능" type="number" v-model="cost" />원
        </div>
        <div>
          <span>메모</span>
          <input type="text" placeholder="내용을 입력해주세요" v-model="memo" />
        </div>
        <button @click="onRegist()">등록하기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";
import { useLedgerStore } from "@/stores/ledger";
import { useWeatherStore } from "@/stores/weather";

const store = useLedgerStore();

const weatherStore = useWeatherStore();

const income = ref("");
const expense = ref("");
const cost = ref("");
const memo = ref("");
const selectedCategory = ref("");

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const onRegist = function () {
  const ledgerData = {
    income: income.value,
    expense: expense.value,
    cost: cost.value,
    memo: memo.value,
    selectedCategory: selectedCategory.value,
  };
  console.log("ledger-data", ledgerData);
  store.registLedger(ledgerData);
  router.push({ name: "ledgerDetail" });
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.center-container {
  display: flex;
  justify-content: center;
  height: 100vh;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  border: 1px solid rgb(37, 37, 37);
  border-radius: 4px;
  background-color: #f5f5f5;
  font-weight: 400;
  color: rgb(37, 37, 37);
  padding: 3px;
  text-align: left;
  cursor: pointer;
}
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width: 200px;
}

.dropdown-content a {
  display: block;
  text-decoration: none;
  color: rgb(37, 37, 37);
  padding: 12px 20px;
}

.dropdown-content a:hover {
  background-color: #ececec;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
