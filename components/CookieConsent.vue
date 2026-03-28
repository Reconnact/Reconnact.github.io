<script setup lang="ts">
import { ref, onMounted } from 'vue';

const CONSENT_KEY = 'cookie-consent';

const visible = ref(false);
const { gtag } = useGtag();

function applyConsent(granted: boolean) {
  const status = granted ? 'granted' : 'denied';
  gtag('consent', 'update', {
    analytics_storage: status,
    ad_storage: status,
  });
  localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
  visible.value = false;
}

function accept() {
  applyConsent(true);
}

function decline() {
  applyConsent(false);
}

onMounted(() => {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) {
    visible.value = true;
  } else {
    // Re-apply persisted consent on every page load
    const granted = stored === 'granted';
    gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
    });
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="visible"
        class="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-lg -translate-x-1/2 rounded-xl border border-[#2a2a2a] bg-[#161616] px-5 py-4 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
        role="dialog"
        aria-label="Cookie consent"
      >
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p class="text-sm leading-6 text-[#848484]">
            This site uses
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#b0b0b0] underline underline-offset-2 transition-colors hover:text-[#f7f9fa]"
            >Google Analytics</a>
            to understand how visitors interact with it. No personal data is sold or shared.
          </p>

          <div class="flex shrink-0 gap-2">
            <button
              class="rounded-lg border border-[#303030] bg-transparent px-4 py-1.5 text-sm font-medium text-[#848484] transition-all duration-200 hover:border-[#4a4a4a] hover:text-[#f7f9fa]"
              @click="decline"
            >
              Decline
            </button>
            <button
              class="rounded-lg bg-[#f7f9fa] px-4 py-1.5 text-sm font-medium text-[#171717] transition-all duration-200 hover:bg-white"
              @click="accept"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>