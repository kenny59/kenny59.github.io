<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBar/>
  <div class="max-w-[1024px] w-full p-2 justify-items-center print:bg-white">
    <router-view v-slot="{ Component }">
      <Suspense>
        <Suspense>
          <template #default>
            <div :key="$route.path" class="w-full">
              <component :is="Component"/>
            </div>
          </template>
          <template #fallback>
            <h3>Loading...</h3>
          </template>
        </Suspense>
      </Suspense>
    </router-view>
  </div>
  <Footer/>
</template>

<style scoped>

</style>