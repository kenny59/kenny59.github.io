<script setup lang="ts">
import TimelineStack from "./TimelineSkill.vue";

import moment from "moment/moment";
const props = defineProps(['data'])

</script>

<template>
  <div class="relative min-h-[150px] border-slate-800 rounded-md mt-2 pb-2 bg-[#A5C1D1] bg-opacity-50 dark:bg-slate-800 dark:text-white">
    <!-- Start Date -->
    <div class="px-4 border-b-2 border-b-[#668589] text-center bg-columbia-blue rounded-t-md dark:text-white dark:bg-slate-900 text-sm">
      {{moment(props.data.startDate).format('YYYY MMMM DD')}} - {{moment(props.data.endDate || undefined).format('YYYY MMMM DD')}}
    </div>
    <!-- Position -->
    <div class="px-4 font-semibold text-md">
      {{props.data.position}}
    </div>
    <div class="px-4 font-medium text-sm my-2" v-if="props.data.company">
      <div class="">
        {{props.data.company}}
      </div>
      <div class="">
        <v-icon name="md-locationcity-outlined"/> {{props.data.location}}
      </div>
    </div>
    <!-- Description -->
    <div class="px-4 text-xs">
      {{props.data.shortDescription}}
    </div>
    <!-- Stacks -->
    <div class="px-4">
      <TimelineStack :stackItems="props.data.stacks"/>
    </div>
  </div>

</template>

<style scoped>

</style>