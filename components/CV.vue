<template>
  <div class="py-14 relative text-[#f7f9fa]">
    <div class="mx-auto flex flex-col gap-2">
      <div class="flex w-full justify-evenly bg-white/[0.06] border border-white/[0.06] h-9 p-1 rounded-lg relative overflow-hidden">
        <div
          class="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] rounded-md transition-transform duration-300 ease-in-out"
          :class="{ 'translate-x-full': education }"
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
      <div class="glass w-full rounded-xl p-4">
        <Transition
          name="cv"
          mode="out-in"
        >
          <ul
            :key="work ? 'work' : 'education'"
            class="ml-10 border-l border-white/10"
          >
            <li
              v-for="cvPlace in cvActiveList"
              :key="cvPlace.name + cvPlace.start"
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
              </div>
            </li>
          </ul>
        </Transition>
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

type CvPlace = {
  name: string;
  href: string;
  src: string;
  description: string;
  start: string;
  end: string;
  srcClass?: string;
};

const workPlaceList: CvPlace[] = [
  {
    name: 'Digio AG',
    href: 'https://www.digio.swiss',
    src: '/digio.png',
    description: 'Software Developer',
    start: 'August 2024',
    end: 'Present',
  },
  {
    name: 'Digio AG',
    href: 'https://www.digio.swiss',
    src: '/digio.png',
    description: 'Intern - Software Developer',
    start: 'August 2023',
    end: 'July 2024',
  }
];

const educationList: CvPlace[] = [
  {
    name: 'University of Applied Sciences',
    href: 'https://www.htw-berlin.de/en/',
    src: '/htw.png',
    srcClass: '!h-3/4',
    description: 'Bsc in Business Information Technology',
    start: 'October 2025',
    end: 'Present',
  },
  {
    name: 'Eastern Switzerland University of Applied Sciences',
    href: 'https://www.ost.ch/en/',
    src: '/ost.png',
    srcClass: '!h-full',
    description: 'Bsc in Business Information Technology',
    start: 'September 2024',
    end: 'September 2025',
  },
  {
    name: 'Bildungszentrum Zürichsee',
    href: 'https://www.bzz.ch/',
    src: '/ims.png',
    description: 'Information Technologist (Federal VET Diploma) - Specialization in Application Development',
    start: 'August 2020',
    end: 'July 2024',
  },
  {
    name: 'Kantonsschule Hottingen',
    href: 'https://www.ksh.ch/',
    src: '/ims.png',
    description: 'Professional Baccalaureate, Business and Services',
    start: 'August 2020',
    end: 'July 2024',
  }
];
</script>

<style lang="scss">
.cv-enter-active,
.cv-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.cv-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.cv-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
