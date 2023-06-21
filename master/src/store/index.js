import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useStore = defineStore('masterStore', ()=>{
    const userInfo = localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : reactive({});
    const isLoading = ref(true);
    function stopLoading(){
        isLoading = false
    }
    return {userInfo, isLoading, stopLoading}
})
