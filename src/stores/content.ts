import { defineStore } from 'pinia'
import {computed, ref} from 'vue'


export const useContentStore = defineStore('content', () => {
  let menu = JSON.parse(sessionStorage.getItem('MENU'))

  const home = sessionStorage.getItem('HOME')

  function $setMenu() {

  }
  return { menu, home, $setMenu }
})