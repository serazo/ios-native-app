import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axiosRiksiri from '../axios/axiosRiksiri';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('user', () => {

    const registro = ref({
        usuario: null,
        email: null,
        password: null
    })
    const login = ref({
        username: null,
        password: null
    })  
    const authToken = ref<string | null>(localStorage.getItem('authToken')) || null
    const user = ref(JSON.parse(localStorage.getItem('user') || '{}')) || null
    const menu = ref(JSON.parse(localStorage.getItem('menu') || '[]')) || []
    function $setLogin(data: any | null) {
        authToken.value = data.token;
        localStorage.setItem('authToken', data.token ? data.token : '');
        user.value = data.user;
        localStorage.setItem('user', data.user ? JSON.stringify(data.user) : '');
        console.log(data.user);
        menu.value = data.menu;
        localStorage.setItem('menu', data.menu ? JSON.stringify(data.menu) : '');
    }
    function $login() {
        return axiosRiksiri.post('login', login.value)
            .then(response => {
                $setLogin(response.data);
                return response
            });
        }
    function $registro() {
        return axiosRiksiri.post('register', registro.value)
            .then(response => {
                return response
            });     
    }
    return { authToken, registro, login, user, menu, $login, $registro }
})