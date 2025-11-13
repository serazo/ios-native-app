<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inicio</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        

        <p>Click para sumar:</p>
        <ion-button fill="outline" @click="sumar()">Contador</ion-button>
        <p>Número: {{ userStore.count }}</p>
      </ion-content>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

function sumar() {
  userStore.$sumar();
}
</script>
