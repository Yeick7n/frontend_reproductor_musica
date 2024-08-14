<template>
  <v-app>
    <NavBar />

    <v-container class="text-center mt-10">
      <v-row justify="center">
        <v-col cols="12">
          <h1>Bienvenido</h1>
          <p>¿Qué desea crear?</p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-btn block color="primary" class="mb-4 no-select" @mouseover="changeColor($event, true)"
            @mouseleave="changeColor($event, false)" @click="$router.push('/album')">
            Album
          </v-btn>

          <v-btn block color="primary" class="mb-4 no-select" @mouseover="changeColor($event, true)"
            @mouseleave="changeColor($event, false)" @click="$router.push('/autores')">
            Autores
          </v-btn>

          <v-btn block color="primary" class="mb-4 no-select" @mouseover="changeColor($event, true)"
            @mouseleave="changeColor($event, false)" @click="$router.push('/canciones')">
            Canciones
          </v-btn>

          <v-btn block color="primary" class="mb-4 no-select" @mouseover="changeColor($event, true)"
            @mouseleave="changeColor($event, false)" @click="$router.push('/generos')">
            Generos
          </v-btn>

          <v-btn block color="primary" class="mb-4 no-select" @mouseover="changeColor($event, true)"
            @mouseleave="changeColor($event, false)" @click="$router.push('/playlist')">
            PlayList
          </v-btn>

          <v-btn block color="primary" class="mb-4 no-select" @mouseover="changeColor($event, true)"
            @mouseleave="changeColor($event, false)" @click="$router.push('/usuarios')">
            Usuarios
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
// import ConfirmDialog from '@/components/ConfirmDialog.vue';
// import Axios from 'axios'
export default {
  components: {
    NavBar,
    // ConfirmDialog
  },

  data() {
    return {
      showDialog: false
    };
  },

  methods: {
    changeColor(event, hover) {
      if (hover) {
        event.target.style.backgroundColor = '#42a5f5';
      } else {
        event.target.style.backgroundColor = '#1976d2';
      }
    },
    
  }
}
</script>

<style scoped>
.v-btn {
  transition: background-color 0.1s;
  user-select: none;
}

.no-select {
  user-select: none;
}
</style>
