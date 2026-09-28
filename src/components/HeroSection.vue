<template>
  <section id="hero" class="relative pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
    
    <!-- Decorative Hanging Lanterns -->
    <div class="absolute top-0 left-6 sm:left-16 pointer-events-none hidden sm:block">
      <div class="flex flex-col items-center animate-swing origin-top">
        <div class="w-0.5 h-16 sm:h-24 bg-gradient-to-b from-[#8e6330] to-[#c59b4c]"></div>
        <div class="text-3xl sm:text-4xl lantern-glow">🏮</div>
      </div>
    </div>
    
    <div class="absolute top-0 right-6 sm:right-16 pointer-events-none hidden sm:block">
      <div class="flex flex-col items-center animate-swing origin-top" style="animation-delay: -1.5s;">
        <div class="w-0.5 h-20 sm:h-28 bg-gradient-to-b from-[#8e6330] to-[#c59b4c]"></div>
        <div class="text-3xl sm:text-4xl lantern-glow">🏮</div>
      </div>
    </div>

    <!-- Main Card Container -->
    <div class="max-w-2xl mx-auto">
      
      <!-- Royal Golden Arch Frame Card -->
      <div class="relative bg-gradient-to-b from-[#fffcf7] via-[#faf4e6] to-[#fbf8f2] rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-[#c59b4c]/60 overflow-hidden">
        
        <!-- Corner Floral Ornaments -->
        <div class="absolute top-0 left-0 w-24 h-24 pointer-events-none opacity-80">
          <svg viewBox="0 0 100 100" class="w-full h-full fill-none stroke-[#c59b4c]" stroke-width="1.5">
            <path d="M0,0 Q50,0 50,50 Q0,50 0,0" fill="#fcf0d6" fill-opacity="0.4"/>
            <circle cx="25" cy="25" r="8" fill="#e24c64" fill-opacity="0.25" stroke="#c59b4c"/>
            <path d="M0,15 C20,15 25,35 40,40" />
            <path d="M15,0 C15,20 35,25 40,40" />
          </svg>
        </div>

        <div class="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-80 rotate-90">
          <svg viewBox="0 0 100 100" class="w-full h-full fill-none stroke-[#c59b4c]" stroke-width="1.5">
            <path d="M0,0 Q50,0 50,50 Q0,50 0,0" fill="#fcf0d6" fill-opacity="0.4"/>
            <circle cx="25" cy="25" r="8" fill="#e24c64" fill-opacity="0.25" stroke="#c59b4c"/>
            <path d="M0,15 C20,15 25,35 40,40" />
            <path d="M15,0 C15,20 35,25 40,40" />
          </svg>
        </div>

        <!-- Arch Border Inner Outline -->
        <div class="border-2 border-[#d4b370]/50 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center relative bg-[#ffffff]/60 backdrop-blur-sm">
          
          <!-- Arabic Masha'Allah Calligraphy -->
          <div class="mb-2">
            <h3 class="font-arabic text-3xl sm:text-4xl text-[#771e30] font-bold tracking-wider leading-relaxed">
              مَا شَاءَ ٱللَّٰهُ
            </h3>
          </div>

          <!-- WALIMA Title -->
          <div class="relative inline-block my-1">
            <h1 class="font-serif text-3xl sm:text-5xl font-black tracking-widest text-[#771e30] uppercase">
              WALIMA
            </h1>
            <div class="flex items-center justify-center gap-2 mt-1">
              <span class="h-px w-8 bg-[#c59b4c]"></span>
              <span class="text-[#c59b4c] text-xs">❦</span>
              <span class="h-px w-8 bg-[#c59b4c]"></span>
            </div>
          </div>

          <!-- Good Long Live & Subtitle -->
          <p class="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8e6330] mt-2 font-semibold">
            GOOD LONG LIVE
          </p>

          <p class="font-sans text-xs tracking-[0.18em] uppercase text-[#754f2c] mt-3 font-medium">
            TOGETHER WITH THEIR FAMILIES
          </p>

          <!-- Couple Names in Luxury Script & Serif -->
          <div class="my-6 space-y-1">
            <div class="font-script text-5xl sm:text-7xl text-[#771e30] leading-none drop-shadow-sm hover:scale-105 transition-transform cursor-default">
              Hamza Nawaz
            </div>
            
            <div class="flex items-center justify-center gap-4 py-1">
              <span class="h-px w-12 bg-gradient-to-r from-transparent to-[#c59b4c]"></span>
              <span class="font-serif italic text-base sm:text-lg text-[#8e6330] font-bold">AND</span>
              <span class="h-px w-12 bg-gradient-to-l from-transparent to-[#c59b4c]"></span>
            </div>

            <div class="font-script text-5xl sm:text-7xl text-[#771e30] leading-none drop-shadow-sm hover:scale-105 transition-transform cursor-default">
              Laiba Waheed
            </div>
          </div>

          <!-- Invitation Verse -->
          <p class="font-serif text-xs sm:text-sm uppercase tracking-widest text-[#624127] max-w-md mx-auto leading-relaxed font-semibold">
            REQUEST THE PLEASURE OF YOUR COMPANY AT THE CEREMONY OF THEIR WEDDING
          </p>

          <!-- Divider -->
          <div class="w-48 h-px bg-gradient-to-r from-transparent via-[#c59b4c] to-transparent my-6"></div>

          <!-- Date & Time Showcase Badge -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md my-2">
            
            <!-- Date box -->
            <div class="bg-gradient-to-br from-[#fbf9f1] to-[#ede0be] border border-[#c59b4c] rounded-xl p-3 shadow-sm flex items-center justify-center gap-3">
              <span class="text-2xl">📅</span>
              <div class="text-left">
                <p class="text-[10px] uppercase tracking-wider text-[#8e6330] font-bold">SUNDAY</p>
                <p class="font-serif text-2xl font-black text-[#771e30] leading-none">6</p>
                <p class="text-[10px] uppercase tracking-wider text-[#8e6330] font-bold">DECEMBER 2026</p>
              </div>
            </div>

            <!-- Time box -->
            <div class="bg-gradient-to-br from-[#fbf9f1] to-[#ede0be] border border-[#c59b4c] rounded-xl p-3 shadow-sm flex items-center justify-center gap-3">
              <span class="text-2xl">🕖</span>
              <div class="text-left">
                <p class="text-[10px] uppercase tracking-wider text-[#8e6330] font-bold">EVENING TIME</p>
                <p class="font-serif text-xl font-black text-[#771e30] leading-none">7:00 PM</p>
                <p class="text-[10px] uppercase tracking-wider text-[#8e6330] font-bold">SHARP INSHA'ALLAH</p>
              </div>
            </div>

          </div>

          <!-- Venue Location -->
          <div class="mt-5 p-4 rounded-xl bg-[#faf6ee] border border-[#c59b4c]/40 w-full max-w-md text-center">
            <div class="flex items-center justify-center gap-1.5 text-[#771e30] mb-1 font-bold text-xs uppercase tracking-wider">
              <span>📍</span> VENUE LOCATION
            </div>
            <h4 class="font-serif font-bold text-base sm:text-lg text-[#771e30]">
              HOTEL DUA EVENT MARRIAGE HALL
            </h4>
            <p class="text-xs text-[#754f2c] mt-1 font-medium leading-relaxed">
              Poonch Road, Samanabad, Lahore, Pakistan
            </p>
          </div>

          <!-- Action Buttons with Download Prominence -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
            
            <!-- Download Invitation Card Button -->
            <button
              @click="downloadCard"
              class="flex-1 sm:flex-initial min-w-[200px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#771e30] via-[#9e1f36] to-[#771e30] text-[#fbf8f2] font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all group"
            >
              <span class="text-base group-hover:translate-y-0.5 transition-transform">📥</span>
              <span>Download Invitation Card</span>
            </button>

            <!-- RSVP Button -->
            <a
              href="#rsvp"
              class="flex-1 sm:flex-initial min-w-[150px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#c59b4c] via-[#dfc384] to-[#c59b4c] text-[#4a2e18] font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span>💌</span>
              <span>RSVP Now</span>
            </a>

            <!-- View HD Card Lightbox Button -->
            <button
              @click="$emit('view-card')"
              class="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#c59b4c] text-[#771e30] hover:bg-[#ede0be]/40 text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              <span>🔍</span>
              <span>View Original Printed Card</span>
            </button>

          </div>

          <!-- Blessings Shower Button -->
          <div class="mt-6">
            <button
              @click="showerBlessings"
              class="text-xs text-[#8e6330] hover:text-[#771e30] font-medium flex items-center gap-1.5 py-1 px-3 rounded-full border border-[#c59b4c]/30 hover:border-[#c59b4c] bg-white/70 transition-all shadow-sm active:scale-95"
            >
              <span>🌸</span>
              <span>Tap to Shower Rose Petals & Blessings</span>
              <span>✨</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import confetti from 'canvas-confetti';
import { downloadInvitationCard } from '../utils/downloadHelpers.js';
import { playCelebrateSfx } from '../utils/audioPlayer.js';

defineEmits(['view-card']);

function downloadCard() {
  playCelebrateSfx();
  downloadInvitationCard();
}

function showerBlessings() {
  playCelebrateSfx();
  
  // Custom petal-like confetti burst
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: ['#e24c64', '#f5aab4', '#c59b4c', '#ffffff']
  });
  
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: ['#e24c64', '#f5aab4', '#c59b4c', '#ffffff']
  });
}
</script>
