<script setup lang="ts">

import UsersDataTable from '@/modules/user/components/UsersDataTable.vue'
</script>

<template>
  <v-row>
    <v-col cols="12" class="d-flex align-center ga-2"><v-icon size="x-large" color="primary">mdi-account-group</v-icon> <h1>Gestion des utilisateurs</h1></v-col>
  </v-row>
  <v-row>
    <users-data-table />
  </v-row>
</template>

<style scoped>

</style>
