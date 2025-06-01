<template>
  <div class="hero-section">
    <v-container class="py-16">
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <h1 class="headline-gradient mb-4">
            <span class="headline-dark">Organize Your Tasks,</span>
            <span class="headline-blue">Amplify</span><br />
            <span class="headline-purple">Your Productivity</span>
          </h1>

          <p class="subheadline mb-12">
            TaskFlow helps you manage your tasks efficiently with powerful categorization,
            insightful analytics, and a beautiful interface that makes productivity enjoyable.
          </p>

          <div class="d-flex justify-center flex-wrap">
            <v-btn
              color="black"
              size="large"
              class="text-none px-8 py-6 mr-4 mb-2"
              to="/login"
              append-icon="mdi-arrow-right"
            >
              Start Managing Tasks
            </v-btn>
            <v-btn
              variant="outlined"
              color="grey-darken-3"
              size="large"
              class="text-none px-8 py-6 mb-2"
              @click="openVideoDialog"
            >
              Watch Demo
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped></style>
