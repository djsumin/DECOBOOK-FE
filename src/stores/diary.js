import { ref, } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_DIARY_API = `http://localhost:8080/api/diary`

export const useDiaryStore = defineStore('diary', () => {


  
  return{  }

},{persist : true})
