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

                    <!-- COMPONENTE DE ALERTA -->
                    <Alerta v-if="mensajeAlerta" :message="mensajeAlerta" :type="TypeAlerta" :visible="VisibleAlerta" />

                    <!-- COMPONENTE DE DIÁLOGO -->

                    <ConfirmDialog v-model="showDialog" title="Confirmar Creación de Cuenta"
                        message="¿Seguro que quiere crear la cuenta?" :onConfirm="crearCuenta" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import Alerta from '@/components/Alerta.vue';
import axios from 'axios';

export default {
    components: {
        ConfirmDialog,
        Alerta
    },
    data() {
        return {
            nombre: '',
            usuario: '',
            email: '',
            contraseña: '',
            showDialog: false,
            error: null,
            mensajeAlerta: '',
            TypeAlerta: 'success',
            VisibleAlerta: false,
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
                    this.mensajeAlerta = 'Cuenta creada exitosamente.';
                    this.TypeAlerta = 'success';
                    this.VisibleAlerta = true;
                    setTimeout(() => {
                        this.$router.push('/');
                    }, 3000);
                } else {
                    this.mensajeAlerta = response.data.message || 'Error al crear la cuenta. Intente de nuevo.';
                    this.TypeAlerta = 'error';
                    this.VisibleAlerta = true;
                }

            } catch (error) {
                this.mensajeAlerta = 'Error al crear la cuenta. Intente de nuevo.';
                this.TypeAlerta = 'error';
                this.VisibleAlerta = true;
            }
        }
    }
};
</script>

<style scoped>
.v-card {
    margin-top: 20px;
}
</style>