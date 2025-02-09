<template>
  <div class="flex flex-col px-4">
    <h1 class="title text-4xl font-bold">
      Current technologies
    </h1>
    <p class="mt-2 font-medium text-[#848484] max-w-xl">
      I work with a variety of modern technologies to bring my projects to life. These are the technologies I currently use the most.
    </p>
    <div class="mt-8 grid grid-cols-2 sm:grid-cols-6 gap-x-12 gap-y-8 items-center">
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="flex justify-center"
      >
        <div class="group flex flex-col items-center w-[60px]">
          <nuxt-link
            :href="tech.link"
            target="_blank"
            class="text-[#848484] hover:text-[#203F4D] transition-color duration-500 h-fit"
          >
            <Icon
              :name="tech.icon"
              size="60"
            />
          </nuxt-link>
          <span
            class="text-center text-sm font-semibold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const technologies = [
  {icon: 'file-icons:go', link: 'https://go.dev/', name: 'GoLang'},
  {icon: 'ri:java-fill', link: 'https://www.java.com/', name: 'Java'},
  {icon: 'akar-icons:postgresql-fill', link: 'https://www.postgresql.org/', name: 'PostgreSQL'},
  {icon: 'lineicons:typescript', link: 'https://www.typescriptlang.org/', name: 'TypeScript'},
  {icon: 'lineicons:nuxt', link: 'https://nuxt.com/', name: 'Nuxt'},
  {icon: 'mdi:docker', link: 'https://www.docker.com/', name: 'Docker'},
    
];
</script>

<style scoped lang="scss">
div :deep(svg) {
    @apply hover:cursor-pointer;
}
</style>