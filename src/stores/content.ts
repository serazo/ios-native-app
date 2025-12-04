import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import axiosRiksiri from '../axios/axiosRiksiri';

export const useContentStore = defineStore('content', () => {

  const contenido = ref({});
  const encuestas = ref([]);
  const contenido_usuario = ref(null);  

  function $getContenido( name: string ) {  
    return axiosRiksiri.get('contenido/' + name)
      .then(response => {
        contenido.value = response.data.contenido;
        encuestas.value = response.data.encuestas;
        contenido_usuario.value = response.data.contenido_usuario;
      });
  }
  return { $getContenido, contenido, encuestas, contenido_usuario }
})