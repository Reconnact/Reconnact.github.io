<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps<{
  modelValue: boolean
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>();

function close() {
  emit('update:modelValue', false);
}

watch(() => props.modelValue, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
});
</script>

<template>
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
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/40 backdrop-blur-[2px]"
        @click.self="close"
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
            v-if="modelValue"
            class="flex w-full max-w-2xl max-h-[85vh] flex-col rounded-2xl border border-[#2a2a2a] bg-[#161616] shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            @click.stop
          >
            <div class="flex shrink-0 items-start justify-between gap-4 border-b border-[#222] px-7 py-6">
              <slot name="header" />

              <button
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#505050] transition hover:text-[#aaa]"
                aria-label="Close"
                @click="close"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>

            <div class="overflow-y-auto px-7 py-6">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>