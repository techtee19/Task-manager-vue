<template>
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
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>

<style lang="scss" scoped></style>
