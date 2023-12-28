import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_DIARY_API = `http://localhost:8080/api/diary`

export const useDiaryStore = defineStore('diary', () => {
  // =========== STATE ===============
  const recentDiary = ref({});

  const diaryList = ref([]);
  const pagesize = ref(5);
  const currentPage = ref(1);

  // =========== GETTER ===============
  const getRecentDairy = computed(() => {
    return recentDiary.value;
  })

  const getCurrentPage = computed(() => {
    return currentPage.value;
  })

  const getTotalPage = computed(() => {
    return Math.ceil(diaryList.value.length / pagesize.value);
  })

  const getList = computed(()=>{
    return diaryList;
  })

  const getPaginatedDiarylist = computed(() => {
    const startIndex = (currentPage.value - 1) * pagesize.value;
    const endIndex = startIndex + pagesize.value;
    return diaryList.value.slice(startIndex, endIndex);
})
  // =========== ACTION ===============
  const getAxiosRecent = function () {
    axios.get(`${REST_DIARY_API}/recent`)
      .then((response) => {
        recentDiary.value = response.data;
      })
  }

  const getDiaryList = async function () {
    await axios.get(`${REST_DIARY_API}/`)
      .then((response) => {
        diaryList.value = response.data;
      })
  }

  const goToPage = function (page) {
    if (page >= 1 && page <= getTotalPage.value) {
        currentPage.value = page;
    }
}

  return {
    recentDiary,
    getRecentDairy,
    getAxiosRecent,
    diaryList,
    getCurrentPage,
    getTotalPage,
    getPaginatedDiarylist,
    getDiaryList,
    goToPage,
    getList,
  }

}, { persist: true })
