<script setup lang="ts">
  defineProps(['title', 'loading'])
</script>

<template>
  <v-dialog v-bind="$attrs" persistent max-width="800px">
    <v-card>
      <v-card-title class="d-flex align-center justify-space-between">
        <span>{{ title }}</span>
        <v-btn icon @click="$emit('hide')" variant="flat" :disabled="loading"><v-icon>mdi-close</v-icon></v-btn>
      </v-card-title>
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <slot name="footer" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
