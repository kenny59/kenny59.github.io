<script setup lang="ts">
defineProps<{
  item?: any
}>()
</script>

<template>
  <!-- TODO hover effect? -->
<div class="flex p-0.5 sm:p-2 m-0.5 sm:m-1 rounded-md border-slate-200 dark:border-slate-800 border">
  <div class="content-center">
    <v-icon :name="item.icon" scale="2"/>
  </div>
  <div class="content-center ml-2 text-sm">
    {{item.title}}
  </div>
  <div v-if="item.experience" class="ml-auto content-center pr-2">
    {{item.experience}} years
  </div>
  <div v-else class="ml-auto content-center">
    < 1 year
  </div>
</div>
</template>

<style scoped>

</style>