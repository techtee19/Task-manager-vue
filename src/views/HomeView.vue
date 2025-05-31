<template>
  <div>
    <!-- Header -->
    <Heading />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeatureSection />

    <!-- CTA Section -->
    <CTASection />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import FeatureSection from '@/components/landing/FeatureSection.vue'
import HeroSection from '@/components/landing/HeroSection.vue'
import CTASection from '@/components/landing/CTASection.vue'
import Heading from '@/components/layout/Heading.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'LandingPage',
  components: {
    Heading,
    Footer,
    HeroSection,
    FeatureSection,
    CTASection,
  },
  computed: {
    ...mapState(useAuthStore, ['isAuthenticated']),
  },
  mounted() {
    // Check if user is already authenticated
    const authStore = useAuthStore()
    authStore.checkAuth()

    // If user is already authenticated, redirect to dashboard
    if (this.isAuthenticated) {
      this.$router.push('/dashboard')
    }
  },
}
</script>
