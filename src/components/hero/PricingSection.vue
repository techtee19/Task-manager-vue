<template>
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
</template>

<script>
export default {
  name: 'PricingSection',
}
</script>

<style scoped>
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
</style>
