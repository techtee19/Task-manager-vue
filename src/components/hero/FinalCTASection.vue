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

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .text-h2 {
    font-size: 1.75rem !important;
  }
  
  .text-h6 {
    font-size: 1rem !important;
  }
  
  .py-16 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
  
  .mb-12 {
    margin-bottom: 1.5rem !important;
  }
  
  .mb-4 {
    margin-bottom: 0.5rem !important;
  }
}

/* Tablet adjustments */
@media (min-width: 601px) and (max-width: 960px) {
  .text-h2 {
    font-size: 2.25rem !important;
  }
  
  .py-16 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  
  .mb-12 {
    margin-bottom: 2rem !important;
  }
}
</style>
