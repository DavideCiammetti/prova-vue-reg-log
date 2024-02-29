<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
const user = ref();
onMounted(async ()=>{
    const data = await axios.get('/api/user');
    user.value = data.data;
    console.log(user);
});
</script>

<template>
    <div>home page</div>
    <div>
        <p>{{ user?.name }}</p>
        <p>{{ user?.email }}</p>
    </div>
</template>

<style>
</style>
