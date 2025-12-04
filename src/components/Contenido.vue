<template>
  <div v-html="contenido.contenido"></div>
  <div v-if="contenido.youtube" class="video-container">
      <embed :src="'https://www.youtube.com/v/' + contenido.youtube.replace('https://youtu.be/', '')"
        pluginspage="http://adobe.com/go/getflashplayer" type="application/x-shockwave-flash" quality="high" width="450" height="376" bgcolor="#ffffff" loop="false"/>
  </div>
</template>
    
<script setup type="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { useContentStore } from '@/stores/content';
import { computed, ref } from 'vue';
const contentStore = useContentStore();
const contenido = computed(() => contentStore.contenido);
const youtube = ref(contenido.value.contenido);
</script>
<style scoped>
/* YOUTUBE RESPONSIVE EMBED */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px; height: 0; overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
