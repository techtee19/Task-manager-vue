<template>
  <div>
    <!-- Navigation Menu for Unauthenticated Users -->
    <NavBar v-if="!isAuthenticated" />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeatureComponent />

    <!-- Testimonials Section -->
    <TestimonialSection />

    <!-- Pricing Section -->
    <PricingSection />

    <!-- FAQ Section -->
    <FaqSection />

    <!-- Final CTA Section -->
    <FinalCTASection />

    <!-- Footer -->
    <footer-section />
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

  computed: {
    ...mapState(useAuthStore, ['isAuthenticated']),
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
