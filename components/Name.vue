<template>
    <div class="absolute bottom-2 w-full text-white">
        <div class="marquee">
            <h1 class="marquee__content">
            Hermann Witte -
            </h1>

            <h1 aria-hidden="true" class="marquee__content">
            Hermann Witte -
            </h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  height: fit-content;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  width: 100%;
  animation: scroll 10s linear infinite;
}

h1 {
    font-size: max(13.8vw);
    line-height: normal;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>