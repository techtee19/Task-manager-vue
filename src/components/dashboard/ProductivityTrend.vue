<template>
  <v-card>
    <v-card-title class="d-flex align-center">
      <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
      Productivity Trend
    </v-card-title>
    <v-card-text>
      <div ref="chartContainer" style="height: 300px"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

export default {
  name: 'ProductivityTrend',
  props: {
    trendData: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const chartContainer = ref(null)
    let chart = null

    const createChart = () => {
      if (chart) {
        chart.destroy()
      }

      const ctx = chartContainer.value.getContext('2d')
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: props.trendData.map((item) => item.date),
          datasets: [
            {
              label: 'Productivity Score',
              data: props.trendData.map((item) => item.score),
              borderColor: '#4CAF50',
              backgroundColor: 'rgba(76, 175, 80, 0.1)',
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 20,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      })
    }

    onMounted(() => {
      createChart()
    })

    watch(
      () => props.trendData,
      () => {
        createChart()
      },
      { deep: true },
    )

    return {
      chartContainer,
    }
  },
}
</script>
