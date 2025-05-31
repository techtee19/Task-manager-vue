<template>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-card class="pa-4">
        <div class="d-flex align-center">
          <v-icon color="primary" size="32" class="mr-4">mdi-format-list-checks</v-icon>
          <div>
            <p class="text-subtitle-2 text-grey-darken-1 mb-1">Total Tasks</p>
            <h2 class="text-h4 font-weight-bold">{{ stats.totalTasks }}</h2>
          </div>
        </div>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" lg="3">
      <v-card class="pa-4">
        <div class="d-flex align-center">
          <v-icon color="success" size="32" class="mr-4">mdi-check-circle</v-icon>
          <div>
            <p class="text-subtitle-2 text-grey-darken-1 mb-1">Completed</p>
            <h2 class="text-h4 font-weight-bold">{{ stats.completedTasks }}</h2>
          </div>
        </div>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" lg="3">
      <v-card class="pa-4">
        <div class="d-flex align-center">
          <v-icon color="warning" size="32" class="mr-4">mdi-clock-outline</v-icon>
          <div>
            <p class="text-subtitle-2 text-grey-darken-1 mb-1">Pending</p>
            <h2 class="text-h4 font-weight-bold">{{ stats.pendingTasks }}</h2>
          </div>
        </div>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" lg="3">
      <v-card class="pa-4">
        <div class="d-flex align-center">
          <v-icon color="info" size="32" class="mr-4">mdi-chart-line</v-icon>
          <div>
            <p class="text-subtitle-2 text-grey-darken-1 mb-1">Completion Rate</p>
            <h2 class="text-h4 font-weight-bold">{{ stats.completionRate }}%</h2>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'StatsCards',
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
}
</script>
