<template>
  <div id="about" class="testimonials-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h2 font-weight-bold mb-4">Loved by productive people</h2>
          <p class="text-h6 text-grey-darken-1">
            See what our users have to say about how TaskFlow has transformed their workflow.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-card elevation="0" class="testimonial-card pa-6 h-100 rounded-lg">
            <div class="d-flex mb-4">
              <v-rating
                :model-value="5"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>
            </div>
            <p class="text-body-1 mb-6">
              "TaskFlow has completely transformed how I manage my daily workload. The intuitive
              interface and powerful analytics give me clear insights into my productivity
              patterns."
            </p>
            <div class="d-flex align-center">
              <v-avatar color="primary" class="mr-3">
                <span class="text-h6 text-white">SM</span>
              </v-avatar>
              <div>
                <div class="font-weight-medium">Sarah Miller</div>
                <div class="text-caption text-grey">Product Manager</div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="0" class="testimonial-card pa-6 h-100 rounded-lg">
            <div class="d-flex mb-4">
              <v-rating
                :model-value="5"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>
            </div>
            <p class="text-body-1 mb-6">
              "As a freelancer juggling multiple projects, ZenTask helps me stay organized and never
              miss a deadline. The categorization system is exactly what I needed to separate
              personal and work tasks."
            </p>
            <div class="d-flex align-center">
              <v-avatar color="success" class="mr-3">
                <span class="text-h6 text-white">JR</span>
              </v-avatar>
              <div>
                <div class="font-weight-medium">James Rodriguez</div>
                <div class="text-caption text-grey">Freelance Designer</div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="0" class="testimonial-card pa-6 h-100 rounded-lg">
            <div class="d-flex mb-4">
              <v-rating
                :model-value="5"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>
            </div>
            <p class="text-body-1 mb-6">
              "Our team's productivity has increased significantly since we started using ZenTask.
              The collaboration features make it easy to assign tasks and track progress across
              departments."
            </p>
            <div class="d-flex align-center">
              <v-avatar color="info" class="mr-3">
                <span class="text-h6 text-white">LP</span>
              </v-avatar>
              <div>
                <div class="font-weight-medium">Lisa Park</div>
                <div class="text-caption text-grey">Team Lead, Tech Co.</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TestimonialSection',
}
</script>

<style scoped>
.testimonials-section {
  background-color: #fff;
}

.testimonial-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .text-h2 {
    font-size: 2rem !important;
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

  .pa-6 {
    padding: 1rem !important;
  }

  .mb-6 {
    margin-bottom: 1rem !important;
  }

  .mb-4 {
    margin-bottom: 0.5rem !important;
  }

  .testimonial-card {
    margin-bottom: 1rem;
  }
}

/* Tablet adjustments */
@media (min-width: 601px) and (max-width: 960px) {
  .text-h2 {
    font-size: 2.5rem !important;
  }

  .py-16 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .mb-12 {
    margin-bottom: 2rem !important;
  }

  .testimonial-card {
    margin-bottom: 1.5rem;
  }
}
</style>
