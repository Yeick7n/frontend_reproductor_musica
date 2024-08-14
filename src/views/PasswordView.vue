<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="text-h5">Actualizar Contraseña</v-card-title>
            <v-card-subtitle>Ingrese su nombre de usuario para actualizar su contraseña</v-card-subtitle>
  
            <v-form @submit.prevent="actualizarContraseña">
              <v-text-field v-model="usuario" label="Nombre de Usuario" required></v-text-field>
              <v-text-field v-model="nuevaContraseña" label="Nueva Contraseña" type="password" required></v-text-field>
              <v-btn type="submit" color="primary">Actualizar Contraseña</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usuario: '',
        nuevaContraseña: '',
      };
    },
    methods: {
      actualizarContraseña() {
        // Lógica para actualizar la contraseña
      }
    }
  };
  </script>
  