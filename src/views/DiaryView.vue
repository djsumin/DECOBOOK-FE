<template>
  <div class="diary-container">
    <h1>최근 일기</h1>
    <div>
      
      <br>
      <h2>작성 날짜 : {{ diaryStore.getRecentDairy.diary_date }}</h2>
      <h2>제목 : {{ diaryStore.getRecentDairy.title }}</h2>
      <h2>내용 : {{ diaryStore.getRecentDairy.diary_content }}</h2>
      <h2>날씨 : {{ diaryStore.getRecentDairy.weather }}</h2>
      <h2>기분 : {{ diaryStore.getRecentDairy.feeling }}</h2>
      <h2>별점 : {{ diaryStore.getRecentDairy.star_score }}</h2>
      <h2>위도 : {{ diaryStore.getRecentDairy.latitude }}</h2>
      <h2>경도 : {{ diaryStore.getRecentDairy.longitude }}</h2>
    </div>
    <RouterLink :to="{name: 'diaryList'}"> 전체 목록</RouterLink>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import {ref, onMounted, computed,} from "vue";
import {useDiaryStore} from "@/stores/diary";

const diaryStore = useDiaryStore(); 

onMounted(()=>{
  diaryStore.getAxiosRecent();
})

</script>

<style scoped>
.diary-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
