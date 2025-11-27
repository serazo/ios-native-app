<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <div class="bg">
        <div class="card">
          <h1>Bienvenido</h1>
          <div class="actions">
            <ion-button class="btn-primary" expand="block" @click="goLogin">Ingresar</ion-button>
            <ion-button class="btn-outline" expand="block" fill="outline" @click="goRegistro">Registrarse</ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// Give the SFC a multi-word name to satisfy the ESLint `vue/multi-word-component-names` rule
defineOptions({ name: 'WelcomePage' });
import { useRouter } from 'vue-router';
const router = useRouter();
function goLogin() {
  router.push('/login');
}
function goRegistro() {
  router.push('/registro');
}
</script>

<style scoped>
.bg {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #002bff 0%, #00e5ff 45%, #0055ff 100%);
  background-size: 200% 200%;
  animation: gradientShift 6s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.card {
  width: 320px;
  padding: 24px;
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  box-shadow: 0 8px 30px rgba(0,85,255,0.22), 0 0 40px rgba(0,229,255,0.06) inset;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

h1 {
  color: #ffffff;
  text-align: center;
  margin: 0 0 6px 0;
  font-size: 1.4rem;
  text-shadow: 0 6px 18px rgba(0,102,255,0.25);
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-primary {
  --background: linear-gradient(90deg,#00e5ff,#0066ff);
  --color: #001022;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,102,255,0.22), 0 0 30px rgba(0,229,255,0.12);
}

.btn-outline {
  --background: transparent;
  --color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 6px 20px rgba(0,102,255,0.08);
}
</style>
