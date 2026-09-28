<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
    
    <div class="relative w-full max-w-xl max-h-[95vh] flex flex-col items-center bg-[#1a110e] rounded-2xl border-2 border-[#c59b4c] p-4 overflow-hidden shadow-2xl">
      
      <!-- Top header bar -->
      <div class="w-full flex items-center justify-between pb-3 border-b border-[#c59b4c]/30 text-[#fbf8f2]">
        <div class="flex items-center gap-2">
          <span class="text-base">📜</span>
          <h3 class="font-serif font-bold text-sm sm:text-base">Original Invitation Card</h3>
        </div>

        <button 
          @click="isOpen = false"
          class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#fbf8f2] flex items-center justify-center transition-colors text-lg"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <!-- Card Image Display -->
      <div class="my-3 overflow-y-auto w-full flex justify-center items-center rounded-xl bg-black/50 p-1">
        <img
          src="/assets/invitation-card.jpg"
          alt="Walima Ceremony Hamza Nawaz & Laiba Waheed Invitation Card"
          class="max-h-[68vh] w-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <!-- Bottom action bar -->
      <div class="w-full pt-3 border-t border-[#c59b4c]/30 flex flex-wrap items-center justify-between gap-3">
        <span class="text-xs text-[#e1cb97]">
          High Resolution • Print Ready
        </span>

        <div class="flex items-center gap-2">
          <button
            @click="downloadCard"
            class="px-4 py-2 rounded-xl bg-gradient-to-r from-[#c59b4c] to-[#a87932] text-[#4a2e18] font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>📥</span>
            <span>Download High-Res Card</span>
          </button>

          <button
            @click="isOpen = false"
            class="px-4 py-2 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { downloadInvitationCard } from '../utils/downloadHelpers.js';
import { playCelebrateSfx } from '../utils/audioPlayer.js';

const isOpen = ref(false);

function downloadCard() {
  playCelebrateSfx();
  downloadInvitationCard();
}

defineExpose({
  open: () => { isOpen.value = true; },
  close: () => { isOpen.value = false; }
});
</script>
