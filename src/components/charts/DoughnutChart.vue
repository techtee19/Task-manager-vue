<!-- filepath: c:\Users\LENOVO\Desktop\Task Manager\src\components\charts\DoughnutChart.vue -->
<template>
  <div class="chart-container">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    chartOptions() {
      const isMobile = window.innerWidth < 600

      return {
        responsive: true,
        maintainAspectRatio: false,
        cutout: isMobile ? '60%' : '70%',
        plugins: {
          legend: {
            position: isMobile ? 'bottom' : 'right',
            labels: {
              boxWidth: isMobile ? 10 : 12,
              padding: isMobile ? 10 : 15,
              font: {
                size: isMobile ? 10 : 12,
              },
            },
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: isMobile ? 6 : 10,
            bodyFont: {
              size: isMobile ? 10 : 12,
            },
            titleFont: {
              size: isMobile ? 12 : 14,
            },
            caretSize: 6,
            cornerRadius: 4,
          },
        },
        animation: {
          animateScale: true,
        },
      }
    },
  },
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
