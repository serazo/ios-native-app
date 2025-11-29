<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <ion-row>
          <ion-col>
            <div class="ion-text-center ion-content-center">
              <h2>Chuck Norris Facts</h2>
              <p>Presiona el botón para obtener un hecho aleatorio de Chuck Norris desde un API público.</p>
              <ion-button fill="outline" @click="llamarAlApi()">Llamar al API de Chuck Norris</ion-button>
              <template v-if="chuckNorrisFact.data">
                <ion-avatar>
                  <img  alt="Silhouette of a person's head" :src="chuckNorrisFact.data.icon_url" />
                </ion-avatar>
                <p>{{ chuckNorrisFact.data.value }}</p>
              </template>
            </div>
          </ion-col>
        </ion-row>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAvatar, IonRow, IonCol } from '@ionic/vue';
import { useChuckNorrisStore } from '@/stores/chuckNorris'; 

const chuckNorrisFact = useChuckNorrisStore();

function llamarAlApi() {
  chuckNorrisFact.$setChuckNorrisData();
}
</script>
