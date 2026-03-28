<script setup lang="ts">
import { computed, ref, watch } from 'vue';

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

function openProject(project: Project) {
  if (project.href) return;
  selectedProject.value = project;
}

function closeProject() {
  selectedProject.value = null;
}

watch(selectedProject, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
});
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
        class="group flex h-full flex-col rounded-xl border border-[#303030] bg-[#171717] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4a4a4a]"
        :class="!project.href ? 'cursor-pointer' : ''"
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

          <p class="mt-3 text-sm leading-6 text-[#b0b0b0]">
            {{ project.description }}
          </p>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="rounded-md border border-[#303030] bg-[#222222] px-2.5 py-1 text-xs font-medium text-[#d1d1d1]"
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

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/40 backdrop-blur-[2px]"
          @click.self="closeProject"
        >
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-3 scale-[0.99]"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-3 scale-[0.99]"
          >
            <div
              v-if="selectedProject"
              class="flex w-full max-w-2xl max-h-[85vh] flex-col rounded-2xl border border-[#2a2a2a] bg-[#161616] shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
              @click.stop
            >
              <!-- Header -->
              <div class="flex shrink-0 items-start justify-between gap-4 border-b border-[#222] px-7 py-6">
                <div>
                  <h2 class="text-xl font-semibold text-[#f0f0f0]">
                    {{ selectedProject.title }}
                  </h2>
                  <p class="mt-1.5 text-sm text-[#505050]">
                    {{ selectedProject.technologies.join(' · ') }}
                  </p>
                </div>

                <button
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#505050] transition hover:text-[#aaa]"
                  aria-label="Close"
                  @click="closeProject"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>

              <!-- Body -->
              <div class="overflow-y-auto px-7 py-6">
                <img
                  v-if="selectedProject.image"
                  :src="selectedProject.image"
                  :alt="selectedProject.title"
                  class="mb-6 w-full rounded-xl border border-[#222] object-cover"
                  style="max-height: 320px;"
                >

                <p class="text-base leading-7 text-[#808080]">
                  {{ selectedProject.details || selectedProject.description }}
                </p>

                <div class="mt-7 flex items-center justify-between gap-4 border-t border-[#1f1f1f] pt-6">
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in selectedProject.technologies"
                      :key="tech"
                      class="rounded-md border border-[#252525] bg-[#1a1a1a] px-3 py-1 text-sm text-[#555]"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <a
                    v-if="selectedProject.github"
                    :href="selectedProject.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="shrink-0 text-sm font-medium text-[#848484] transition hover:text-[#f0f0f0]"
                  >
                    Code →
                  </a>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>