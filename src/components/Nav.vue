<script>

export default{
    name: 'Nav',
    data() {
    return {
      
    }
  },
}
</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link class="text-white fs-6" :to="{name: 'home'}">Home</router-link>
                </li>
                <li>
                    <router-link class="text-white fs-6" :to="{name: 'login'}">Login</router-link>
                </li>
                <li>
                    <router-link class="text-white fs-6" :to="{name: 'register'}">Register</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
</style>
