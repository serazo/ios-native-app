<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-list id="inbox-list">
            <ion-list-header>Inbox</ion-list-header>
            <ion-note>hi@ionicframework.com</ion-note>

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
                <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                </ion-item>
            </ion-menu-toggle>
        </ion-list>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
        <ion-router-outlet></ion-router-outlet>    
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import {
IonApp,
IonIcon,
IonItem,
IonLabel,
IonList,
IonListHeader,
IonMenuToggle,
IonNote,
IonRouterOutlet,
IonSplitPane,
} from '@ionic/vue';
import {
archiveOutline,
archiveSharp,
bookmarkOutline,
bookmarkSharp,
heartOutline,
heartSharp,
mailOutline,
mailSharp,
paperPlaneOutline,
paperPlaneSharp,
trashOutline,
trashSharp,
warningOutline,
warningSharp,
} from 'ionicons/icons';

const selectedIndex = ref(0);
const appPages = [
    {
    title: 'Inbox',
    url: '/seccion/seccion1',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    },
    {
    title: 'Outbox',
    url: '/seccion/seccion2',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    },
    {
    title: 'Favorites',
    url: '/folder/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    },
    {
    title: 'Archived',
    url: '/folder/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
    },
    {
    title: 'Trash',
    url: '/folder/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
    },
    {
    title: 'Spam',
    url: '/folder/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp,
    },
];
</script>

<style scoped>
  ion-menu::part(backdrop) {
    background-color: rgba(255, 0, 255, 0.5);
  }

  ion-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
  }
</style>