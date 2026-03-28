<script setup lang="ts">
import { computed, ref } from 'vue';

type Project = {
  title: string
  description: string
  technologies: string[]
  href?: string
  github?: string
  status?: string
  image?: string
  details?: string
}

const props = defineProps<{
  projects?: Project[]
}>();

const defaultProjects: Project[] = [
  {
    title: 'Berührt im Sein',
    description:
      'A minimal, well-structured website with clear UX and semantic layout, designed to present holistic therapy services and guide users toward contact conversion.',
    technologies: ['Nuxt'],
    href: 'https://beruehrtimsein.ch/',
    status: 'Live',
  },
  {
    title: "Lozy's Portfolio",
    description:
      'A creative portfolio for an artist, focused on showcasing visual work with a unique and engaging design.',
    technologies: ['Nuxt', 'TypeScript', 'Tailwind'],
    href: 'https://lozy.work',
    github: 'https://github.com/lozywork/lozywork.github.io',
    status: 'Live',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A personal portfolio built with Nuxt and Tailwind, focused on minimal design and smooth interactions.',
    technologies: ['Nuxt', 'TypeScript', 'Tailwind'],
    href: '/',
    github: 'https://github.com/Reconnact/Reconnact.github.io',
    status: 'Live',
  },
  {
    title: 'Magic Mirror',
    description: 'A self-built smart mirror with a Raspberry Pi and a custom dashboard.',
    technologies: ['Raspberry Pi', 'Hardware'],
    status: 'Private',
    image: '/mirror.png',
    details:
      "This project is a personal smart mirror built using a Raspberry Pi. It features a custom dashboard that displays the time, weather, calendar events, spotify, and my daily tasks. The mirror is designed to be sleek and minimal, blending seamlessly into the home environment while providing useful information at a glance. The project involved both hardware assembly and software development, including setting up the Raspberry Pi, designing the dashboard interface, and programming the functionality to fetch and display the relevant data. It's a great example of a DIY smart home project that combines technology and design.",
  },
];

const projectList = computed(() =>
  props.projects?.length ? props.projects : defaultProjects,
);

const selectedProject = ref<Project | null>(null);
const modalOpen = ref(false);

function openProject(project: Project) {
  if (project.href) {
    window.open(project.href, '_blank', 'noopener,noreferrer');
    return;
  }
  selectedProject.value = project;
  modalOpen.value = true;
}

function onModalClose() {
  modalOpen.value = false;
  selectedProject.value = null;
}
</script>

<template>
  <div class="flex flex-col pb-14">
    <h1 class="title text-3xl font-bold">
      Projects
    </h1>

    <p class="mt-2 max-w-xl font-medium text-[#848484]">
      A selection of projects I've worked on in my free time.
    </p>

    <div class="mt-8 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
      <article
        v-for="project in projectList"
        :key="project.title"
        class="group flex h-full flex-col rounded-xl border border-[#303030] bg-[#171717] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a4a4a] cursor-pointer"
        @click="openProject(project)"
      >
        <div class="flex flex-1 flex-col">
          <div>
            <h2 class="text-base font-semibold text-[#f7f9fa]">
              {{ project.title }}
            </h2>
            <p
              v-if="project.status"
              class="mt-0.5 text-xs font-medium uppercase tracking-wide text-[#848484]"
            >
              {{ project.status }}
            </p>
          </div>

          <p class="mt-3 text-sm leading-6 text-[#848484]">
            {{ project.description }}
          </p>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="rounded-md border border-[#303030] bg-[#222222] px-2.5 py-1 text-xs font-medium text-[#848484]"
          >
            {{ tech }}
          </span>
        </div>

        <div class="mt-5 flex items-center gap-4">
          <a
            v-if="project.href"
            :href="project.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-[#f7f9fa] transition-opacity duration-200 hover:opacity-70"
            @click.stop
          >
            Live →
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-[#848484] transition-opacity duration-200 hover:text-[#f7f9fa]"
            @click.stop
          >
            Code →
          </a>
          <button
            v-if="!project.href"
            class="text-sm font-medium text-[#f7f9fa] transition-opacity duration-200 hover:opacity-70"
            @click.stop="openProject(project)"
          >
            View →
          </button>
        </div>
      </article>
    </div>

    <Modal
      :model-value="modalOpen"
      @update:model-value="onModalClose"
    >
      <template #header>
        <h2 class="text-xl font-semibold text-[#f0f0f0]">
          {{ selectedProject?.title }}
        </h2>
      </template>

      <img
        v-if="selectedProject?.image"
        :src="selectedProject.image"
        :alt="selectedProject.title"
        class="mb-6 w-full rounded-xl border border-[#222] object-cover"
        style="max-height: 320px;"
      >

      <p class="text-base leading-7 font-medium text-[#848484]">
        {{ selectedProject?.details || selectedProject?.description }}
      </p>

      <div class="mt-7 flex items-center justify-between gap-4 border-t border-[#1f1f1f] pt-6">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in selectedProject?.technologies"
            :key="tech"
            class="rounded-md border border-[#252525] bg-[#1a1a1a] px-3 py-1 text-sm text-[#848484]"
          >
            {{ tech }}
          </span>
        </div>

        <a
          v-if="selectedProject?.github"
          :href="selectedProject.github"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 text-sm font-medium text-[#848484] transition hover:text-[#f0f0f0]"
        >
          Code →
        </a>
      </div>
    </Modal>
  </div>
</template>