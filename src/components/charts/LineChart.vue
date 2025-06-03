<!-- filepath: c:\Users\LENOVO\Desktop\Task Manager\src\components\charts\LineChart.vue -->
<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'LineChart',
  components: { Line },
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
              maxTicksLimit: isMobile ? 5 : 8,
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
              maxTicksLimit: isMobile ? 6 : 12,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
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
          },
        },
        elements: {
          point: {
            radius: isMobile ? 2 : 3,
            hoverRadius: isMobile ? 3 : 5,
          },
          line: {
            tension: 0.3,
            borderWidth: isMobile ? 2 : 3,
          },
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
  height: 220px;
}
</style>
