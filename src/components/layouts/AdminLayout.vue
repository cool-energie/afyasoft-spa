<script setup lang="ts">

import AdminAppBar from '@/components/ui/AdminAppBar.vue'
import { ref } from 'vue'

const openedMenus = ref([])
const menuItems = [
  {
    text: 'Gestion des utilisateurs',
    icon: 'mdi-account-group-outline',
    link: 'users',
  },
  {
    text: 'Gestion des patient',
    icon: 'mdi-file-account-outline',
    link: 'patients',
    children: [
      {
        text: 'Fiches patients',
        link: '/record',
      },
      {
        text: 'Historique médical',
        link: '/history',
      },
      {
        text: 'Gestion des documents',
        link: '/documents',
      },
    ]
  },
  {
    text: 'Agenda & rendez-vous',
    icon: 'mdi-calendar-month-outline',
    link: 'agenda',
    children: [
      {
        text: 'Planning',
        link: '/planning',
      },
      {
        text: 'Prise de RDV',
        link: '/rdv',
      },
      {
        text: 'Notifications et rappels',
        link: '/notifications',
      },
    ]
  },
  {
    text: 'Pharmacie & stock médical',
    icon: 'mdi-pill',
    link: 'pharmacy',
    children: [
      {
        text: 'Gestion des médicaments et consommables',
        link: '/stock',
      },
      {
        text: 'Alertes de réapprovisionnement',
        link: '/alerts',
      },
      {
        text: 'Historique des entrées/sorties',
        link: '/history',
      },
    ]
  },
  {
    text: 'Facturation & paiements',
    icon: 'mdi-invoice-outline',
    link: 'cash',
    children: [
      {
        text: 'Gestion des factures',
        link: '/invoices',
      },
      {
        text: 'Suivi des paiements',
        link: '/payments',
      },
      {
        text: 'Relances et reçus',
        link: '/receipts',
      },
    ]
  },
  {
    text: 'Statistiques & reporting',
    icon: 'mdi-chart-bar',
    link: 'reporting',
    children: [
      {
        text: 'Dashbord',
        link: '/dashbord',
      },
      {
        text: 'Export PDF/Excel',
        link: '/export',
      },
      {
        text: 'Graphiques dynamiques',
        link: '/dynamic_graphics',
      },
    ]
  },
  {
    text: 'Gestion des examens',
    icon: 'mdi-needle',
    link: 'checkups',
  },
  {
    text: 'Ressources humaines',
    icon: 'mdi-human-queue',
    link: 'rh',
    children: [
      {
        text: 'Gestion du personnel',
        link: '/staff',
      },
      {
        text: 'Fiches de paie, contrats',
        link: '/paid_and_contracts',
      },
      {
        text: 'Suivi des performances',
        link: '/performances',
      },
    ]
  },
  {
    text: 'Méssagrie',
    icon: 'mdi-mailbox-outline',
    link: 'messages',
  },
  {
    text: 'Notifications',
    icon: 'mdi-bell-outline',
    link: 'notifications',
  },
  {
    text: 'Documents Partagés',
    icon: 'mdi-folder-arrow-up-down-outline',
    link: 'shared_documents',
  },
]
</script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <admin-app-bar />

      <v-navigation-drawer>
        <v-list>
          <template v-for="item in menuItems" :key="item.text">
            <v-list-group :value="item.text" v-if="item.children">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :prepend-icon="item.icon"
                  :title="item.text"
                  :key="item.text"
                  :value="item.text"
                  slim
                ></v-list-item>
              </template>
              <v-list-item
                v-for="child in item.children"
                :key="child.text"
                :title="child.text"
                :value="child.text"
                :to="`${item.link}/${child.link}`"
                slim
              ></v-list-item>
            </v-list-group>
            <v-list-item
              v-else
              :key="item.text"
              :prepend-icon="item.icon"
              :title="item.text"
              :to="item.link"
              :value="item.text"
              slim
            ></v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>

</style>
