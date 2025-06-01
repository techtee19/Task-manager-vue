<template>
  <div>
    <!-- Navigation Menu for Unauthenticated Users -->
    <v-app-bar color="white" app elevation="1" v-if="!isAuthenticated">
      <v-container class="d-flex align-center">
        <router-link to="/" class="text-decoration-none d-flex align-center">
          <v-icon color="primary" size="32" class="mr-2">mdi-check-circle</v-icon>
          <span class="text-h5 font-weight-medium text-black">TaskFlow</span>
        </router-link>

        <v-spacer></v-spacer>

        <div class="d-none d-sm-flex">
          <v-btn variant="text" class="text-none mx-2" href="#features">Features</v-btn>
          <v-btn variant="text" class="text-none mx-2" href="#pricing">Pricing</v-btn>
          <v-btn variant="text" class="text-none mx-2" href="#about">About</v-btn>
        </div>

        <v-spacer></v-spacer>

        <div>
          <v-btn variant="text" class="text-none mr-2" to="/login">Sign In</v-btn>
          <v-btn color="black" class="text-none" to="/register">Get Started</v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <!-- Hero Section -->
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

    <!-- Features Section -->
    <div id="features" class="features-section py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h2 font-weight-bold mb-4">Everything you need to stay organized</h2>
            <p class="text-h6 text-grey-darken-1">
              Powerful features designed to help you manage tasks efficiently and boost your
              productivity.
            </p>
          </v-col>
        </v-row>

        <!-- Feature Cards -->
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
              <v-icon size="48" color="primary" class="mb-4">mdi-view-dashboard-outline</v-icon>
              <h3 class="text-h5 font-weight-bold mb-2">Intuitive Dashboard</h3>
              <p class="text-body-1">
                Get a clear overview of all your tasks, priorities, and progress at a glance.
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
              <v-icon size="48" color="primary" class="mb-4">mdi-check-circle-outline</v-icon>
              <h3 class="text-h5 font-weight-bold mb-2">Task Organization</h3>
              <p class="text-body-1">
                Categorize, prioritize, and schedule your tasks with an easy-to-use interface.
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
              <v-icon size="48" color="primary" class="mb-4">mdi-chart-line</v-icon>
              <h3 class="text-h5 font-weight-bold mb-2">Productivity Analytics</h3>
              <p class="text-body-1">
                Track your productivity trends and identify patterns to improve your workflow.
              </p>
            </v-card>
          </v-col>
        </v-row>

        <!-- Additional Features -->
        <v-row class="mt-8">
          <v-col cols="12" sm="6" md="4">
            <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
              <v-icon size="48" color="primary" class="mb-4">mdi-bell-outline</v-icon>
              <h3 class="text-h5 font-weight-bold mb-2">Smart Reminders</h3>
              <p class="text-body-1">
                Never miss a deadline with customizable notifications and reminders.
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
              <v-icon size="48" color="primary" class="mb-4">mdi-account-group-outline</v-icon>
              <h3 class="text-h5 font-weight-bold mb-2">Team Collaboration</h3>
              <p class="text-body-1">
                Share tasks and projects with team members for seamless collaboration.
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
              <v-icon size="48" color="primary" class="mb-4">mdi-cellphone-link</v-icon>
              <h3 class="text-h5 font-weight-bold mb-2">Cross-Platform</h3>
              <p class="text-body-1">
                Access your tasks from anywhere with our mobile and desktop applications.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Testimonials Section -->
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
                "As a freelancer juggling multiple projects, TaskFlow helps me stay organized and
                never miss a deadline. The categorization system is exactly what I needed to
                separate personal and work tasks."
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
                "Our team's productivity has increased significantly since we started using
                TaskFlow. The collaboration features make it easy to assign tasks and track progress
                across departments."
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

    <!-- Pricing Section -->
    <div id="pricing" class="pricing-section py-16 bg-grey-lighten-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h2 font-weight-bold mb-4">Simple, transparent pricing</h2>
            <p class="text-h6 text-grey-darken-1">
              Choose the plan that works best for you or your team
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-card elevation="0" class="pricing-card h-100 rounded-lg">
              <v-card-title class="text-h5 font-weight-bold pt-6">Free</v-card-title>
              <v-card-text>
                <div class="text-h3 font-weight-bold mb-4">
                  $0<span class="text-body-1 text-grey-darken-1 font-weight-regular">/month</span>
                </div>
                <p class="text-body-2 mb-6">Perfect for personal use and getting started</p>
                <v-divider class="mb-6"></v-divider>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Up to 10 tasks</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Basic task management</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Task reminders</span>
                </div>
                <div class="d-flex align-center mb-4 text-grey">
                  <v-icon color="grey" class="mr-2">mdi-close-circle</v-icon>
                  <span>Advanced analytics</span>
                </div>
                <div class="d-flex align-center mb-4 text-grey">
                  <v-icon color="grey" class="mr-2">mdi-close-circle</v-icon>
                  <span>Team collaboration</span>
                </div>
              </v-card-text>
              <v-card-actions class="pa-6 pt-0">
                <v-btn color="black" variant="outlined" block class="text-none" to="/register">
                  Get Started
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="8" class="pricing-card pricing-card--popular h-100 rounded-lg">
              <div class="popular-badge">Popular</div>
              <v-card-title class="text-h5 font-weight-bold pt-6">Pro</v-card-title>
              <v-card-text>
                <div class="text-h3 font-weight-bold mb-4">
                  $9<span class="text-body-1 text-grey-darken-1 font-weight-regular">/month</span>
                </div>
                <p class="text-body-2 mb-6">For professionals who need advanced features</p>
                <v-divider class="mb-6"></v-divider>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Unlimited tasks</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Advanced task management</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Custom reminders</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Advanced analytics</span>
                </div>
                <div class="d-flex align-center mb-4 text-grey">
                  <v-icon color="grey" class="mr-2">mdi-close-circle</v-icon>
                  <span>Team collaboration</span>
                </div>
              </v-card-text>
              <v-card-actions class="pa-6 pt-0">
                <v-btn color="primary" block class="text-none" to="/register"> Get Started </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="0" class="pricing-card h-100 rounded-lg">
              <v-card-title class="text-h5 font-weight-bold pt-6">Team</v-card-title>
              <v-card-text>
                <div class="text-h3 font-weight-bold mb-4">
                  $19<span class="text-body-1 text-grey-darken-1 font-weight-regular">/month</span>
                </div>
                <p class="text-body-2 mb-6">For teams that need to collaborate</p>
                <v-divider class="mb-6"></v-divider>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Everything in Pro</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Up to 10 team members</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Team dashboards</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Advanced analytics</span>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                  <span>Team collaboration</span>
                </div>
              </v-card-text>
              <v-card-actions class="pa-6 pt-0">
                <v-btn color="black" variant="outlined" block class="text-none" to="/register">
                  Get Started
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- FAQ Section -->
    <div class="faq-section py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h2 font-weight-bold mb-4">Frequently Asked Questions</h2>
            <p class="text-h6 text-grey-darken-1">
              Find answers to common questions about TaskFlow
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  How do I get started with TaskFlow?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Getting started is easy! Simply click the "Get Started" button, create your
                  account, and you'll be able to start adding and organizing your tasks right away.
                  Our intuitive interface makes it simple to jump in without a learning curve.
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title> Can I use TaskFlow on my phone? </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Yes! TaskFlow is fully responsive and works great on mobile devices. We also offer
                  dedicated mobile apps for iOS and Android that provide an optimized experience for
                  managing your tasks on the go.
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  How does the team collaboration feature work?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  With our Team plan, you can invite team members to collaborate on shared tasks and
                  projects. Team members can be assigned tasks, track progress together, and receive
                  notifications about updates. Everyone gets a clear view of what needs to be done
                  and who's responsible.
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  Can I upgrade or downgrade my plan later?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Absolutely! You can upgrade or downgrade your plan at any time from your account
                  settings. When upgrading, you'll get immediate access to the new features. If you
                  downgrade, you'll continue to have access to your current plan until the end of
                  your billing cycle.
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  Is my data secure with TaskFlow?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  We take security very seriously at TaskFlow. All your data is encrypted both in
                  transit and at rest. We use industry-standard security practices, regular security
                  audits, and never share your data with third parties without your explicit
                  consent.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Final CTA Section -->
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
    </div>

    <!-- Footer -->
    <v-footer class="bg-grey-darken-4">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="mb-6 mb-md-0">
            <div class="d-flex align-center mb-4">
              <v-icon color="white" size="32" class="mr-2">mdi-check-circle</v-icon>
              <span class="text-h5 font-weight-medium text-white">TaskFlow</span>
            </div>
            <p class="text-body-2 text-grey-lighten-1 mb-4">
              Organize your tasks, amplify your productivity, and achieve more every day.
            </p>
            <div class="d-flex">
              <v-btn icon variant="text" color="grey">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="grey">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="grey">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="grey">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <h3 class="text-h6 font-weight-bold text-white mb-4">Product</h3>
            <div class="d-flex flex-column">
              <a href="#features" class="text-decoration-none text-grey-lighten-1 mb-2">Features</a>
              <a href="#pricing" class="text-decoration-none text-grey-lighten-1 mb-2">Pricing</a>
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Integrations</a>
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Updates</a>
            </div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <h3 class="text-h6 font-weight-bold text-white mb-4">Company</h3>
            <div class="d-flex flex-column">
              <a href="#about" class="text-decoration-none text-grey-lighten-1 mb-2">About</a>
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Team</a>
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Careers</a>
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Blog</a>
            </div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <h3 class="text-h6 font-weight-bold text-white mb-4">Support</h3>
            <div class="d-flex flex-column">
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Help Center</a>
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Contact Us</a>
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Privacy</a>
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">Terms</a>
            </div>
          </v-col>

          <v-col cols="6" sm="12" md="2">
            <h3 class="text-h6 font-weight-bold text-white mb-4">Get the App</h3>
            <div class="d-flex flex-column">
              <a href="#" class="text-decoration-none text-grey-lighten-1 mb-2">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  max-width="120"
                  class="mb-2"
                ></v-img>
              </a>
              <a href="#" class="text-decoration-none text-grey-lighten-1">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  max-width="135"
                ></v-img>
              </a>
            </div>
          </v-col>
        </v-row>

        <v-divider color="grey-darken-2" class="my-6"></v-divider>

        <div class="text-center text-grey-lighten-1 text-caption">
          © {{ new Date().getFullYear() }} TaskFlow. All rights reserved.
        </div>
      </v-container>
    </v-footer>

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

export default {
  name: 'HomeView',
  data() {
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
.hero-section {
  background: linear-gradient(180deg, #eef2ff 0%, #e0f2fe 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.headline-gradient {
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 1.2;
  font-weight: 800;
}

.headline-dark {
  color: #1e293b;
}

.headline-blue {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.headline-purple {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subheadline {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #475569;
}

.features-section {
  background-color: #fff;
}

.feature-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.testimonial-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.pricing-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
}

.pricing-card--popular {
  border: 2px solid var(--v-primary-base);
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: var(--v-primary-base);
  color: white;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

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
