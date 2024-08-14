<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="pa-4">
                    <v-card-title class="text-h5">Crear Cuenta</v-card-title>
                    <v-card-subtitle>Ingrese los datos para crear una nueva cuenta</v-card-subtitle>

                    <v-form @submit.prevent="showDialog = true">
                        <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
                        <v-text-field v-model="usuario" label="Nombre de Usuario" required></v-text-field>
                        <v-text-field v-model="email" label="Correo Electrónico" required></v-text-field>
                        <v-text-field v-model="contraseña" label="Contraseña" type="password" required></v-text-field>

                        <v-row justify="center" class="mt-4">
                            <v-btn type="submit" color="primary">Crear Cuenta</v-btn>
                        </v-row>
                    </v-form>

                    <ConfirmDialog 
                        v-model="showDialog" 
                        title="Confirmar Creación de Cuenta"
                        message="¿Seguro que quiere crear la cuenta?" 
                        :onConfirm="crearCuenta" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import axios from 'axios';

export default {
    components: {
        ConfirmDialog
    },
    data() {
        return {
            nombre: '',
            usuario: '',
            email: '',
            contraseña: '',
            showDialog: false,
            error: null,
        };
    },
    methods: {
        async crearCuenta() {
            try {
                const baseURL = process.env.VUE_APP_API_BASE_URL;

                const response = await axios.post(`${baseURL}/usuarios/crear`, {
                    nombre: this.nombre,
                    usuario: this.usuario,
                    email: this.email,
                    contraseña: this.contraseña,
                })

                if (response.data.success) {
                    console.log('Usuario creado:', response.data.usuario);
                    console.log('Cuenta creada exitosamente, redirigiendo...');
                    this.$router.push('/');
                } else {
                    this.error = response.data.message;
                }

            } catch (error) {
                this.error = 'Error al crear la cuenta. Intente de nuevo.';
            }
        }
    }
};
</script>
