<template>
  <div>
    <h1>날짜별 가계부</h1>
    <div>날짜 : {{ weatherStore.todayStr }}</div>

    <table>
      <tr>
        <th>번호</th>
        <th>거래내용</th>
        <th>수입 / 지출</th>
        <th>분류</th>
        <th>거래금액</th>
        <th>거래 이전</th>
        <th>거래 이후</th>
      </tr>
      <tr v-for="ledgerOne in store.getterList" :key="ledgerOne.id">
        <td>{{ ledgerOne.id }}</td>
        <td>{{ ledgerOne.memo }}</td>
        <td>{{ ledgerOne.isIncome }}</td>
        <td>{{ ledgerOne.selectedCategory }}</td>
        <td>{{ ledgerOne.cost }} 원</td>
        <td>{{ ledgerOne.amount }} 원</td>
        <td>{{ ledgerOne.after_amount }} 원</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weather";
import { useLedgerStore } from "@/stores/ledger";
// import { onMounted } from "vue";

const store = useLedgerStore();

const weatherStore = useWeatherStore();
</script>

<style scoped></style>
