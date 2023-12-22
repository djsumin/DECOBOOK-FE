import { ref, } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_LEDGER_API = `http://localhost:8080/api/ledger`

export const useLedgerStore = defineStore('ledger', () => {


  
  return{  }

},{persist : true})
