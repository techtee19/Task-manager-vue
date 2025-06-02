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
          <v-btn
            color="white"
            size="large"
            class="text-none primary--text px-8 py-6"
            to="/register"
          >
            Get Started for Free
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="showVideoDialog" max-width="800">
      <v-card>
        <v-card-title class="text-h5 font-weight-bold">
          TaskFlow Demo
          <v-spacer></v-spacer>
          <v-btn icon @click="showVideoDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-0">
          <div class="video-container">
            <!-- Replace with your actual video embed -->
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="TaskFlow Demo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'FinalCTASection',
}
</script>

<style scoped></style>
