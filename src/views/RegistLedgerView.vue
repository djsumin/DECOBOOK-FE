<template>
  <div>
    <h1>가계부 작성 뷰</h1>
    <div>
      <div>날짜 : {{ weatherStore.todayStr }}</div>
      <div>
        <span>수입 / 지출</span>
        <input type="radio" v-model="income" name="inandout" />수입
        <input type="radio" v-model="expense" name="inandout" />지출
      </div>
      <div class="dropdown">
        <span>분류</span>
        <button class="dropbtn">
          <span class="dropbtn_icon">more_horiz</span>
          View More
        </button>
        <div class="dropdown-content">
          <a href="#">profile</a>
          <a href="#">write a post</a>
          <a href="#">settings</a>
        </div>
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
    <button @click="onRegist">등록하기</button>
  </div>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weather";

const weatherStore = useWeatherStore();
</script>

<style scoped>
h1 {
  text-align: center;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn_icon {
  font-family: "Material Icons";
}
.dropbtn {
  border: 1px solid rgb(37, 37, 37);
  border-radius: 4px;
  background-color: #f5f5f5;
  font-weight: 400;
  color: rgb(37, 37, 37);
  padding: 12px;
  width: 200px;
  text-align: left;
  cursor: pointer;
  font-size: 12px;
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
  font-size: 12px;
  padding: 12px 20px;
}

.dropdown-content a:hover {
  background-color: #ececec;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
