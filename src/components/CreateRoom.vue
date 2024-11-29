<template>
  <div class="create-room">
    <h1>Scrum Poker</h1>
    <button @click="createRoom">Crear Sala</button>
    <p v-if="roomLink">Enlace generado: <a :href="roomLink">{{ roomLink }}</a></p>
  </div>
</template>

<script>
import { ref, set } from "firebase/database";
import database from "../firebase"; // Importamos la configuración de Firebase

export default {
  data() {
    return {
      roomLink: "", // Enlace generado para la sala
    };
  },
  methods: {
    async createRoom() {
      // Generar un ID único para la sala
      const roomId = Math.random().toString(36).substr(2, 9);

      // Datos iniciales de la sala
      const roomData = {
        createdAt: new Date().toISOString(),
        users: {}, // Usuarios que se unirán a la sala
        votes: {}, // Votos realizados en la sala
      };

      try {
        // Guardar la sala en Firebase
        await set(ref(database, `rooms/${roomId}`), roomData);

        // Generar el enlace para compartir la sala
        this.roomLink = `${location.origin}/room/${roomId}`;
      } catch (error) {
        console.error("Error al crear la sala:", error);
        alert("Hubo un error al crear la sala. Por favor, inténtalo de nuevo.");
      }
    },
  },
};
</script>

<style>
.create-room {
  text-align: center;
  margin-top: 50px;
}
a {
  color: blue;
  text-decoration: underline;
}
</style>
