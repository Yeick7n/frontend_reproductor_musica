<template>
    <v-app>
        <NavBar />
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

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
}
</script>