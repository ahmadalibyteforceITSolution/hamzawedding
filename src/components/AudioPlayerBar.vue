<template>
  <div class="fixed bottom-4 right-4 z-40">
    
    <!-- Expanded Floating Player -->
    <div 
      v-if="!isCollapsed" 
      class="bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#c59b4c] p-3 shadow-2xl flex items-center gap-3 max-w-sm transition-all animate-fade-in"
    >
      <!-- Vinyl record graphic -->
      <div 
        @click="toggleMusic"
        :class="['w-11 h-11 rounded-full bg-gradient-to-tr from-[#1a110e] via-[#771e30] to-[#c59b4c] p-1 flex items-center justify-center cursor-pointer shadow flex-shrink-0', audioState.isPlaying ? 'animate-spin' : '']"
        style="animation-duration: 4s;"
      >
        <div class="w-4 h-4 rounded-full bg-[#fbf8f2] border-2 border-[#c59b4c] flex items-center justify-center text-[8px]">
          🎶
        </div>
      </div>

      <!-- Info -->
      <div class="flex-1 min-w-[120px] select-none">
        <p class="text-[10px] uppercase font-bold text-[#8e6330] tracking-wider">Background Music</p>
        <p class="font-serif text-xs font-bold text-[#771e30] truncate max-w-[140px]">
          {{ audioState.trackName }}
        </p>
        
        <!-- Animated visualizer bars -->
        <div v-if="audioState.isPlaying" class="flex items-end gap-1 h-2 mt-1">
          <span class="w-1 bg-[#771e30] rounded-full h-2 animate-bounce"></span>
          <span class="w-1 bg-[#c59b4c] rounded-full h-3 animate-pulse"></span>
          <span class="w-1 bg-[#771e30] rounded-full h-1.5 animate-bounce" style="animation-delay: 100ms"></span>
          <span class="w-1 bg-[#c59b4c] rounded-full h-2.5 animate-pulse" style="animation-delay: 200ms"></span>
        </div>
        <p v-else class="text-[9px] text-[#754f2c]">Paused</p>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-1.5">
        <!-- Play / Pause -->
        <button
          @click="toggleMusic"
          :title="audioState.isPlaying ? 'Pause' : 'Play'"
          class="w-8 h-8 rounded-full bg-[#771e30] text-white flex items-center justify-center hover:bg-[#8d1f34] transition-colors text-xs"
        >
          <span v-if="!audioState.isPlaying">▶</span>
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

        <!-- Collapse -->
        <button
          @click="isCollapsed = true"
          title="Minimize Player"
          class="w-6 h-6 text-[#8e6330] hover:text-[#771e30] text-xs flex items-center justify-center ml-1"
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
