<template>
  <div class="flex flex-col items-start pt-3 gap-8 md:flex-row-reverse md:items-center md:justify-between">
    <img
      alt="Portrait"
      width="175"
      height="175"
      class="rounded-lg transition-transform duration-300 transform hover:scale-110"
      style="color: transparent;"
      src="/me.png"
    >
    <div class="flex flex-col">
      <h1 class="title text-4xl font-bold">
        Hey, I'm Hermann
      </h1>
      <p class="mt-4 font-medium text-[#848484]">
        19-year-old software developer & student from Switzerland🇨🇭
      </p>
      <div class="mt-8 flex items-center gap-8">
        <div class="flex gap-6">
          <a
            href="https://linkedin.com/in/hermannwitte"
            target="_blank"
            class="default-hover"
            title="LinkedIn"
          >
            <Icon
              name="uil:linkedin"
              size="24"
            />
          </a>
          <a
            href="https://github.com/Reconnact"
            target="_blank"
            class="default-hover"
            title="Github"
          >
            <Icon
              name="lucide:github"
              size="24"
            />
          </a>
          <a
            href="mailto:hermann.witte@alpha-lab.net"
            target="_blank"
            class="default-hover"
            title="E-Mail"
          >
            <Icon
              name="material-symbols:mail-outline-rounded"
              size="24"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>