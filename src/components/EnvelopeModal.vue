<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all duration-500">
    <div class="relative w-full max-w-lg mx-auto flex flex-col items-center">
      
      <!-- Top banner prompt -->
      <div class="mb-4 text-center text-[#f6e5ad] animate-bounce flex items-center gap-2 text-sm font-medium">
        <span>✨</span>
        <span>A Royal Invitation has arrived for you</span>
        <span>✨</span>
      </div>

      <!-- Envelope Container -->
      <div 
        @click="openEnvelope"
        class="relative w-full aspect-[4/3] max-w-md bg-[#6d1322] rounded-2xl shadow-2xl cursor-pointer p-6 flex flex-col items-center justify-between border-2 border-[#c59b4c] transition-transform duration-500 hover:scale-[1.02] group select-none overflow-hidden"
      >
        <!-- Gold decorative corners -->
        <div class="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#c59b4c]/70 rounded-tl-lg"></div>
        <div class="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#c59b4c]/70 rounded-tr-lg"></div>
        <div class="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#c59b4c]/70 rounded-bl-lg"></div>
        <div class="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#c59b4c]/70 rounded-br-lg"></div>

        <!-- Envelope Flap lines / triangle overlay -->
        <div class="absolute inset-0 pointer-events-none opacity-20">
          <svg class="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
            <path d="M0,0 L200,160 L400,0" fill="none" stroke="#c59b4c" stroke-width="3" />
            <path d="M0,300 L170,140" fill="none" stroke="#c59b4c" stroke-width="2" />
            <path d="M400,300 L230,140" fill="none" stroke="#c59b4c" stroke-width="2" />
          </svg>
        </div>

        <!-- Top text -->
        <div class="z-10 text-center mt-2">
          <p class="font-arabic text-[#e1cb97] text-xl tracking-wider">مَا شَاءَ ٱللَّٰهُ</p>
          <p class="font-serif text-xs uppercase tracking-widest text-[#fbf8f2]/80 mt-1">Wedding Invitation</p>
        </div>

        <!-- Wax Seal Button in Center -->
        <div class="z-20 relative flex flex-col items-center my-auto transition-transform group-hover:scale-110 duration-300">
          <div class="w-24 h-24 rounded-full bg-gradient-to-br from-[#c59b4c] via-[#ecd79a] to-[#8e6330] p-1 shadow-2xl flex items-center justify-center">
            <div class="w-full h-full rounded-full bg-[#771e30] border-2 border-[#e1cb97] flex flex-col items-center justify-center text-center shadow-inner">
              <span class="font-serif text-2xl font-bold text-[#fbf8f2] tracking-tighter">H & L</span>
              <span class="text-[9px] uppercase tracking-wider text-[#e1cb97]">Walima</span>
            </div>
          </div>
          <div class="mt-3 px-4 py-1 rounded-full bg-black/40 border border-[#c59b4c]/40 text-[#fbf8f2] text-xs font-serif tracking-widest animate-pulse">
            TAP TO OPEN
          </div>
        </div>

        <!-- Bottom Names -->
        <div class="z-10 text-center mb-1">
          <h2 class="font-serif text-lg text-[#fbf8f2] font-semibold tracking-wide">
            Hamza Nawaz <span class="text-[#c59b4c]">&</span> Laiba Waheed
          </h2>
          <p class="text-xs text-[#e1cb97]/90 mt-0.5 font-sans">
            Sunday, 6 December 2026 • Lahore
          </p>
        </div>
      </div>

      <!-- Skip / Close text -->
      <button 
        @click="openEnvelope"
        class="mt-4 text-[#e1cb97] hover:text-white text-xs underline underline-offset-4 tracking-wider transition-colors"
      >
        Skip and enter directly →
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import confetti from 'canvas-confetti';
import { playEnvelopeSfx, playMusic } from '../utils/audioPlayer.js';

const emit = defineEmits(['opened']);
const isOpen = ref(true);

function openEnvelope() {
  playEnvelopeSfx();
  
  // Trigger celebration confetti
  try {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#c59b4c', '#e24c64', '#ffffff', '#ffd700']
    });
  } catch (e) {}

  isOpen.value = false;
  emit('opened');

  // Start wedding music on direct user gesture
  playMusic();
}

defineExpose({
  show: () => { isOpen.value = true; }
});
</script>
