<template>
  <div class="ledger-container">
    가계부 뷰
    <canvas id="myChart" width="400" height="400"></canvas>
    <RouterView/>
  </div>
</template>

<script >
import { RouterView } from 'vue-router';
import Chart from 'chart.js/auto';
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {},
  };
  
  onMounted(() => {
      
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
  }),
</script>

<style scoped>
.ledger-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
