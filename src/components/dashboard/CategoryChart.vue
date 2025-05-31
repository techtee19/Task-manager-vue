<template>
  <v-card>
    <v-card-title class="d-flex align-center">
      <v-icon color="primary" class="mr-2">mdi-chart-pie</v-icon>
      Task Categories
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
  name: 'CategoryChart',
  props: {
    categoryData: {
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
        type: 'doughnut',
        data: {
          labels: props.categoryData.map((item) => item.category),
          datasets: [
            {
              data: props.categoryData.map((item) => item.count),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
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
      () => props.categoryData,
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
