<template>
  <div class="join-room">
    <h1>Unirse a una Sala</h1>
    <input
        type="text"
        v-model="roomId"
        placeholder="Ingresa el ID de la sala"
    />
    <button @click="joinRoom">Unirse</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomId: '',
      errorMessage: '',
    };
  },
  methods: {
    joinRoom() {
      if (!this.roomId.trim()) {
        this.errorMessage = 'Por favor, ingresa un ID de sala válido.';
        return;
      }

      // Navega a la sala con el ID ingresado
      this.$router.push(`/room/${this.roomId}`);
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>
