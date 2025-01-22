<script setup lang="ts">
import { useDark } from '@vueuse/core'
import {provide} from "vue";

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
  disableTransition: false
})

provide('darkMode', isDark);
</script>

<template>
  <div :class="{ dark: isDark }" class="justify-center justify-items-center dark:bg-slate-900">
    <router-view/>
  </div>
</template>

<style>
@keyframes floatup {
  0% {
    transform: translateY(0) rotate(30deg);
  }
  50% {
    transform: translateY(-50%) rotate(120deg);
  }
  100% {
    transform: translateY(-100%) rotate(240deg);
  }
}
</style>