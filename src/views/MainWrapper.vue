<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBar/>
  <div class="max-w-[1024px] w-full p-2 justify-items-center">
    <router-view/>
  </div>
  <Footer/>
</template>

<style scoped>

</style>