<template>
    <ion-page>
        <ion-header>
        <ion-toolbar>
            <ion-title>Registro</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
    <ion-item>
        <ion-label position="floating">Nombre</ion-label>
        <ion-input type="text"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input type="email"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Confirmar Password</ion-label>
        <ion-input type="password"></ion-input>
    </ion-item>

    <ion-button expand="block" @click="registrarse()">Registrarse</ion-button>
    </ion-content>
    </ion-page>
    
</template>
<script setup lang="ts">
import { IonPage, IonHeader, 
IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput } from '@ionic/vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
const userStore = useUserStore();  
const router = useRouter();  

function registrarse() {
    // Implement login logic here
    console.log('registro en api')
}   
</script>