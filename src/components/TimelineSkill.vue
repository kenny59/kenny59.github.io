<script setup lang="ts">
const props = defineProps(['stackItems'])

</script>

<template>
  <div class="flex flex-wrap my-2"
       v-for="stacks in props.stackItems">
    <div v-for="stack in stacks" class="bg-green-300 dark:bg-green-900 m-0.5 px-1 h-8 border-2 border-slate-400 dark:border-slate-500 shadow-md rounded-md content-center text-xs">
      {{stack}}
    </div>
  </div>
</template>

<style scoped>

</style>