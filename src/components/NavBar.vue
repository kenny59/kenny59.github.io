<script setup lang="ts">
import { ref} from "vue";

const isNavBarOpen = ref<boolean>(false);
const items = ref([
  {
    name: "Resume", route: "cv"
  }
])
import link from './../assets/links.json';
let links = link.links;
import { inject } from 'vue'
let isDark = inject('darkMode')

</script>


<template>
  <div class="print:hidden w-full flex sticky top-0 z-10 items-center bg-columbia-blue dark:bg-gray-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
    <div class="mr-auto m-2 font-bold text-xl">
      <RouterLink :to="{name: 'home'}">
        Tibor.
      </RouterLink>
    </div>
    <div class="justify-center hidden sm:block">
      <ul class="flex sm:gap-3">
        <li v-for="item in items" class="flex items-center">
          <RouterLink :to="{name: item.route}">
            {{item.name}}
          </RouterLink>
        </li>
        <li @click="isDark = !isDark">
          <v-icon :name="isDark ? 'gi-sunrise' : 'gi-sunset'" scale="2"/>
        </li>
      </ul>
    </div>
    <div class="ml-auto m-2">
      <ul class="items-end sm:gap-1 mr-6 hidden sm:flex">
        <li onclick="window.print()">
          <v-icon name="io-print-sharp"/>
        </li>
        <li v-for="link in links" class="content-end">
          <a :href="link.url" target="_blank" class="dark:bg-slate-900 m-0.5 px-1 h-8 border-2 border-slate-400 dark:border-slate-500 rounded-md shadow-md text-black dark:text-white py-0.5 text-sm">
            <v-icon :name="link.icon"/>
          </a>
        </li>
      </ul>
      <button @click="() => isNavBarOpen = !isNavBarOpen" class="block sm:hidden">
          <v-icon v-if="isNavBarOpen" name="io-close" :fill="isDark ? 'white' : 'black'" scale="1.5"/>
          <v-icon v-else name="gi-hamburger-menu" :fill="isDark ? 'white' : 'black'" scale="1.5"/>
      </button>
    </div>
    <!-- Menu -->
    <div class="h-screen w-full bg-columbia-blue items-center absolute top-12 left-0 block sm:hidden dark:bg-gray-900 dark:text-white" :class="isNavBarOpen ? '' : 'hidden'">
      <ul class="flex flex-wrap sm:gap-2">
        <li v-for="item in items" class="w-full text-center py-1 border-b dark:border-gray-800">
          <RouterLink :to="{name: item.route}" @click="isNavBarOpen = false">
            {{item.name}}
          </RouterLink>
        </li>
        <li v-for="link in links" class="w-full text-center py-1 border-b dark:border-gray-800">
          <a :href="link.url" target="_blank" class="">
            <v-icon :name="link.icon"/> {{link.type}}
          </a>
        </li>
        <li class="w-full text-center pb-2 border-b" @click="isDark = !isDark">
          <v-icon :name="isDark ? 'gi-sunrise' : 'gi-sunset'" scale="2"/>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>

</style>