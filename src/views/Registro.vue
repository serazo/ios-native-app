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
        <ion-input 
            type="text" 
            v-model="userStore.registro.nombre"
            @blur="v$.nombre.$touch"
        ></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input type="email" v-model="userStore.registro.email"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" v-model="userStore.registro.password"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Confirmar Password</ion-label>
        <ion-input type="password"></ion-input>
    </ion-item>
    <ion-button expand="block" @click="registrarse()">Registrarse</ion-button>
    </ion-content>
    </ion-page>
    <ion-alert
    trigger="present-alert"
    header="Registro completo"
    sub-header="hemos terminado tu registro"
    message="Un correo electrónico de verificación ha sido enviado a tu email."
    :buttons="alertButtons"
  ></ion-alert>
</template>
<script setup lang="ts">
import { IonPage, IonHeader, 
IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput, IonAlert } from '@ionic/vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators'; 
import { computed } from 'vue';
const userStore = useUserStore();  
const router = useRouter();  
const alertButtons = ['Listo!'];

const rules = computed(() => {
    return {
        nombre: { 
            required
        },
        email: { 
            required, 
            email 
        },
        password: { 
            required, 
            minLength: minLength(6) 
        }  
    }
});

const v$ = useVuelidate(rules, userStore.registro);

async function registrarse() {

    const result = await v$.value.$validate();
    if (!result) {
        alert('Por favor completa el formulario correctamente.');
        return;
    }  

    // Implement login logic here
    alert('registrado');
}   
</script>