<template>
  <div class="faq-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h2 font-weight-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-h6 text-grey-darken-1">Find answers to common questions about TaskFlow</p>
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
                Getting started is easy! Simply click the "Get Started" button, create your account,
                and you'll be able to start adding and organizing your tasks right away. Our
                intuitive interface makes it simple to jump in without a learning curve.
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
                notifications about updates. Everyone gets a clear view of what needs to be done and
                who's responsible.
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title>
                Can I upgrade or downgrade my plan later?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Absolutely! You can upgrade or downgrade your plan at any time from your account
                settings. When upgrading, you'll get immediate access to the new features. If you
                downgrade, you'll continue to have access to your current plan until the end of your
                billing cycle.
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title> Is my data secure with TaskFlow? </v-expansion-panel-title>
              <v-expansion-panel-text>
                We take security very seriously at TaskFlow. All your data is encrypted both in
                transit and at rest. We use industry-standard security practices, regular security
                audits, and never share your data with third parties without your explicit consent.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FaqSection',
}
</script>

<style scoped></style>
