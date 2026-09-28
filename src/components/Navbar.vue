<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur-md bg-[#fdfbf7]/90 border-b border-[#c59b4c]/30 shadow-sm transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      
      <!-- Brand Logo / Monogram -->
      <a href="#hero" class="flex items-center gap-2 group">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#c59b4c] via-[#dfc384] to-[#8e6330] p-0.5 shadow">
          <div class="w-full h-full rounded-full bg-[#771e30] flex items-center justify-center text-[#fbf8f2] font-serif font-bold text-sm group-hover:scale-105 transition-transform">
            H&L
          </div>
        </div>
        <div class="flex flex-col">
          <span class="font-serif font-bold text-[#771e30] tracking-wider text-sm sm:text-base leading-tight">
            Hamza & Laiba
          </span>
          <span class="text-[10px] tracking-widest uppercase text-[#8e6330] font-sans">
            Walima Ceremony
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-[#624127]">
        <a href="#hero" class="hover:text-[#771e30] transition-colors py-1">Invitation</a>
        <a href="#countdown" class="hover:text-[#771e30] transition-colors py-1">Countdown</a>
        <a href="#details" class="hover:text-[#771e30] transition-colors py-1">Venue</a>
        <a href="#hosts" class="hover:text-[#771e30] transition-colors py-1">Hosts</a>
        <a href="#rsvp" class="hover:text-[#771e30] transition-colors py-1">RSVP</a>
        <a href="#wishes" class="hover:text-[#771e30] transition-colors py-1">Du'as & Wishes</a>
        <a href="#downloads" class="text-[#771e30] font-bold hover:text-[#cb2f4b] transition-colors py-1 flex items-center gap-1">
          <span>📥</span> Download
        </a>
      </nav>

      <!-- Right Action Area (Music & Actions) -->
      <div class="flex items-center gap-2 sm:gap-3">
        
        <!-- Music Quick Controller Button -->
        <button
          @click="toggleMusic"
          :title="audioState.isPlaying ? 'Pause Wedding Music' : 'Play Wedding Music'"
          class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c59b4c]/60 bg-gradient-to-r from-[#fbf9f1] to-[#ede0be] hover:shadow-md transition-all text-xs font-serif text-[#771e30]"
        >
          <!-- Vinyl / speaker icon -->
          <div :class="['w-5 h-5 rounded-full flex items-center justify-center text-xs', audioState.isPlaying ? 'animate-spin' : '']">
            🎵
          </div>
          <span class="hidden sm:inline font-sans text-[11px] font-semibold">
            {{ audioState.isPlaying ? 'Music Playing' : 'Play Music' }}
          </span>

          <!-- Animated equalizer bars when playing -->
          <div v-if="audioState.isPlaying" class="flex items-end gap-0.5 h-3 ml-0.5">
            <span class="w-0.5 bg-[#771e30] h-3 animate-pulse"></span>
            <span class="w-0.5 bg-[#c59b4c] h-2 animate-bounce"></span>
            <span class="w-0.5 bg-[#771e30] h-3.5 animate-pulse" style="animation-delay: 150ms"></span>
          </div>
        </button>

        <!-- Re-open Envelope Icon Button -->
        <button
          @click="$emit('open-envelope-modal')"
          title="Open Royal Envelope"
          class="p-2 rounded-full border border-[#c59b4c]/40 text-[#771e30] hover:bg-[#ede0be]/40 transition-colors text-sm"
        >
          ✉️
        </button>

        <!-- Mobile Menu Toggle Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-[#771e30] hover:bg-[#ede0be]/50 transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-[#c59b4c]/20 bg-[#faf6ee] px-4 pt-3 pb-5 space-y-2">
      <a @click="mobileMenuOpen = false" href="#hero" class="block py-2 text-sm font-medium text-[#624127] hover:text-[#771e30]">Invitation Card</a>
      <a @click="mobileMenuOpen = false" href="#countdown" class="block py-2 text-sm font-medium text-[#624127] hover:text-[#771e30]">Countdown</a>
      <a @click="mobileMenuOpen = false" href="#details" class="block py-2 text-sm font-medium text-[#624127] hover:text-[#771e30]">Venue & Time</a>
      <a @click="mobileMenuOpen = false" href="#hosts" class="block py-2 text-sm font-medium text-[#624127] hover:text-[#771e30]">Respected Hosts</a>
      <a @click="mobileMenuOpen = false" href="#rsvp" class="block py-2 text-sm font-medium text-[#624127] hover:text-[#771e30]">RSVP Confirmation</a>
      <a @click="mobileMenuOpen = false" href="#wishes" class="block py-2 text-sm font-medium text-[#624127] hover:text-[#771e30]">Du'as & Wishes</a>
      <a @click="mobileMenuOpen = false" href="#downloads" class="block py-2 text-sm font-bold text-[#771e30] hover:text-[#cb2f4b]">📥 Download Card & Calendar</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { audioState, toggleMusic } from '../utils/audioPlayer.js';

defineEmits(['open-envelope-modal']);
const mobileMenuOpen = ref(false);
</script>
