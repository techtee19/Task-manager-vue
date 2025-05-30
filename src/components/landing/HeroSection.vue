<template>
  <v-container fluid class="hero-section">
    <v-row justify="center" class="py-16">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <h1 class="display-1 font-weight-bold mb-6 text-grey-darken-4">
          Organize Your Tasks,
          <span class="text-primary">Amplify Your Productivity</span>
        </h1>

        <p class="text-h6 text-grey-darken-1 mb-8 mx-auto" style="max-width: 600px">
          TaskFlow helps you manage your tasks efficiently with powerful categorization, insightful
          analytics, and a beautiful interface that makes productivity enjoyable.
        </p>

        <div class="d-flex flex-column flex-sm-row justify-center gap-4">
          <v-btn color="primary" size="large" @click="$router.push('/login')" class="px-8 py-3">
            Start Managing Tasks
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>

          <v-btn variant="outlined" size="large" class="px-8 py-3"> Watch Demo </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #ebf8ff 0%, #ffffff 50%, #f3e8ff 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
}
</style>
