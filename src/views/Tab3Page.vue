<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="cerrarSesion()"> Cerrar sesión </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const router = useRouter();
async function cerrarSesion() {
  if(confirm('Seguro desea cerrar sesión?')){
    await userStore.$setAuthToken('');
    router.push('/login');
  }
  
}

</script>
