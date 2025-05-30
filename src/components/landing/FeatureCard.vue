<template>
  <v-card elevation="4" class="h-100 feature-card" hover>
    <v-card-text class="pa-6">
      <v-icon :color="feature.color" size="48" class="mb-4">
        {{ feature.icon }}
      </v-icon>

      <h3 class="text-h6 font-weight-bold mb-3 text-grey-darken-4">
        {{ feature.title }}
      </h3>

      <p class="text-body-1 text-grey-darken-1 mb-0">
        {{ feature.description }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}
</style>
