<template>
    <v-alert
      :type="type"
      dense
      outlined
      prominent
      v-show="visible"
    >
      {{ message }}
    </v-alert>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Alerta',
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'success'
      },
      visible: {
        type: Boolean,
        default: true
      }
    }
  }
  </script>
  
  <style scoped>
  .v-alert {
    margin-top: 20px;
  }
  </style>