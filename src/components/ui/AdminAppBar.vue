<script setup lang="ts">
const userMenuItems = [
  {
    text: 'Profile',
    icon: 'mdi-account-outline',
    link: '/profile',
  },
  {
    text: 'Settings',
    icon: 'mdi-cog-outline',
    link: '/settings',
  },
  {
    text: 'Logout',
    icon: 'mdi-logout',
    link: '/logout',
  },
]

const notifications = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ',
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]
</script>

<template>
  <v-app-bar>
    <template #image>
      <img src="@/assets/images/logo.png" class="pa-2" />
    </template>
    <template #append>
        <v-menu>
          <template #activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-bell-outline</v-icon>
            </v-btn>
          </template>
          <v-card
            class="mx-auto"
            max-width="450"
          >
            <v-list
              :items="notifications"
              lines="three"
              item-props
            >
              <template v-slot:subtitle="{ subtitle }">
                <div v-html="subtitle"></div>
              </template>
            </v-list>
          </v-card>
        </v-menu>
        <v-menu>
          <template #activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="300">
            <v-list density="compact">
              <v-list-item
                v-for="(item, i) in userMenuItems"
                :key="i"
                :value="item"
                color="primary"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
    </template>
  </v-app-bar>
</template>

<style scoped></style>
