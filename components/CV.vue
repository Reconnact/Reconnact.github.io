<template>
  <div class="py-14 relative text-[#f7f9fa]">
    <div class="mx-auto flex flex-col gap-2">
      <div class="flex w-full justify-evenly bg-[#303030] h-9 p-1 rounded-lg relative overflow-hidden">
        <div
          class="absolute mx-1 w-[48%] sm:w-[48.4%] h-7 bg-[#171717] rounded-md transition-all duration-300 ease-in-out"
          :class="{ 'slide-left': education, 'slide-right': work }"
        />

        <button
          class="w-full text-center m-auto rounded-md relative text-sm font-medium"
          @click="work = true; education = false;"
        >
          Work
        </button>
        <button
          class="w-full text-center m-auto rounded-md relative text-sm font-medium"
          @click="work = false; education = true;"
        >
          Education
        </button>
      </div>
      <div class="w-full border rounded-xl p-4 border-[#303030]">
        <ul class="ml-10 border-l border-[#303030]">
          <li
            v-for="cvPlace in cvActiveList"
            :key="cvPlace.name"
            class="relative ml-10 py-4"
          >
            <a
              target="_blank"
              class="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-slate-200"
              :href="cvPlace.href"
            >
              <span class="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12 border">
                <img
                  class="aspect-square h-[80%] object-contain m-auto"
                  :alt="cvPlace.name"
                  :src="cvPlace.src"
                  :class="cvPlace.srcClass" 
                >
              </span>
            </a>
            <div class="flex flex-1 flex-col justify-start gap-1">
              <time class="text-xs text-[#848484] font-medium">
                <span>{{ cvPlace.start }}</span>
                <span> - </span>
                <span>{{ cvPlace.end }}</span>
              </time>
              <h2 class="font-semibold leading-none">
                {{ cvPlace.name }}
              </h2>
              <p class="text-sm text-[#848484] font-medium">
                {{ cvPlace.description }}
              </p>
              <ul class="ml-4 list-outside list-disc">
                <li
                  v-for="note, i in cvPlace.notes"
                  :key="i"
                  class="prose pr-8 text-sm dark:prose-invert"
                >
                  {{ note }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const work = ref(true);
const education = ref(false);

const cvActiveList = computed(() => {
  return work.value ? workPlaceList : educationList;
});

const workPlaceList: Array<{ 
  name: string; 
  href: string; 
  src: string; 
  description: string; 
  start: string; 
  end: string; 
  notes: null; 
  srcClass?: string;
}> = [
  { 
    name: 'Digio AG', 
    href: 'https://www.digio.swiss', 
    src: '/digio.png', 
    description: 'Software Developer', 
    start: 'August 2024', 
    end: 'Present', 
    notes: null
  }, 
  { 
    name: 'Digio AG', 
    href: 'https://www.digio.swiss', 
    src: '/digio.png', 
    description: 'Intern - Software Developer', 
    start: 'August 2023', 
    end: 'July 2024', 
    notes: null
  }
];

const educationList: Array<{ 
  name: string; 
  href: string; 
  src: string; 
  description: string; 
  start: string; 
  end: string; 
  notes: null; 
  srcClass?: string; // Mark it as optional
}> = [
  { 
    name: 'Eastern Switzerland University of Applied Sciences', 
    href: 'https://www.ost.ch/en/', 
    src: '/ost.png', 
    srcClass: '!h-full',
    description: 'Bsc in Business Information Technology', 
    start: 'September 2024', 
    end: 'Present', 
    notes: null
  }, 
  { 
    name: 'Bildungszentrum Zürichsee', 
    href: 'https://www.bzz.ch/', 
    src: '/ims.png', 
    description: 'Information Technologist (Federal VET Diploma) - Specialization in Application Development', 
    start: 'August 2020', 
    end: 'July 2024', 
    notes: null
  }, 
  { 
    name: 'Kantonsschule Hottingen',
    href: 'https://www.ksh.ch/',
    src: '/ims.png',
    description: 'Professional Baccalaureate, Business and Services',
    start: 'August 2020',
    end: 'July 2024',
    notes: null
  }
];
</script>

<style lang="scss">
.slide-left {
  transform: translateX(52%);
}

.slide-right {
  transform: translateX(-52%);
} 
</style>
