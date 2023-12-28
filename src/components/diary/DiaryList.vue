<template>
  <div>
    <RouterLink :to="{ name: 'diaryMonthly' }">달력 보기</RouterLink>
  </div>

  <div>다이어리 리스트 뷰</div>
  <!-- 페이징 적용 -->
  <div v-for="(diary, index) in diaryStore.getPaginatedDiarylist" :key="diary.dairy_id">
    <!-- 제목과 내용 -->
    <span>{{ diary.diary_date }}</span> |
    <span>{{ diary.diary_content }}</span> |
    <span ref="" @click="moveToDetal(diaryStore.getPaginatedDiarylist[index].diary_id)">상세보기</span>
  </div>
  <RouterView />
  <!-- vuetify pagination-->
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="5">
          <v-container class="max-width">
            <v-pagination v-model="diaryStore.getCurrentPage" class="my-4" :length="getTotalPage"
              rounded="circle"></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useDiaryStore } from '@/stores/diary'
import router from "@/router";
const diaryStore = useDiaryStore();
const moveToDetal = function (diary_id) {
  console.log(diary_id)
  router.push({
    name: 'diaryDetail',
    params: { id: diary_id }
  });
}
onMounted(() => {
  diaryStore.getDiaryList();
});
</script>

<style scoped>
.diary-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
