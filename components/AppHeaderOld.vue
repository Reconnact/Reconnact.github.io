<template>
  <div class="absolute w-full px-3 sm:px-10 py-10 top-0 left-0 z-50 flex justify-between text-lg">
    <nuxt-link
      ref="creator"
      class="flex px-6 gap-2"
      to="/"
    >
      <Icon
        name="la:copyright"
        size="20"
        class="my-auto"
      /><span>HERMANN WITTE</span>
    </nuxt-link>
    <!--<div>
      <ul class="flex px-6 gap-10">
        <li>
          <nuxt-link to="/work">
            Work
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>-->
  </div>
  <div class="hanger z-50 hidden md:inline-block">
    <p class="pl-12 text-[18px]">
      <span>Located</span><br>
      <span>in Switzerland</span>
    </p>
    <svg
      width="auto"
      height="110px"
      viewBox="0 0 300 121"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>Combined Shape</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(0.000000, -366.000000)"
          fill="#1C1D20"
        >
          <g
            id="Group"
            transform="translate(149.816828, 426.633657) rotate(90.000000) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)"
          >
            <g
              id="Hanger"
              transform="translate(60.000000, 149.816828) rotate(-90.000000) translate(-60.000000, -149.816828) translate(-89.816828, 89.816828)"
            >
              <path
                id="Combined-Shape"
                d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z"
              />                                
            </g>
          </g>
        </g>
      </g>
    </svg>
    <div class="digital-ball flex items-center">
      <Icon
        name="ion:globe-outline"
        size="36"
        class="m-auto"
      />
    </div>
  </div>
    
  <div class="hanger !right-0 w-fit hidden md:!flex flex-col gap-4 pr-5 xl:pr-28 text-5xl z-50 relative">
    <div
      ref="arrow"
      class="absolute top-[-125px]"
    >
      <img src="../public/arrow.svg">
    </div>
    <span class="text-4xl">
      <span>Student &</span><br>
      <span>Software Developer</span>
    </span>
  </div>
  <div class="h-[120%] w-full bg-[#999D9D] flex items-center relative">
    <div class="absolute top-[-5%] bottom-0 w-full h-full">
      <img
        ref="imageRef"
        class="mx-auto object-cover h-[110%] -z-10"
        src="/test2.png"
      >
    </div>
    <Name />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const imageRef = ref(null);
const arrow = ref(null);

const scrollHandler = () => {

  if (imageRef.value) {
    const scrollTop = window.scrollY;
    const translateImageY = scrollTop * 0.25; 
    imageRef.value.style.transform = `translateY(${translateImageY}px)`;
  }

  if (arrow.value) {
    const scrollTop = window.scrollY;
    const translateArrowY = scrollTop * -0.075 - 125;
    const rotationAngle = scrollTop * 0.1;
    arrow.value.style.top = `${translateArrowY}px`;
    arrow.value.style.transform = `rotate(${rotationAngle}deg)`;
  }

};


onMounted(() => {
  window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});
</script>


<style scoped lang="scss">

.hanger
{
  height: fit-content;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

p {
 position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding-right: 5em;
  line-height: 1.2;
}

.digital-ball
{
  z-index: 500;
  position: absolute;
  right: 1.3em;
  left: auto;
  top: 50%;
  transform: translateY(-50%);
  width: 4.2em;
  height: 4.2em;

  background: transparent;
}
</style>