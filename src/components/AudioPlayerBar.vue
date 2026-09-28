<template>
  <div class="fixed bottom-4 right-4 z-40">
    
    <!-- Expanded Floating Player -->
    <div 
      v-if="!isCollapsed" 
      class="bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#c59b4c] p-3 shadow-2xl flex items-center gap-3 max-w-sm transition-all animate-fade-in relative"
    >
      <!-- Vinyl record container holding the invisible active YouTube iframe -->
      <div 
        @click="toggleMusic"
        class="relative w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-[#c59b4c] flex-shrink-0 cursor-pointer group"
        title="Tap to Play/Pause"
      >
        <!-- The actual YouTube Video IFrame (Active in DOM so browser plays sound cleanly, masked by vinyl) -->
        <iframe
          id="yt-wedding-iframe"
          src="https://www.youtube.com/embed/HD4UtsmAV4Y?enablejsapi=1&autoplay=0&controls=0&disablekb=1&fs=0&loop=1&playlist=HD4UtsmAV4Y&playsinline=1"
          allow="autoplay; encrypted-media"
          class="w-full h-full scale-[2.5] pointer-events-none absolute inset-0"
        ></iframe>

        <!-- Royal Vinyl Disc Overlay (100% covers the video so NO video is visible!) -->
        <div 
          :class="[
            'absolute inset-0 bg-gradient-to-tr from-[#771e30] via-[#a81c35] to-[#c59b4c] flex items-center justify-center pointer-events-none transition-transform duration-500',
            audioState.isPlaying ? 'animate-spin' : ''
          ]"
          style="animation-duration: 4s;"
        >
          <div class="w-5 h-5 rounded-full bg-[#fbf8f2] border-2 border-[#c59b4c] flex items-center justify-center text-[9px] shadow">
            🎶
          </div>
        </div>
      </div>

      <!-- Track Information -->
      <div class="flex-1 min-w-[150px] sm:min-w-[180px] select-none">
        <div class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full" :class="audioState.isPlaying ? 'bg-green-500 animate-ping' : 'bg-amber-400'"></span>
          <p class="text-[10px] uppercase font-bold text-[#8e6330] tracking-wider">
            {{ audioState.isPlaying ? 'Playing Song' : 'Wedding Song' }}
          </p>
        </div>

        <p class="font-serif text-xs font-bold text-[#771e30] truncate max-w-[190px] sm:max-w-[220px]">
          Wedding Sehra
        </p>
        <p class="text-[10px] text-[#754f2c] truncate max-w-[190px]">
          Mazhar Rahi & Fiza Ali
        </p>
        
        <!-- Animated visualizer bars -->
        <div v-if="audioState.isPlaying" class="flex items-end gap-1 h-2 mt-1">
          <span class="w-1 bg-[#771e30] rounded-full h-2 animate-bounce"></span>
          <span class="w-1 bg-[#c59b4c] rounded-full h-3 animate-pulse"></span>
          <span class="w-1 bg-[#771e30] rounded-full h-1.5 animate-bounce" style="animation-delay: 100ms"></span>
          <span class="w-1 bg-[#c59b4c] rounded-full h-2.5 animate-pulse" style="animation-delay: 200ms"></span>
          <span class="w-1 bg-[#771e30] rounded-full h-2 animate-bounce" style="animation-delay: 150ms"></span>
        </div>
        <p v-else class="text-[9px] text-[#8e6330] font-medium mt-0.5">Tap Play to listen</p>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-1.5">
        <!-- Play / Pause Button -->
        <button
          @click="toggleMusic"
          :title="audioState.isPlaying ? 'Pause Music' : 'Play Music'"
          class="w-9 h-9 rounded-full bg-[#771e30] text-white flex items-center justify-center hover:bg-[#8d1f34] transition-all shadow hover:scale-105 active:scale-95 text-xs font-bold"
        >
          <span v-if="!audioState.isPlaying" class="ml-0.5">▶</span>
          <span v-else>⏸</span>
        </button>

        <!-- Mute / Unmute -->
        <button
          @click="toggleMute"
          class="w-7 h-7 rounded-full bg-[#faf6ee] text-[#771e30] border border-[#c59b4c]/50 flex items-center justify-center hover:bg-[#ede0be] transition-colors text-xs"
          :title="audioState.isMuted ? 'Unmute' : 'Mute'"
        >
          {{ audioState.isMuted ? '🔇' : '🔊' }}
        </button>

        <!-- Minimize -->
        <button
          @click="isCollapsed = true"
          title="Minimize Player"
          class="w-6 h-6 text-[#8e6330] hover:text-[#771e30] text-xs flex items-center justify-center ml-0.5"
        >
          ✕
        </button>
      </div>

    </div>

    <!-- Collapsed Floating Button -->
    <button
      v-else
      @click="isCollapsed = false"
      class="w-12 h-12 rounded-full bg-[#771e30] border-2 border-[#c59b4c] text-white shadow-2xl flex items-center justify-center text-lg hover:scale-110 active:scale-95 transition-transform"
      :class="{ 'animate-pulse': audioState.isPlaying }"
      title="Open Music Player"
    >
      🎵
    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { audioState, toggleMusic, toggleMute } from '../utils/audioPlayer.js';

const isCollapsed = ref(false);
</script>
