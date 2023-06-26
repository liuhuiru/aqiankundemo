import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useStore = defineStore('masterStore', ()=>{
    const temp = localStorage.getItem('userInfo')
    const userInfo = temp ? JSON.parse(temp) : reactive({});
    console.log('******', userInfo)
    const isLoading = ref(true);
    function stopLoading(){
        isLoading = false
    }
    return {userInfo, isLoading, stopLoading}
})
