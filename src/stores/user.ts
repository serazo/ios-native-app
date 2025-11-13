import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('user', () => {
    const count = ref(localStorage.getItem('count') ? parseInt(localStorage.getItem('count')!) : 0)
    const name = ref('Santiago Erazo')
    const registro = ref({
        nombre: null,
        email: null,
        password: null
    })
    const authToken = ref<string | null>(localStorage.getItem('authToken')) || null
    function $sumar() {
        count.value++;
        localStorage.setItem('count', count.value.toString()); 
    }
    function $setAuthToken(token: string | null) {
        authToken.value = token;
        localStorage.setItem('authToken', token ? token : '');
        console.log(token);
        return token;
    }
    return { count, name, authToken, $sumar, $setAuthToken, registro }
})