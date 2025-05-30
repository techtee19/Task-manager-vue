<template>
  <v-menu offset-y>
    <template #activator="{ props }">
      <v-btn v-bind="props" variant="text" block class="justify-start pa-2">
        <v-avatar size="32" class="mr-3">
          <v-img src="/placeholder-user.jpg" alt="User Avatar">
            <template #placeholder>
              <div class="d-flex align-center justify-center fill-height bg-primary">
                <span class="text-white font-weight-bold">
                  {{ userInitials }}
                </span>
              </div>
            </template>
          </v-img>
        </v-avatar>

        <div class="text-left flex-grow-1">
          <div class="text-body-2 font-weight-medium">{{ user?.name }}</div>
          <div class="text-caption text-grey-darken-1">{{ user?.email }}</div>
        </div>

        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item prepend-icon="mdi-account" title="Profile" />
      <v-list-item prepend-icon="mdi-cog" title="Settings" />
      <v-divider />
      <v-list-item prepend-icon="mdi-logout" title="Log out" @click="$emit('logout')" />
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'UserMenu',
  emits: ['logout'],
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  computed: {
    userInitials() {
      if (!this.user?.name) return 'U'
      return this.user.name
        .split(' ')
        .map((name) => name[0])
        .join('')
        .toUpperCase()
    },
  },
}
</script>
