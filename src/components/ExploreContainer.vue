<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p><strong>{{ userStore.name }}</strong></p>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>

    <ion-button fill="solid" @click="resetNumero">Reset número</ion-button>
  </div>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import { useUserStore } from '@/stores/user';

defineProps({
  name: String,
});

const userStore = useUserStore();

function resetNumero(){
  userStore.$patch({
    count: 0,
  })
  localStorage.setItem('count', '0'); 
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
