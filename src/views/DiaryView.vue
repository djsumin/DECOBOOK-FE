<template>
  <div class="diary-container">
    다이어리 뷰

    <h4>날씨정보</h4>
    <div>기온 : {{ weatherStore.getTemperature }} 도</div>
    <div>하늘 상태 : {{ weatherStore.getWeather }} </div>
    <div>강수 형태 : {{ weatherStore.getPty }} </div>
    <div>강수 확률 : {{ weatherStore.getPop }}% </div>

    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import {ref, onMounted, computed,} from "vue";
import {useWeatherStore} from "@/stores/weather";

const weatherStore = useWeatherStore(); 

onMounted(()=>{
  weatherStore.getToday();
  weatherStore.getAPIData();
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
