<template>
  <v-container fluid class="cta-section py-16">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="text-h3 font-weight-bold text-white mb-6">Ready to boost your productivity?</h2>

        <p class="text-h6 text-blue-lighten-2 mb-8">
          Join thousands of users who have transformed their task management with TaskFlow.
        </p>

        <v-btn
          color="white"
          size="large"
          @click="$router.push('/login')"
          class="px-8 py-3 text-primary"
        >
          Get Started for Free
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CTASection',
}
</script>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}
</style>
