import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axiosClient from '../axios/axios';

export const useChuckNorrisStore = defineStore('chuckNorris', () => {
    const data = ref(localStorage.getItem('chuckNorrisData') ? JSON.parse(localStorage.getItem('chuckNorrisData')!) : 0)
    function $setChuckNorrisData() {
        return axiosClient.get('random')
            .then(response => {
                data.value = response.data;
                localStorage.setItem('chuckNorrisData', JSON.stringify(data.value) ? JSON.stringify(data.value) : '');
            })
            .catch(error => {
                console.error('Error fetching Chuck Norris data:', error);
            });
    }
    return { data, $setChuckNorrisData }
})