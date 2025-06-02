<template>
  <div class="cta-section py-16 bg-primary">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h2 font-weight-bold mb-4 text-white">
            Ready to boost your productivity?
          </h2>
          <p class="text-h6 text-white mb-12">
            Join thousands of users who have transformed their task management with TaskFlow.
          </p>
          <v-btn color="white" size="large" class="text-none primary--text" to="/login?mode=signup">
            Get Started for Free
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FinalCTASection',
}
</script>

<style scoped></style>
