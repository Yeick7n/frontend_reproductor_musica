<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="text-h5">Iniciar Sesión</v-card-title>
            <v-card-subtitle>Ingrese sus credenciales</v-card-subtitle>
  
            <v-form @submit.prevent="login">
              <v-text-field 
                v-model="usuario" 
                label="Nombre de Usuario" 
                required>
              </v-text-field>
              <v-text-field 
                v-model="contraseña" 
                label="Contraseña" 
                type="password" 
                required>
              </v-text-field>
  
              <v-btn type="submit" color="primary">Iniciar Sesión</v-btn>
  
              <v-alert v-if="error" type="error" class="mt-3">
                {{ error }}
              </v-alert>
            </v-form>
  
            <v-card-actions>
              <v-btn text @click="$router.push('/crear-user')">Crear Cuenta</v-btn>
              <v-btn text @click="$router.push('/recover-password')">Olvidé mi Contraseña</v-btn>
            </v-card-actions>

            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  

<script>
import axios from 'axios';

export default {
    data() {
        return {
            //   nombre: '',
            usuario: '',
            //   email: '',
            contraseña: '',
            error: null,
        };
    },
    methods: {
        async login() {
            try {
                const baseURL = process.env.VUE_APP_API_BASE_URL;

                const response = await axios.post(`${baseURL}/usuarios/login`, {
                    usuario: this.usuario,
                    contraseña: this.contraseña
                });

                if (response.data.success) {
                    this.$router.push('/home');
                } else {
                    this.error = response.data.message;
                }
            } catch (error) {
                this.error = 'Error al iniciar sesión. Intente de nuevo.';
            }
        }
    }
}
</script>

<style scoped>
.v-card {
  padding: 20px;
}
.v-btn {
  margin-right: 10px;
}
</style>