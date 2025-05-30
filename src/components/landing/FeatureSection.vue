<template>
  <v-container fluid class="py-16" id="features">
    <v-row justify="center" class="mb-12">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="text-h3 font-weight-bold mb-4 text-grey-darken-4">
          Everything you need to stay organized
        </h2>
        <p class="text-h6 text-grey-darken-1">
          Powerful features designed to help you manage tasks efficiently and boost your
          productivity.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="feature in features" :key="feature.title" cols="12" md="6" lg="4" class="mb-4">
        <FeatureCard :feature="feature" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeatureCard from './FeatureCard.vue'

export default {
  name: 'FeaturesSection',
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          icon: 'mdi-check-circle',
          title: 'Smart Task Management',
          description:
            'Create, organize, and track tasks with categories, due dates, and priority levels.',
          color: 'primary',
        },
        {
          icon: 'mdi-chart-bar',
          title: 'Analytics Dashboard',
          description:
            'Visualize your productivity with beautiful charts and insightful statistics.',
          color: 'success',
        },
        {
          icon: 'mdi-calendar',
          title: 'Due Date Tracking',
          description: 'Never miss a deadline with smart reminders and calendar integration.',
          color: 'purple',
        },
        {
          icon: 'mdi-account-group',
          title: 'Team Collaboration',
          description: 'Share tasks and collaborate with your team members seamlessly.',
          color: 'orange',
        },
        {
          icon: 'mdi-star',
          title: 'Priority Management',
          description:
            'Focus on what matters most with intelligent priority sorting and filtering.',
          color: 'amber',
        },
        {
          icon: 'mdi-progress-check',
          title: 'Progress Tracking',
          description: 'Monitor your progress and celebrate achievements with detailed reports.',
          color: 'red',
        },
      ],
    }
  },
}
</script>
