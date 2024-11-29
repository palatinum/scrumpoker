<template>
  <div class="voting-room">
    <h1>Votación - Sala {{ roomId }}</h1>
    <div v-if="!userName">
      <input v-model="tempName" placeholder="Ingresa tu nombre" />
      <button @click="joinRoom">Unirme</button>
    </div>
    <div v-else>
      <p>¡Hola, {{ userName }}!</p>
      <p>Vota seleccionando una opción:</p>
      <div class="cards">
        <button
            v-for="value in options"
            :key="value"
            @click="castVote(value)"
            :class="{ selected: userVote === value }"
        >
          {{ value }}
        </button>
      </div>
      <h2>Estado de Votaciones:</h2>
      <ul>
        <li v-for="(vote, user) in votes" :key="user">
          {{ user }}:
          <span v-if="showVotes">{{ vote }}</span>
          <span v-else>{{ user === userName ? "Tu voto está registrado" : "Votó" }}</span>
        </li>
      </ul>
      <button @click="toggleVotes">{{ showVotes ? "Ocultar" : "Mostrar" }} Votaciones</button>
      <button @click="resetVotes">Reiniciar Votaciones</button>
    </div>
  </div>
</template>

<script>
import { ref, onValue, update, remove, onDisconnect } from "firebase/database";
import database from "../firebase";

export default {
  data() {
    return {
      roomId: "",
      userName: "",
      tempName: "",
      votes: {},
      userVote: null, // Voto del usuario local
      showVotes: false,
      options: ["1", "2", "3", "5", "8", "13", "20"],
    };
  },
  methods: {
    joinRoom() {
      if (!this.tempName) return;

      this.userName = this.tempName;

      // Añadir usuario a la sala
      const userPresenceRef = ref(database, `rooms/${this.roomId}/presence/${this.userName}`);
      update(userPresenceRef, { connected: true });

      // Registrar desconexión
      onDisconnect(userPresenceRef).remove();

      // Asegurar que el usuario aparece en la lista general
      update(ref(database, `rooms/${this.roomId}/users`), {
        [this.userName]: true,
      });
    },
    castVote(value) {
      if (!this.userName) return;

      // Enviar el voto a Firebase
      update(ref(database, `rooms/${this.roomId}/votes`), {
        [this.userName]: value,
      });

      // Guardar el voto del usuario localmente
      this.userVote = value;
    },
    toggleVotes() {
      // Cambiar el estado de `showVotes` globalmente en Firebase
      const showVotesRef = ref(database, `rooms/${this.roomId}/showVotes`);
      update(showVotesRef, { value: !this.showVotes });
    },
    resetVotes() {
      remove(ref(database, `rooms/${this.roomId}/votes`))
          .then(() => {
            console.log("Votaciones reiniciadas.");
          })
          .catch((error) => {
            console.error("Error al reiniciar votaciones:", error);
          });

      // Reiniciar el voto local del usuario
      this.userVote = null;
    },
  },
  mounted() {
    // Obtener el ID de la sala desde la URL
    this.roomId = this.$route.params.id;

    // Escuchar cambios en los votos
    const votesRef = ref(database, `rooms/${this.roomId}/votes`);
    onValue(votesRef, (snapshot) => {
      const votes = snapshot.val() || {};
      this.votes = votes;

      // Actualizar el voto local del usuario si ya existe en Firebase
      if (this.userName && votes[this.userName]) {
        this.userVote = votes[this.userName];
      }
    });

    // Sincronizar `showVotes` globalmente
    const showVotesRef = ref(database, `rooms/${this.roomId}/showVotes/value`);
    onValue(showVotesRef, (snapshot) => {
      if (snapshot.exists()) {
        this.showVotes = snapshot.val();
      } else {
        this.showVotes = false; // Estado inicial por defecto
      }
    });

    // Monitorear la presencia de los usuarios
    const presenceRef = ref(database, `rooms/${this.roomId}/presence`);
    onValue(presenceRef, (snapshot) => {
      if (!snapshot.exists()) {
        // Si no hay usuarios en la sala, eliminar solo si está vacía.
        const roomRef = ref(database, `rooms/${this.roomId}`);
        remove(roomRef).catch((error) => {
          console.error("Error al intentar borrar la sala:", error);
        });
      }
    });
  },
};
</script>

<style>
.voting-room {
  text-align: center;
  margin-top: 50px;
}
.cards button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  transition: background-color 0.3s, color 0.3s;
}
.cards button.selected {
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border: 1px solid #4caf50;
}
</style>
