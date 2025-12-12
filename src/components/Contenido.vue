<template>
  <div v-html="contenido.contenido"></div>
  <div v-if="contenido.youtube" class="video-container">
    <iframe 
      width="560" 
      height="315" 
      :src="'https://www.youtube.com/embed/'+contenido.youtube.replace('https://youtu.be/', '')" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>
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
