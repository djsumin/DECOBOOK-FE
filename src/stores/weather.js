import {ref, onMounted, computed,} from "vue";
import { defineStore } from 'pinia'
import axios from 'axios'

const WEATHER_API = " http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"
// http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst
// http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst
export const useWeatherStore = defineStore('weather', () => {
  // =========== STATE ===============
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let X = 67;
  let Y = 100;
  let todayStr = `${year}${month}${day}`; 

  // 기상청 데이터 저장
  let temperature = ref(null);  // 기온
  let weather = ref(null);      // 하늘 상태
  let pty = ref(null);          // 강수 형태
  let pop = ref(0);             // 강수 확률
  
  // =========== GETTER ===============
  const getTemperature = computed(()=>{
    return temperature;
  })

  const getWeather = computed(()=>{
    return weather;
  })

  const getPty = computed(()=>{
    return pty;
  })

  const getPop = computed(()=>{
    return pop;
  })


  // =========== ACTION ===============

  // 기상청 데이터 요청 형식에 맞게 날짜 형태 변경
  // ex) 20230101
  const getToday = function () {
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth() + 1;
    day = today.getDate();
    X = 67;   // 위치 X 좌표
    Y = 100;  // 위치 Y 좌표

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    todayStr = `${year}${month}${day}`;
    console.log(todayStr);
  }

  const getAPIData = function() {
    axios.get(WEATHER_API, {
      params: {
        ServiceKey: import.meta.env.VITE_WEATHER_API_KEY,
        dataType: "JSON",
        base_date: todayStr, // 20231224
        base_time: "0200",
        numOfRows: 15,
        nx: X,
        ny: Y,
      },
    })
    .then((response) => {
      console.log(response);
      return response.data.response.body.items.item;
    })
    .then((response) => {
      response.forEach((item)=>{
        if(item.category === "TMP") {
          temperature.value = item.fcstValue;
        } else if(item.category === "SKY") {
            if(item.fcstValue == 1) {weather.value = "맑음"}
            if(item.fcstValue == 3) {weather.value = "구름많음"}
            if(item.fcstValue == 4) {weather.value = "흐림"}
        } else if(item.category === "PTY" ){
          pty.value = item.fcstValue;
        } else if(item.category === "POP" ){
          pop.value = item.fcstValue;
        }
      });
    })
    .catch(error => {
      console.error('기상청 API 호출 오류:', error);
    });
  }
  

  return {
    today,
    year,
    month,
    day,
    X,
    Y,
    todayStr,
    temperature,
    weather,
    pty,
    pop,
    getTemperature,
    getWeather,
    getPty,
    getPop,
    getToday,
    getAPIData,
  }

})
