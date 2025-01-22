<template>
  <div class="w-full my-10 p-6 border-slate-200 border dark:border-slate-50 dark:border-opacity-10 rounded-md dark:text-white">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
      <div class="col-auto">
        <div class="text-2xl font-extralight text-center">
          Professional Experience
        </div>
        <ul class="timeline">
          <li v-for="timelineItem in timelineData" class="">
            <TimelineItem :data="timelineItem"/>
          </li>
        </ul>
      </div>
      <div :class="'min-w-['+canvasData.width+']'" class="hidden lg:block col-span-1">
        <canvas id="canvas" :height="canvasData.height+100" :width="canvasData.width" class="" />
      </div>
      <div class="col-auto">
        <div class="text-2xl font-extralight text-center">
          Personal Projects
        </div>
        <ul class="timeline">
          <li v-for="timelineItem in personalProjects" class="">
            <TimelineItem :data="timelineItem"/>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>

<script lang="ts" setup>
import _ from 'lodash';
import TimelineAnimation from "./timeline-animation";
import {onMounted, onUnmounted} from "vue";
import timeline from '../assets/timeline.json';
import TimelineItem from "./TimelineItem.vue";
import moment from "moment/moment";
let timelineAnimation : TimelineAnimation;
let timelineData = timeline.timeline.filter(item => item.type === "professional");
timelineData.sort((a, b) => moment(a.startDate).diff(moment(b.startDate)));
let personalProjects = timeline.timeline.filter(item => item.type === "personal");
personalProjects.sort((a, b) => moment(a.startDate).diff(moment(b.startDate)));
let canvasData = {
  height: 1300,
  width: 350,
  steps: 10
};
let pointCount = (canvasData.height) / canvasData.steps;
let firstStartDate = _.minBy(timeline.timeline.map(item => item.startDate));
let lastEndDate = _.maxBy(timeline.timeline.map(item => item.endDate));
let datesDifference = moment(lastEndDate).diff(moment(firstStartDate), 'days');
let datesOnRange = timeline.timeline.map(item => {
  let startDateFirstStartDateDiff = moment(item.startDate).diff(moment(firstStartDate), 'days');
  let op = (startDateFirstStartDateDiff > datesDifference / 2) ? 1 : 1.20;
  return {
    dateIndex: startDateFirstStartDateDiff / datesDifference * pointCount * op,
    y: startDateFirstStartDateDiff / datesDifference * canvasData.height * op,
    lineIndex: item.type === "professional" ? 0 : 1,
    height: item.height
  }
})
datesOnRange.sort((a, b) => moment(a).diff(moment(b)))
onMounted(() => {
  const canvas = document.getElementById("canvas");
  let lines = [
    {x: 150, color: "#2323ff", index: 0}, // professional
    {x: 200, color: "#ff073a", index: 1}, // personal
  ]
  let personalHeights = 50;
  let professionalHeights = 50;
  let timeLineItems = datesOnRange.map(point => {
    if(point.y === 0) point.y = 50;
    if(point.dateIndex === 0) point.dateIndex = 35;
    if(point.lineIndex === 1) {
      personalHeights += 50 * point.height;
    } else {
      professionalHeights += 50 * point.height;
    }
    return {
      x: point.lineIndex === 1 ? 320 : 30,
      y: point.lineIndex === 1 ? personalHeights : professionalHeights,
      pointIndex: Math.floor(point.dateIndex),
      lineIndex: point.lineIndex
    }
  });
  let startYear = moment(firstStartDate).year();
  let endYear = moment().year();
  timelineAnimation = new TimelineAnimation(canvas, lines, timeLineItems, canvasData, startYear, endYear);
  timelineAnimation.animate(0);
});
onUnmounted(() => {
  timelineAnimation.cancel();
})
</script>