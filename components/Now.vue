<template>
  <div class="flex flex-col pb-14">
    <h1 class="title text-3xl font-bold">
      What I'm working on
    </h1>
    <div class="flex flex-col gap-12 mt-8 text-[#b6b5b5]">
      <div
        v-for="(item, i) in workItems"
        :key="i"
        class="p-4 rounded-xl text-sm bg-[#171717] border border-[#303030] w-[55%] h-40"
        :class="[i%2 == 0 ? 'mr-auto' : 'ml-auto' ]"
      >
        <h3 class="text-xl font-semibold">
          {{ item.name }}
        </h3>
        <span>
          {{ item.description }}
        </span>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const workItems = [
  {name: 'Studies', description: "I'm currently studying business informatics at the HTW in Berlin. Blablabla"},
  {name: 'Work', description: 'Blablabla'},
  {name: 'Projects', description: 'Blablabla'},
    
];
</script>

<style scoped lang="scss">
div :deep(svg) {
    @apply hover:cursor-pointer;
}
</style>