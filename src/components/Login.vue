<script setup>
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

const user = ref();
const router = useRouter();
const form = ref({
    email: '',
    password: '',
});
 
const getToken = async ()=>{
    await axios.get('/sanctum/csrf-cookie');
}

const handleLogin = async ()=>{
    await getToken();
    await axios.post('/login',{
        email:form.value.email,
        password:form.value.password,
    });
    console.log('push');
    router.push('/');
}
</script>

<template>
  <main>
    <form action="" method="POST" @submit.prevent="handleLogin">
       <div>
        <label for="email">email</label>
        <input type="email" id="email" v-model="form.email">
       </div>
        <div>
            <label for="password">password</label>
            <input type="password" id="password" v-model="form.password">
        </div>
        <div>
            <button>
                Login
            </button>
        </div>
    </form> 
   </main>
</template>

<style>
</style>
