<template>
    <div class="py-14">
      <div class="w-fit mx-auto flex flex-col gap-16">
        <div class="flex flex-col gap-5">
          <img
            src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a118854430d1d59670a_x.svg"
            class="mx-auto"
          />
          <img
            src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a51b07f22c423841fab_vertical-line.svg"
            class="mx-auto"
          />
        </div>
        <div class="flex flex-col items-center">
          <h1 class="text-center mb-10 text-white text-3xl">
            Technologies I like to work with
          </h1>
          <div class="flex flex-wrap justify-center gap-8">
            <div
              v-for="tech in technologies"
              :key="tech.name"
              class="group w-fit flex flex-col"
            >
              <nuxt-link :href="tech.link" target="_blank">
                <Icon :name="tech.icon" :size="80" />
              </nuxt-link>
              <span
                class="text-center text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <img
            src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a51b07f22c423841fab_vertical-line.svg"
            class="mx-auto"
          />
          <img
            src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b913a118854430d1d59670a_x.svg"
            class="mx-auto"
          />
        </div>
      </div>
    </div>
  </template>
  
  

<script setup lang="ts">
const technologies = [
    {icon: "skill-icons:golang", link: "https://go.dev/", name: "GoLang"},
    {icon: "logos:java", link: "https://www.java.com/", name: "Java"},
    {icon: "logos:postgresql", link: "https://www.postgresql.org/", name: "PostgreSQL"},
    {icon: "devicon:typescript", link: "https://www.typescriptlang.org/", name: "TypeScript"},
    {icon: "logos:nuxt-icon", link: "https://nuxt.com/", name: "Nuxt"},
    {icon: "logos:aws", link: "https://aws.amazon.com/", name: "AWS"},
    
]
</script>

<style scoped lang="scss">
div :deep(svg) {
    @apply hover:cursor-pointer;
}
</style>