import {reactive} from 'vue';

export const store = reactive({
    baseUrl:'http://127.0.0.1:8000',
    // url per prendere dati api json
    apiUrls:'/api/user',
    // oggetto vuoto per prendere tutti i dati  
    userData:{},
});