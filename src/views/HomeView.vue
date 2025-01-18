<script setup lang="ts">

import NavBar from "../components/NavBar.vue";
import ProfileBanner from "../components/ProfileBanner.vue";
import Stacks from "../components/Stacks.vue";
import Footer from "../components/Footer.vue";
import Timeline from "@/components/Timeline.vue";
</script>

<template>
  <NavBar/>
  <div class="max-w-[1024px] p-2 justify-items-center">
    <ProfileBanner/>
    <div class="mt-8 text-2xl dark:text-white font-extralight">
      Technologies & Stacks
    </div>
    <Stacks/>
    <div class="text-2xl dark:text-white font-extralight">
      Experience & Projects & Contributions Timeline
    </div>
    <Timeline/>
    <Footer/>
  </div>
</template>

<style scoped>

</style>