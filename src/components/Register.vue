<script setup>
    import {ref} from 'vue'
    import axios from 'axios'
    import {useRouter} from 'vue-router'

    const user = ref();
    const router = useRouter();
    const form = ref({
        email: '',
        password: '',
        name: '',
        password_confirm: '',
    });
    const getToken = async ()=>{
    await axios.get('/sanctum/csrf-cookie');
}
    const handleLogin = async ()=>{
        getToken();
    await axios.post('/register',{
        email:form.value.email,
        password:form.value.password,
        password_confirm: form.value.password_confirm,
        name: form.value.name,
    });
    console.log('push');
    router.push('/');
}
</script>

<template>
    <main>
    <form action="" @submit.prevent="handleLogin" method="POST">
        <div>
            <label for="name">name</label>
            <input type="text" id="name" v-model="form.name">
        </div>
       <div>
        <label for="email">email</label>
        <input type="email" id="email" v-model="form.email">
       </div>
        <div>
            <label for="password">password</label>
            <input type="password" id="password" v-model="form.password">
        </div>
        <div>
            <label for="password">password confirm</label>
            <input type="password" id="password" v-model="form.password_confirm">
        </div>
        <div>
            <button>Registrati</button>
        </div>
    </form> 
   </main>
</template>

<style>
</style>
