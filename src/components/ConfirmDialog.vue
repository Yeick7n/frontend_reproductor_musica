<template>
  <v-dialog v-model="internalDialog" max-width="800">
    <v-card>
      <v-card-title class="text-h5">{{ title }}</v-card-title>
      <v-card-subtitle>{{ message }}</v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="cancel">Cancelar</v-btn>
        <v-btn color="primary" @click="confirm">Aceptar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    onConfirm: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      internalDialog: this.modelValue
    };
  },
  watch: {
    modelValue(val) {
      this.internalDialog = val;
    },
    internalDialog(val) {
      this.$emit('update:modelValue', val);
    }
  },
  methods: {
    cancel() {
      this.internalDialog = false;
    },
    confirm() {
      this.onConfirm();
      this.internalDialog = false;
    }
  }
}
</script>

<style scoped>
.v-card {
  padding: 20px;
}
</style>
