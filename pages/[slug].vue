<template>
  <div class="content-body mx-auto flex max-w-3xl min-h-screen flex-col px-8 text-center">
    <div class="m-auto text-3xl text-[#848484]">
      <span class="text-6xl">404</span><br><br>
      Oops... this site doesn't exist.<br><br>
      <button
        class="flex mx-auto border-[#303030] border-2 p-1 px-4 rounded-lg text-2xl font-medium hover:text-white hover:border-white transition-all duration-300 ease-in-out"
        @click="$router.push('/')"
      >
        Home
      </button>
    </div>
  </div>
</template>