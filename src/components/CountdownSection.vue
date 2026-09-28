<template>
  <section id="countdown" class="py-12 px-4 sm:px-6 relative">
    <div class="max-w-3xl mx-auto text-center">
      
      <!-- Section Header -->
      <div class="mb-8">
        <p class="text-xs uppercase tracking-[0.25em] text-[#8e6330] font-semibold">Counting Down Every Blessed Moment</p>
        <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#771e30] mt-1">
          Until We Celebrate Together
        </h2>
        <div class="w-16 h-0.5 bg-[#c59b4c] mx-auto mt-2"></div>
      </div>

      <!-- Countdown Flip Cards Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto">
        
        <!-- Days -->
        <div class="bg-gradient-to-b from-[#fbf9f1] to-[#ede0be] border-2 border-[#c59b4c] rounded-2xl p-4 shadow-md flex flex-col items-center">
          <span class="font-serif text-3xl sm:text-4xl font-extrabold text-[#771e30] leading-tight">
            {{ formatNum(timeLeft.days) }}
          </span>
          <span class="text-[10px] sm:text-xs uppercase tracking-widest text-[#754f2c] font-bold mt-1">
            Days
          </span>
        </div>

        <!-- Hours -->
        <div class="bg-gradient-to-b from-[#fbf9f1] to-[#ede0be] border-2 border-[#c59b4c] rounded-2xl p-4 shadow-md flex flex-col items-center">
          <span class="font-serif text-3xl sm:text-4xl font-extrabold text-[#771e30] leading-tight">
            {{ formatNum(timeLeft.hours) }}
          </span>
          <span class="text-[10px] sm:text-xs uppercase tracking-widest text-[#754f2c] font-bold mt-1">
            Hours
          </span>
        </div>

        <!-- Minutes -->
        <div class="bg-gradient-to-b from-[#fbf9f1] to-[#ede0be] border-2 border-[#c59b4c] rounded-2xl p-4 shadow-md flex flex-col items-center">
          <span class="font-serif text-3xl sm:text-4xl font-extrabold text-[#771e30] leading-tight">
            {{ formatNum(timeLeft.minutes) }}
          </span>
          <span class="text-[10px] sm:text-xs uppercase tracking-widest text-[#754f2c] font-bold mt-1">
            Minutes
          </span>
        </div>

        <!-- Seconds -->
        <div class="bg-gradient-to-b from-[#fbf9f1] to-[#ede0be] border-2 border-[#c59b4c] rounded-2xl p-4 shadow-md flex flex-col items-center">
          <span class="font-serif text-3xl sm:text-4xl font-extrabold text-[#771e30] leading-tight">
            {{ formatNum(timeLeft.seconds) }}
          </span>
          <span class="text-[10px] sm:text-xs uppercase tracking-widest text-[#754f2c] font-bold mt-1">
            Seconds
          </span>
        </div>

      </div>

      <!-- Quick Calendar Sync Downloads -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          @click="downloadIcs"
          class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#c59b4c] bg-white hover:bg-[#ede0be]/40 text-[#771e30] text-xs font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
        >
          <span>📥</span>
          <span>Download Calendar (.ics)</span>
        </button>

        <button
          @click="openGcal"
          class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#c59b4c] hover:bg-[#ede0be]/40 text-[#624127] text-xs font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
        >
          <span>🗓️</span>
          <span>Add to Google Calendar</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { downloadCalendarIcs, openGoogleCalendar } from '../utils/downloadHelpers.js';
import { playCelebrateSfx } from '../utils/audioPlayer.js';

// Target date: 6 Dec 2026 19:00:00 Pakistan Time (UTC+5)
const targetTime = new Date('2026-12-06T19:00:00+05:00').getTime();

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

let intervalId = null;

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetTime - now;

  if (diff <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return;
  }

  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000)
  };
}

function formatNum(val) {
  return String(val).padStart(2, '0');
}

function downloadIcs() {
  playCelebrateSfx();
  downloadCalendarIcs();
}

function openGcal() {
  openGoogleCalendar();
}

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>
