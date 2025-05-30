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
    <AppFooter />
  </div>
</template>

<script>
import FeatureSection from '@/components/landing/FeatureSection.vue'
import HeroSection from '@/components/landing/HeroSection.vue'
import AppFooter from '../components/layout/AppFooter.vue'7
import CTASection from '@/components/landing/CTASection.vue'
import Heading from '@/components/layout/Heading.vue'

export default {
  name: 'LandingPage',
  components: {
    Heading,
    AppFooter,
    HeroSection,
    FeatureSection,
    CTASection,
  },
}
</script>
