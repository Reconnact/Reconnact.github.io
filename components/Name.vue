<template>
  <div class="absolute bottom-44 w-full text-white">
    <div class="marquee">
      <h1
        ref="marquee_1"
        class="marquee__content"
      >
        Hermann Witte -
      </h1>
      <h1
        ref="marquee_2"
        aria-hidden="true"
        class="marquee__content"
      >
        Hermann Witte -
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.pauseMarqueeAnimation();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    pauseMarqueeAnimation() {
      this.$refs.marquee_1.style.animationPlayState = 'paused';
      this.$refs.marquee_2.style.animationPlayState = 'paused';
    },
    handleScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const reverseTranslation = -scrollPosition % window.innerWidth; 
      this.$refs.marquee_1.style.transform = `translateX(${reverseTranslation}px)`;
      this.$refs.marquee_2.style.transform = `translateX(${reverseTranslation}px)`;
    },
  },
};
</script>

<style scoped lang="scss">
.marquee {
  z-index: 100;
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
}

h1 {
    font-size: max(14vw);
    line-height: normal;
}
</style>

