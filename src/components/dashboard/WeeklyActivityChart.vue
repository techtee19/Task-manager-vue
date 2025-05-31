<template>
  <v-card>
    <v-card-title class="d-flex align-center">
      <v-icon color="primary" class="mr-2">mdi-chart-bar</v-icon>
      Weekly Activity
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
  name: 'WeeklyActivityChart',
  props: {
    weeklyData: {
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
        type: 'bar',
        data: {
          labels: props.weeklyData.map((item) => item.day),
          datasets: [
            {
              label: 'Tasks Completed',
              data: props.weeklyData.map((item) => item.completed),
              backgroundColor: '#4CAF50',
            },
            {
              label: 'Tasks Created',
              data: props.weeklyData.map((item) => item.created),
              backgroundColor: '#2196F3',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      })
    }

    onMounted(() => {
      createChart()
    })

    watch(
      () => props.weeklyData,
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
