<template>
  <div>
    <!-- Navigation Menu for Unauthenticated Users -->
    <NavBar v-if="!isAuthenticated" />

    <!-- Hero Section -->
    <hero-section />

    <!-- Features Section -->
    <feature-component />

    <!-- Testimonials Section -->
    <testimonial-section />

    <!-- Pricing Section -->
    <pricing-section />

    <!-- FAQ Section -->
    <faq-section />

    <!-- Final CTA Section -->
    <final-cta-section />

    <!-- Footer -->
    <footer-section />

    <!-- Video Dialog -->
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
import { mapState } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import NavBar from '@/components/hero/NavBar.vue'
import HeroSection from '@/components/hero/HeroSection.vue'
import FeatureComponent from '@/components/hero/FeatureComponent.vue'
import TestimonialSection from '@/components/hero/TestimonialSection.vue'
import PricingSection from '@/components/hero/PricingSection.vue'
import FaqSection from '@/components/hero/FaqSection.vue'
import FinalCTASection from '@/components/hero/FinalCTASection.vue'
import FooterSection from '@/components/hero/FooterSection.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HeroSection,
    FeatureComponent,
    TestimonialSection,
    PricingSection,
    FaqSection,
    FinalCTASection,
    FooterSection,
  },
  data() {
    HeroSection
    return {
      showVideoDialog: false,
    }
  },
  computed: {
    ...mapState(useAuthStore, ['isAuthenticated']),
  },
  methods: {
    openVideoDialog() {
      this.showVideoDialog = true
    },
  },
  mounted() {
    // If user is already authenticated, redirect to dashboard
    if (this.isAuthenticated) {
      this.$router.push('/dashboard')
    }
  },
}
</script>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

/* For responsive design */
@media (max-width: 600px) {
  .hero-section {
    min-height: 70vh;
    padding-top: 80px;
  }

  .headline-gradient {
    font-size: 2rem;
  }

  .subheadline {
    font-size: 1rem;
  }

  .pricing-card--popular {
    transform: none;
  }
}
</style>
