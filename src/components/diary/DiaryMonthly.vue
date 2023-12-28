<template>
  <div>
    <RouterLink :to="{name: 'diaryList'}">리스트 보기</RouterLink>
  </div>
  <RouterView/>
  <div class ="diary-container">
    <h2>다이어리 달력 뷰</h2>
    <FullCalendar class="calendar" />
  </div>
</template>

<script setup>
import FullCalendar from '@/components/diary/Fullcalendar.vue'
import { RouterView } from 'vue-router';


</script>

<style scoped>
.calendar {
  margin-top: 100px;
  font-size: 14px;
  width: 700px;
}

.diary-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
