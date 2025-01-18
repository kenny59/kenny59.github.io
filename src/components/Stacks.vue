<script setup lang="ts">
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import StackItem from "@/components/StackItem.vue";
import stacks from '../assets/stacks.json';

let serverside = stacks.stacks.serverside;
let clientside = stacks.stacks.clientside;
let devops = stacks.stacks.devops;
let testing = stacks.stacks.testing;

serverside.sort((a, b) => Number(a.experience) - Number(b.experience)).reverse();
clientside.sort((a, b) => Number(a.experience) - Number(b.experience)).reverse();
devops.sort((a, b) => Number(a.experience) - Number(b.experience)).reverse();
testing.sort((a, b) => Number(a.experience) - Number(b.experience)).reverse();

</script>

<template>
  <Tabs default-value="serverside" class="w-full my-10 sm:px-0">
    <TabsList class="w-full grid sm:flex grid-cols-1 bg-[#B2CFD8] border-slate-200 dark:border-slate-700 border dark:bg-slate-800">
      <TabsTrigger value="serverside" class="sm:w-1/4">
        Server-side
      </TabsTrigger>
      <TabsTrigger value="clientside" class="sm:w-1/4">
        Client-side
      </TabsTrigger>
      <TabsTrigger value="devops" class="sm:w-1/4">
        DevOps
      </TabsTrigger>
      <TabsTrigger value="testing" class="sm:w-1/4">
        Testing
      </TabsTrigger>
    </TabsList>
    <TabsContent value="serverside" class="rounded-md border-slate-200 dark:border-slate-800 border p-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <StackItem :item="stack" v-for="stack in serverside"/>
      </div>
    </TabsContent>
    <TabsContent value="clientside" class="rounded-md border-slate-200 dark:border-slate-800 border p-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <StackItem :item="stack" v-for="stack in clientside"/>
      </div>
    </TabsContent>
    <TabsContent value="devops" class="rounded-md border-slate-200 dark:border-slate-800 border p-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <StackItem :item="stack" v-for="stack in devops"/>
      </div>
    </TabsContent>
    <TabsContent value="testing" class="rounded-md border-slate-200 dark:border-slate-800 border p-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <StackItem :item="stack" v-for="stack in testing"/>
      </div>
    </TabsContent>
  </Tabs>

</template>

<style scoped>

</style>