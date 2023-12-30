<template>
  <div class="ledger-container">
    <h1>가계부 뷰</h1>
    <div class="charts-container">
      <div class="chart-item">
        <h2>달력</h2>
        <RouterLink :to="{ name: 'ledgerMonthlyList' }">달력 보기</RouterLink>
      </div>
      <div class="chart-item">
        <h2>막대그래프</h2>
        <button @click="goList()">자세히보기</button>
        <canvas ref="MyChart"></canvas>
      </div>
      <div class="chart-item">
        <h2>원형그래프</h2>
        <button @click="goCategory()">자세히보기</button>
      </div>
    </div>
    <button @click="createLedger()">수입/지출 등록하기</button>
    <!-- <canvas id="myChart" width="400" height="400"></canvas> -->
    <RouterView />
  </div>
</template>

<script >
import router from "@/router";
import { RouterView } from "vue-router";
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

export default {
  data:() => ({
    type: 'bar',
    data: {
      labels: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
      datasets: [{
        label: '# of Votes',
        data: [ 12, 19, 3, 5, 2, 3 ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }),
  mounted(){
    this.createChart()
  },
  methods:{
    createChart(){
      new Chart(this.$refs.MyChart, {
        type:'bar',
        data:this.data,
        options:this.options
      })

    }
  }

}

const goList = function () {
  router.push({ name: "ledgerList" });
};

const goCategory = function () {
  router.push({ name: "ledgerCategoryList" });
};

const createLedger = function () {
  router.push({ name: "registLedger" });
};
</script>

<style scoped>
.ledger-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.charts-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}

.chart-item {
  flex: 1;
  margin: 0 10px;
}
</style>
