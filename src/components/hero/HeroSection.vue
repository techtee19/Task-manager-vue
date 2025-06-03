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
            ZenTask helps you manage your tasks efficiently with powerful categorization, insightful
            analytics, and a beautiful interface that makes productivity enjoyable.
          </p>

          <div class="d-flex justify-center flex-wrap">
            <v-btn
              color="black"
              size="large"
              class="text-none mr-4 mb-2"
              to="/login"
              append-icon="mdi-arrow-right"
            >
              Start Managing Tasks
            </v-btn>
            <v-btn
              variant="outlined"
              color="grey-darken-3"
              size="large"
              class="text-none mb-2"
              to="/login?mode=signup"
            >
              Sign Up
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(180deg, #eef2ff 0%, #e0f2fe 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.headline-gradient {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
  font-weight: 800;
  word-wrap: break-word;
}

.headline-dark {
  color: #1e293b;
}

.headline-blue {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.headline-purple {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subheadline {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #475569;
}

/* Mobile-specific styles */
@media (max-width: 600px) {
  .hero-section {
    min-height: 60vh;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  
  .mb-12 {
    margin-bottom: 1.5rem !important;
  }
  
  .py-16 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
  
  .v-btn {
    margin-bottom: 0.5rem !important;
  }
}
</style>
