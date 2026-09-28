<template>
  <section id="details" class="py-16 px-4 sm:px-6 bg-[#f7f2e7]/60">
    <div class="max-w-4xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-12">
        <p class="text-xs uppercase tracking-[0.25em] text-[#8e6330] font-semibold">Ceremony & Reception</p>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#771e30] mt-1">
          Event Details & Venue
        </h2>
        <div class="w-20 h-0.5 bg-[#c59b4c] mx-auto mt-2"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        <!-- Left: Venue & Information Card -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#c59b4c]/40 shadow-xl relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-36 h-36 bg-[#ede0be]/40 rounded-full blur-2xl pointer-events-none"></div>

          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#771e30] to-[#cb2f4b] flex items-center justify-center text-white text-xl shadow-md">
              🏛️
            </div>
            <div>
              <span class="text-xs uppercase tracking-wider text-[#8e6330] font-bold">Walima Reception</span>
              <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#771e30]">
                Hotel Dua Event Hall
              </h3>
            </div>
          </div>

          <div class="space-y-4 text-sm text-[#624127]">
            <!-- Address -->
            <div class="flex items-start gap-3">
              <span class="text-lg mt-0.5">📍</span>
              <div>
                <p class="font-bold text-[#771e30]">Full Address:</p>
                <p class="mt-0.5 text-[#754f2c]">Poonch Road, Samanabad, Lahore, Punjab, Pakistan</p>
              </div>
            </div>

            <!-- Date -->
            <div class="flex items-start gap-3">
              <span class="text-lg mt-0.5">📅</span>
              <div>
                <p class="font-bold text-[#771e30]">Date:</p>
                <p class="mt-0.5 text-[#754f2c]">Sunday, 6th December 2026</p>
              </div>
            </div>

            <!-- Time -->
            <div class="flex items-start gap-3">
              <span class="text-lg mt-0.5">🕖</span>
              <div>
                <p class="font-bold text-[#771e30]">Time:</p>
                <p class="mt-0.5 text-[#754f2c]">7:00 PM In the Evening (Punctuality is requested)</p>
              </div>
            </div>
          </div>

          <!-- Buttons: Google Maps & Copy Address -->
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Hotel+Dua+Event+Marriage+Hall+Poonch+Road+Samanabad+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 min-w-[140px] flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#771e30] text-white text-xs font-semibold shadow hover:bg-[#8d1f34] transition-colors"
            >
              <span>🗺️</span>
              <span>Open in Maps</span>
            </a>

            <button
              @click="handleCopyAddress"
              class="flex-1 min-w-[140px] flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#c59b4c] text-[#771e30] hover:bg-[#ede0be]/40 text-xs font-semibold transition-colors"
            >
              <span>📋</span>
              <span>{{ copied ? 'Address Copied!' : 'Copy Address' }}</span>
            </button>
          </div>

        </div>

        <!-- Right: Evening Schedule / Program Timeline -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#c59b4c]/40 shadow-xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c59b4c] to-[#a87932] flex items-center justify-center text-white text-xl shadow-md">
              ⏳
            </div>
            <div>
              <span class="text-xs uppercase tracking-wider text-[#8e6330] font-bold">Flow of Evening</span>
              <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#771e30]">
                Event Program
              </h3>
            </div>
          </div>

          <!-- Timeline items -->
          <div class="relative border-l-2 border-[#c59b4c]/50 ml-4 pl-6 space-y-6">
            
            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#c59b4c] border-2 border-white shadow"></div>
              <p class="text-xs font-bold text-[#c59b4c] tracking-wider uppercase">07:00 PM</p>
              <h4 class="font-serif font-bold text-[#771e30] text-base">Arrival of Respected Guests</h4>
              <p class="text-xs text-[#754f2c] mt-0.5">Welcome reception & welcome drinks with family members.</p>
            </div>

            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#771e30] border-2 border-white shadow"></div>
              <p class="text-xs font-bold text-[#771e30] tracking-wider uppercase">07:45 PM</p>
              <h4 class="font-serif font-bold text-[#771e30] text-base">Grand Couple Entrance</h4>
              <p class="text-xs text-[#754f2c] mt-0.5">Welcoming the Bride & Groom Hamza & Laiba to the stage.</p>
            </div>

            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#c59b4c] border-2 border-white shadow"></div>
              <p class="text-xs font-bold text-[#c59b4c] tracking-wider uppercase">08:30 PM</p>
              <h4 class="font-serif font-bold text-[#771e30] text-base">Walima Dinner & Feasting</h4>
              <p class="text-xs text-[#754f2c] mt-0.5">Lavish traditional culinary feast prepared for our dear guests.</p>
            </div>

            <div class="relative group">
              <div class="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#771e30] border-2 border-white shadow"></div>
              <p class="text-xs font-bold text-[#771e30] tracking-wider uppercase">09:45 PM</p>
              <h4 class="font-serif font-bold text-[#771e30] text-base">Du'a, Greetings & Photos</h4>
              <p class="text-xs text-[#754f2c] mt-0.5">Heartfelt prayers for the newly weds and family portraits.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { copyToClipboard } from '../utils/downloadHelpers.js';

const copied = ref(false);

async function handleCopyAddress() {
  const addressText = 'Hotel Dua Event Marriage Hall, Poonch Road, Samanabad, Lahore, Pakistan';
  await copyToClipboard(addressText);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2500);
}
</script>
