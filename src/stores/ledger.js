import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

const REST_LEDGER_API = `http://localhost:8080/api/ledger`;

export const useLedgerStore = defineStore(
  "ledger",
  () => {
    //등록
    const registLedger = function (Ledger) {
      axios({
        url: REST_LEDGER_API,
        method: "POST",
        params: Ledger,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    //전체 조회
    const ledgerList = ref([]);
    const selectLedgerAll = function () {
      axios({
        url: `${REST_LEDGER_API}/`,
        method: "GET",
      }).then((res) => {
        ledgerList.value = res.data;
        console.log(ledgerList.value);
      });
    };

    //하나 조회
    const ledgerOne = ref({});
    const selectLedgerOne = function (LedgerId) {
      axios({
        url: `${REST_LEDGER_API}/${LedgerId}`,
        method: "GET",
      }).then((res) => {
        ledgerOne.value = res.data;
      });
    };

    //수정
    const updateLedger = function (Ledger) {
      axios
        .put(REST_LEDGER_API, Ledger)
        .then(() => router.push(`/legder`))
        .catch((err) => console.log(err));
    };

    //삭제
    const deleteLedger = function (LedgerId) {
      axios({
        url: REST_LEDGER_API,
        method: "DELETE",
        params: { LedgerId: LedgerId },
      })
        .then(() => router.push({ name: "ledgerList" }))
        .catch((err) => console.log(err));
    };

    //현재 달 총 수입
    const selectLedgerIncome = function (category) {
      axios({
        url: REST_LEDGER_API,
        method: "GET",
        params: { category: category },
      })
        .then(() => router.push("/ledger"))
        .catch((err) => console.log(err));
    };

    //현재 달 총 지출
    const selectLedgerExpenditure = function (category) {
      axios({
        url: REST_LEDGER_API,
        method: "GET",
        params: { category: category },
      })
        .then(() => router.push("/ledger"))
        .catch((err) => console.log(err));
    };

    //월별 가계부
    const selectLedgerByMonth = function (budgetDate) {
      axios({
        url: REST_LEDGER_API,
        method: "GET",
        params: { budgetDate: budgetDate },
      })
        .then(() => router.push("/ledger"))
        .catch((err) => console.log(err));
    };

    //일별 가계부
    const selectLedgerByDay = function (budgetDate) {
      axios({
        url: REST_LEDGER_API,
        method: "GET",
        params: { budgetDate: budgetDate },
      })
        .then(() => router.push("/ledger"))
        .catch((err) => console.log(err));
    };

    return {
      ledgerList,
      ledgerOne,
      registLedger,
      selectLedgerAll,
      selectLedgerOne,
      updateLedger,
      deleteLedger,
      selectLedgerIncome,
      selectLedgerExpenditure,
    };
  },
  { persist: true }
);
