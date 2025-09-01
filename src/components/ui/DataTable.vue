<script setup lang="ts">
import { computed, ref } from 'vue'
import _, { constructor } from 'lodash'

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  fetchData: {
    type: Function,
    required: true,
  },
  model: {
    type: Function,
    required: true,
  },
  tableKey: {
    type: Number,
  }
})

const itemsPerPage = ref(15)
const serverItems = ref([])
const totalItems = ref(0)
const loading = ref(false)
const search = ref('')
const page = ref(1)

const pageNumber = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

async function loadItems(event) {
  loading.value = true
  const data = await props.fetchData(event)
  serverItems.value = data.content.map((i) => new props.model(i))
  totalItems.value = data.totalElements
  loading.value = false
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-data-table-server
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        :items="serverItems"
        :items-length="totalItems"
        :loading="loading"
        :search="search"
        loading-text="Chargement des données..."
        item-value="name"
        @update:options="loadItems"
        multi-sort
        hide-default-footer
        :key="tableKey"
      >
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </v-data-table-server>
    </v-row>
    <v-row justify="center">
      <v-pagination
        v-model="page"
        :length="pageNumber"
        rounded="0"
        total-visible="10"
      ></v-pagination>
    </v-row>
  </v-container>
</template>

<style scoped></style>
