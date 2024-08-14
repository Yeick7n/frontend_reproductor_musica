<template>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Reproductor De Musica</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Ícono de Perfil -->
      <v-btn icon @click="$router.push('/perfil')" class="mr-2">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <!-- Ícono de Salir -->
      <v-btn icon @click="showDialog = true">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <!-- Diálogo de Confirmación para Salir -->
      <ConfirmDialog 
        v-model="showDialog" 
        title="Confirmar Salir de la Cuenta"
        message="¿Seguro que quiere salir de la cuenta?" 
        :onConfirm="logout" />
    </v-app-bar>
  </template>
  
  <script>
  import ConfirmDialog from '@/components/ConfirmDialog.vue';
  
  export default {
    components: {
      ConfirmDialog
    },
    data() {
      return {
        showDialog: false
      };
    },
    methods: {
      logout() {
        this.$router.push('/');
      }
    }
  };
  </script>