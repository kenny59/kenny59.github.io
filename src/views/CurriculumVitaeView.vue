<script setup lang="ts">
import { Separator } from '@/components/ui/separator'

</script>

<template>
<div class="w-full mt-4 print:text-black">
  <div class="font-bold text-2xl content-left">
    Tibor Szűcs
  </div>
  <div class="flex font-light items-center gap-4 text-lg">
    <div class="font-mono">kenny59hun@gmail.com</div>
    <div class="flex items-center gap-1"><v-icon name="bi-phone"/>+36/20 388-8577</div>
    <div class="flex items-center gap-1"><v-icon name="co-location-pin"/> Budapest, Hungary</div>
  </div>
  <Separator class="dark:bg-white print:bg-slate-900" orientation="horizontal"/>
  <div class="text-xl font-mono font-bold uppercase mt-4">
    Experience
  </div>
  <Separator class="dark:bg-white print:bg-slate-900" orientation="horizontal"/>
  <div class="flex">
    <div class="flex-grow text-start font-semibold">
      DHL IT Services s.r.o.
    </div>
    <div class="flex-grow text-end">
      October, 2018 - December, 2024
    </div>
  </div>
  <div class="flex">
    <div class="flex-grow text-start italic">
      Software Engineer, promoted after 1 year of being in a Graduate Trainee programme
    </div>
    <div class="flex-grow text-end">
      Prague, Czech Republic
    </div>
  </div>
  <ul class="list-disc list-inside">
    <li class="mt-0.5">Worked as part of an Agile team, allowing seamless integration and deployment through continuous  delivery practices.</li>
    <li class="mt-0.5">Developed, refactored and maintained multiple web applications and web services.</li>
    <li class="mt-0.5">Created user-friendly responsive interfaces using <span>React</span> and <span>TailwindCSS</span></li>
    <li class="mt-0.5">Proactively introduced new technologies for legacy applications that sped up development and deployment time significantly</li>
    <li class="mt-0.5">Oversaw whole lifecycle of each project, from development to deployment</li>
  </ul>
  <div class="flex">
    <div class="flex-grow text-start font-semibold">
      Robert Bosch Elektronika Kft.
    </div>
    <div class="flex-grow text-end">
      May, 2016 - October, 2018
    </div>
  </div>
  <div class="flex">
    <div class="flex-grow text-start italic">
      Internship
    </div>
    <div class="flex-grow text-end">
      Hatvan, Hungary
    </div>
  </div>
  <ul class="list-disc list-inside">
    <li class="mt-0.5">Automated manual tasks and wrote support applications for recurring issues</li>
  </ul>
  <div class="text-xl font-mono font-bold uppercase mt-4">
    Skills
  </div>
  <Separator class="dark:bg-white print:bg-slate-900" orientation="horizontal"/>
  <ul class="list-disc list-inside">
    <li class="mt-0.5">Languages: Java, Javascript, PL/SQL, Typescript, Kotlin, Rust, C++, C#, Python</li>
    <li class="mt-0.5">Frontend: Vue.js, React, Angular, Bootstrap, MUI</li>
    <li class="mt-0.5">Backend: Spring Boot, Express.js, Laravel</li>
    <li class="mt-0.5">Mobile: Flutter, React Native</li>
    <li class="mt-0.5">Relational Databases: Oracle, PostgreSQL, MySQL, Hibernate, Spring Data, Prisma, Sequelize</li>
    <li class="mt-0.5">NoSQL Databases: MongoDB, Firebase</li>
    <li class="mt-0.5">CI/CD: Jenkins, Github Actions</li>
    <li class="mt-0.5">Cloud: AWS, Rancher</li>
    <li class="mt-0.5">Containerization: Docker, Kubernetes</li>
    <li class="mt-0.5">APIs: REST, SOAP, WS, MQTT</li>
    <li class="mt-0.5">Testing: JUnit, Mockito, Jest, Mocha, Cypress, Selenium</li>
  </ul>
  <div class="text-xl font-mono font-bold uppercase mt-4">
    Education
  </div>
  <Separator class="dark:bg-white print:bg-slate-900" orientation="horizontal"/>
  <div class="flex">
    <div class="flex-grow text-start">
      <div>
        Bánki Donát Gépész és Biztonságtechnikai Mérnöki Kar
      </div>
      <div class="italic">
        BSc Mechatronical Engineering
      </div>
    </div>
    <div class="flex-grow text-end">
      <div>
        Budapest, Hungary
      </div>
      <div>
        2013 - 2018
      </div>
    </div>
  </div>
  <div class="text-xl font-mono font-bold uppercase mt-4">
    Languages
  </div>
  <Separator class="dark:bg-white print:bg-slate-900" orientation="horizontal"/>
  <div class="flex">
    <div class="flex-grow text-start">
      English
    </div>
    <div class="flex-grow text-end">
      <v-icon name="io-star"/>
      <v-icon name="io-star"/>
      <v-icon name="io-star"/>
      <v-icon name="io-star"/>
    </div>
  </div>
  <div class="flex">
    <div class="flex-grow text-start">
      Czech
    </div>
    <div class="flex-grow text-end">
      <v-icon name="io-star"/>
    </div>
  </div>
</div>

</template>

<style scoped>

</style>