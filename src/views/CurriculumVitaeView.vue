<script setup lang="ts">
import {type Ref, ref} from "vue";
import { Separator } from '@/components/ui/separator'
import type {CV} from "@/interfaces/cv.ts";

const props = defineProps({
  lang: String
});
const {lang} = props;

let cv : Ref<CV | undefined> = ref(undefined);

let formatBullets = (cvObject: CV | undefined) => {
  cvObject?.jobs?.forEach((job, jobIndex) => {
    job.jobBullets.forEach((bullet, bulletIndex) => {
      cvObject?.highlightedWords.forEach(highlightedWord => {
        bullet = bullet.replace(highlightedWord, `<span class="font-semibold">${highlightedWord}</span>`);
      })
      cvObject.jobs[jobIndex].jobBullets[bulletIndex] = bullet;
    })
  });
  cvObject?.skills?.forEach((skill, skillIndex) => {
    cvObject?.highlightedWordsSkills.forEach(highlightedWord => {
      skill = skill.replace(new RegExp(`\\b${highlightedWord}\\b`, "i"), `<span class="font-semibold">${highlightedWord}</span>`);
    })
    cvObject.skills[skillIndex] = skill;

  })
  console.log(cvObject)
  cv.value = cvObject;
}

if(lang === "en") {
  cv.value = await (await fetch('../cv.json')).json();
  formatBullets(cv.value);
} else {
  cv.value = await (await fetch('../cvHun.json')).json();
  formatBullets(cv.value);
}

</script>

<template>
<div class="w-full mt-4 print:mt-0 print:text-black relative">
  <div class="flex">
    <div>
      <div class="font-bold text-2xl content-left">
      {{cv?.name}}
      </div>
      <div class="flex flex-wrap font-light items-center gap-x-2 text-lg py-2">
        <div class="flex items-center gap-1 -my-0.5">
          <v-icon name="bi-phone"/>
          <a :href="`tel:${cv?.tel}`">
            {{cv?.telFormatted}}
          </a>
        </div>
        <div class="flex items-center gap-1 -my-0.5">
          <v-icon name="co-gmail"/>
          <a :href="`mailto:${cv?.email}`">
            {{cv?.email}}
          </a>
        </div>
        <div class="flex items-center gap-1 -my-0.5">
          <v-icon name="co-location-pin"/>
          {{cv?.location}}
        </div>
        <div class="flex items-center gap-1 -my-0.5">
          <v-icon name="co-github"/>
          <a :href="cv?.github" target="_blank">
            {{cv?.github}}
          </a>
        </div>
        <div class="flex items-center gap-1 -my-0.5">
          <v-icon name="bi-globe2"/>
          <a :href="cv?.website" target="_blank">
            {{cv?.website}}
          </a>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 ml-auto relative print:top-0 -top-2 right-0">
      <img src="/profile.jpg" class="print:hidden object-cover w-32 h-32 rounded-full border-4 border-slate-700"/>
      <img src="/profile_print.jpg" class="hidden print:block object-cover w-32 h-32 rounded-full border-4 border-slate-700"/>
    </div>
  </div>
  <Separator class="print:hidden dark:bg-white print:dark:bg-slate-900" orientation="horizontal"/>
  <div class="text-xl font-mono font-bold uppercase print:-mt-2 mt-2">
    {{cv?.experienceLabel}}
  </div>
  <Separator class="dark:bg-white print:dark:bg-slate-900" orientation="horizontal"/>
  <div v-for="job in cv?.jobs">
    <div class="flex">
      <div class="flex-grow text-start font-semibold">
        {{job.company}}
      </div>
      <div class="flex-grow text-end">
        {{job.from}} - {{job.to}}
      </div>
    </div>
    <div class="flex">
      <div class="flex-grow text-start italic">
        {{job.position}}
      </div>
      <div class="flex-grow text-end flex-shrink-0">
        {{job.location}}
      </div>
    </div>
    <ul class="list-disc list-inside">
      <li class="mt-0.5" v-for="bullet in job.jobBullets" v-html="bullet"></li>
    </ul>
  </div>
  <!--  <div class="flex">-->
  <!--    <div class="flex-grow text-start font-semibold">-->
  <!--      Robert Bosch Elektronika Kft.-->
  <!--    </div>-->
  <!--    <div class="flex-grow text-end">-->
  <!--      May, 2016 - October, 2018-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  <div class="flex">-->
  <!--    <div class="flex-grow text-start italic">-->
  <!--      Internship-->
  <!--    </div>-->
  <!--    <div class="flex-grow text-end">-->
  <!--      Hatvan, Hungary-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  <ul class="list-disc list-inside">-->
  <!--    <li class="mt-0.5">Automated manual tasks and wrote support applications for recurring issues</li>-->
  <!--  </ul>-->
  <div class="text-xl font-mono font-bold uppercase print:mt-1 mt-2">
    {{cv?.skillsLabel}} <span class="font-light normal-case text-lg">({{cv?.skillsLabelHint}})</span>
  </div>
  <Separator class="dark:bg-white print:dark:bg-slate-900" orientation="horizontal"/>
  <ul class="list-disc list-inside">
    <li class="mt-0.5 md:whitespace-nowrap print:whitespace-nowrap" v-for="skill in cv?.skills" v-html="skill"></li>
  </ul>
  <div class="text-xl font-mono font-bold uppercase mt-2">
    {{cv?.educationLabel}}
  </div>
  <Separator class="dark:bg-white print:dark:bg-slate-900" orientation="horizontal"/>
  <div>
    <div class="flex" v-for="education in cv?.educations">
      <div class="flex-grow text-start">
        <div>
          {{education.institution}}
        </div>
        <div class="italic">
          {{education.major}}
        </div>
      </div>
      <div class="flex-grow text-end">
        <div>
          {{education.location}}
        </div>
        <div>
          {{education.from}} - {{education.to}}
        </div>
      </div>
    </div>
  </div>
  <div class="text-xl font-mono font-bold uppercase print:mt-1 mt-2">
    {{cv?.languagesLabel}}
  </div>
  <Separator class="dark:bg-white print:dark:bg-slate-900" orientation="horizontal"/>
  <div class="flex" v-for="language in cv?.languages">
    <div class="flex-grow text-start">
      {{language.name}}
    </div>
    <div class="flex-grow text-end">
      <v-icon name="io-star" v-for="_n in language.proficiency"/>
    </div>
  </div>
  <div class="text-xl font-mono font-bold uppercase print:mt-1 mt-2">
    {{cv?.hobbiesLabel}}
  </div>
  <Separator class="dark:bg-white print:dark:bg-slate-900" orientation="horizontal"/>
  <ul class="list-none list-inside">
    <li class="mt-0.5">
      {{cv?.hobbies}}
    </li>
  </ul>
</div>

</template>

<style scoped>

</style>