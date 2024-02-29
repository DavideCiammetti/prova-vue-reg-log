<script>
import axios from 'axios'
import { ref } from 'vue'
import Nav from './components/Nav.vue'

export default{
    name: 'App',
    components:{
        Nav,
    },
    data() {
    return {
      
    }
  },
    methods:{
    }
}
</script>

<template>
    <Nav></Nav>
    <router-view></router-view>
</template>

<style>
</style>
