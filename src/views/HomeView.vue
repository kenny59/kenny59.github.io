<script setup lang="ts">

import ProfileBanner from "../components/ProfileBanner.vue";
import Stacks from "../components/Stacks.vue";
import Timeline from "@/components/Timeline.vue";
</script>

<template>
  <ProfileBanner/>
  <div class="mt-8 text-2xl dark:text-white font-extralight">
    Technologies & Stacks
  </div>
  <Stacks/>
  <div class="text-2xl dark:text-white font-extralight">
    Experience & Projects & Contributions Timeline
  </div>
  <Timeline/>
</template>

<style scoped>

</style>