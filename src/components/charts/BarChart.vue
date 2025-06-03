<!-- filepath: c:\Users\LENOVO\Desktop\Task Manager\src\components\charts\BarChart.vue -->
<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },  computed: {
    chartOptions() {
      const isMobile = window.innerWidth < 600;
      
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: 'rgba(0, 0, 0, 0.05)',
            },
            ticks: {
              font: {
                size: isMobile ? 8 : 10,
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: isMobile ? 8 : 10,
              },
              maxRotation: isMobile ? 45 : 0,
              minRotation: isMobile ? 45 : 0,
            },
          },
        },
        plugins: {
          legend: {
            display: !isMobile,
            position: 'top',
            align: 'end',
            labels: {
              boxWidth: 12,
              padding: 15,
              font: {
                size: 11,
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
        barPercentage: isMobile ? 0.8 : 0.6,
        categoryPercentage: isMobile ? 0.9 : 0.8,
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
