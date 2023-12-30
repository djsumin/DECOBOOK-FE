<template>
  <div >
    
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <h1>LOGIN</h1>
      <!-- ID 입력 -->
      <div class="text-subtitle-1 text-medium-emphasis">Your ID</div>

      <v-text-field
        density="compact"
        placeholder="ID 입력"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>
      <!-- PW 입력 -->
      <div>
        <div class="text-subtitle-1 text-medium-emphasis">Your Password</div>
        <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      </div>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let user_id = ref("");
let password = ref("");

function login() {

}

</script>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: center;
}
</style>
