<template>
  <div class="registDiary-container">
    <h2>오늘의 기록 남기기</h2>
    <div>날짜 : {{ weatherStore.todayStr }}</div>
    <div>
      제목 :
      <input id="content" type="text" v-model="title" />
    </div>
    <div>
      <input type="radio" v-model="feelingValues" name="feeling" value="5" />😁
      <input type="radio" v-model="feelingValues" name="feeling" value="4" />😊
      <input type="radio" v-model="feelingValues" name="feeling" value="3" />😐
      <input type="radio" v-model="feelingValues" name="feeling" value="2" />☹️
      <input type="radio" v-model="feelingValues" name="feeling" value="1" />😩
    </div>
    <div><input type="checkbox" v-model="isImgVisible" />사진 추가하기</div>
    <!--파일업로드부분추가-->
    <div><input type="checkbox" v-model="isStarVisible" />별점 추가하기</div>
    <div class="star-rating space-x-4 mx-auto" v-if="isStarVisible">
      <input
        type="radio"
        id="5-stars"
        name="rating"
        value="5"
        v-model="ratings"
      />
      <label for="5-stars" class="star pr-4">★</label>
      <input
        type="radio"
        id="4-stars"
        name="rating"
        value="4"
        v-model="ratings"
      />
      <label for="4-stars" class="star">★</label>
      <input
        type="radio"
        id="3-stars"
        name="rating"
        value="3"
        v-model="ratings"
      />
      <label for="3-stars" class="star">★</label>
      <input
        type="radio"
        id="2-stars"
        name="rating"
        value="2"
        v-model="ratings"
      />
      <label for="2-stars" class="star">★</label>
      <input
        type="radio"
        id="1-star"
        name="rating"
        value="1"
        v-model="ratings"
      />
      <label for="1-star" class="star">★</label>
    </div>
    <div><input type="checkbox" v-model="isMapVisible" />위치 추가하기</div>
    <KakaoMap v-if="isMapVisible" />

    <br />
    <hr />
    <br />
    <div><textarea v-model="content" class="diaryContent"></textarea></div>
    <button @click="onRegist">등록하기</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWeatherStore } from "@/stores/weather";
import KakaoMap from "@/components/diary/KakaoMap.vue";
import http from "@/util/http-commons.js";

const weatherStore = useWeatherStore();

//체크박스 상태에 따라 보여짐
const isImgVisible = ref(false);
const isStarVisible = ref(false);
const isMapVisible = ref(false);

//글 등록

const feelingValues = ref();
const ratings = ref();

const diary_date = ref();
const title = ref();
const content = ref();
const orgImg = ref();
const weather = ref();
const star_score = ref();
const user_id = ref();
const latitude = ref();
const longitude = ref();

const onRegist = () => {
  console.log("hi");
  http
    .post("diary", {
      diary_date: weatherStore.todayStr.value,
      title: title.value,
      diary_content: content.value,
      orgImg: isImgVisible.value,
      weather: weatherStore.getWeather.value,
      feeling: ratings.value,
      // user_id:
      // latitude: weatherStore.
      // longitude: weatherStore.
    })
    .then((res) => {
      console.log(res);
    });
};
</script>

<style scoped>
.registDiary-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.registDiary-container hr {
  width: 80%;
}
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  font-size: 27px;
  line-height: 30px;
  justify-content: space-around;
  padding: 5px;
  text-align: center;
  width: 5em;
}

.star-rating input {
  display: none;
}

.star-rating label {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2.3px;
  -webkit-text-stroke-color: #2b2a29;
  cursor: pointer;
}

.star-rating :checked ~ label {
  -webkit-text-fill-color: gold;
}

.star-rating label:hover,
.star-rating label:hover ~ label {
  -webkit-text-fill-color: #fff58c;
}
.diaryContent {
  width: 250px;
  height: 200px;
}
</style>
