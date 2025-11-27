<template>
    <ion-page>
        <ion-header>
        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="router.push('/')"> Inicio </ion-button>
                        </ion-buttons>
                        <ion-title>Login</ion-title>
                        <ion-buttons slot="end">
                            <ion-button @click="router.push('/registro')"> Registrarse </ion-button>
                        </ion-buttons>
        </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
    <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input type="email"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password"></ion-input>
    </ion-item>

    <ion-button expand="block" @click="login()">Login</ion-button>

    <!-- Optional: Forgot password or Sign up links -->
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

function login() {
    // Implement login logic here
    userStore.$setAuthToken('dummy-token'); // Example token
    router.push('/tabs/tab1'); // Redirect to tabs page after login
}   
</script>