<template>
    <ion-page>
        <ion-header>
        <ion-toolbar>
            <ion-title>Login</ion-title>
            <ion-buttons slot="end">
                <ion-button @click="router.push('/registro')"> Registrarse </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
    <ion-item>
        <ion-label position="floating">Usuario</ion-label>
        <ion-input type="text" v-model="userStore.login.username"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" v-model="userStore.login.password" @keyup.enter="login()"></ion-input>
    </ion-item>

    <ion-button expand="block" @click="login()">Login</ion-button>

    <!-- Optional: Forgot password or Sign up links -->
    </ion-content>
    </ion-page>
    
</template>
<script setup lang="ts">
import { IonPage, IonHeader, 
IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonItem, IonLabel, IonInput } from '@ionic/vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
const userStore = useUserStore();  
const router = useRouter();  

function login() {
    // Implement login logic here
    userStore.$login().then((res) => {
        router.push(res.home.url);
    }).catch((err) => {
        alert(err.response.data.message)
    });     
}   
</script>