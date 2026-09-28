<template>
  <section id="downloads" class="py-16 px-4 sm:px-6 bg-[#faf5eb] relative">
    <div class="max-w-4xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-10">
        <p class="text-xs uppercase tracking-[0.25em] text-[#8e6330] font-semibold">Easy One-Click Access</p>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#771e30] mt-1">
          Download Center
        </h2>
        <div class="w-20 h-0.5 bg-[#c59b4c] mx-auto mt-2"></div>
        <p class="text-xs sm:text-sm text-[#754f2c] mt-2">
          Save invitation details, high-resolution cards, and calendar reminders directly to your device.
        </p>
      </div>

      <!-- Download Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        
        <!-- 1. Invitation Card Image Download -->
        <div class="bg-white rounded-2xl p-6 border-2 border-[#c59b4c]/40 shadow-lg flex flex-col justify-between hover:border-[#c59b4c] transition-all hover:-translate-y-1">
          <div>
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#771e30] to-[#cb2f4b] text-white flex items-center justify-center text-2xl shadow mb-4">
              🖼️
            </div>
            <h3 class="font-serif font-bold text-[#771e30] text-lg">Wedding Card Image</h3>
            <p class="text-xs text-[#754f2c] mt-1">
              Download the official high-resolution invitation card to share with family or print.
            </p>
          </div>
          <button
            @click="handleDownloadCard"
            class="mt-6 w-full py-2.5 rounded-xl bg-[#771e30] text-white text-xs font-bold shadow hover:bg-[#8d1f34] transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>📥</span>
            <span>Download Card (JPG)</span>
          </button>
        </div>

        <!-- 2. Calendar Event Download -->
        <div class="bg-white rounded-2xl p-6 border-2 border-[#c59b4c]/40 shadow-lg flex flex-col justify-between hover:border-[#c59b4c] transition-all hover:-translate-y-1">
          <div>
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c59b4c] to-[#a87932] text-white flex items-center justify-center text-2xl shadow mb-4">
              📅
            </div>
            <h3 class="font-serif font-bold text-[#771e30] text-lg">Calendar Reminder</h3>
            <p class="text-xs text-[#754f2c] mt-1">
              Add Sunday, 6 Dec 2026 to your iPhone, Android, Google, or Outlook calendar with venue reminder.
            </p>
          </div>
          <button
            @click="handleDownloadIcs"
            class="mt-6 w-full py-2.5 rounded-xl bg-[#c59b4c] text-[#4a2e18] text-xs font-bold shadow hover:bg-[#b0823c] transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>📥</span>
            <span>Download Event (.ics)</span>
          </button>
        </div>

        <!-- 3. Venue Location & Navigation -->
        <div class="bg-white rounded-2xl p-6 border-2 border-[#c59b4c]/40 shadow-lg flex flex-col justify-between hover:border-[#c59b4c] transition-all hover:-translate-y-1">
          <div>
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#754f2c] to-[#9e1f36] text-white flex items-center justify-center text-2xl shadow mb-4">
              📍
            </div>
            <h3 class="font-serif font-bold text-[#771e30] text-lg">Hotel Dua Event Hall</h3>
            <p class="text-xs text-[#754f2c] mt-1">
              Poonch Road, Samanabad, Lahore, Pakistan. Open direct turn-by-turn navigation.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Hotel+Dua+Event+Marriage+Hall+Poonch+Road+Samanabad+Lahore"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 w-full py-2.5 rounded-xl bg-[#754f2c] text-white text-xs font-bold shadow hover:bg-[#624127] transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>🗺️</span>
            <span>Get Venue Directions</span>
          </a>
        </div>

      </div>

      <!-- Quick Share on WhatsApp bar -->
      <div class="mt-10 p-5 rounded-2xl bg-white border border-[#c59b4c]/50 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3 text-center sm:text-left">
          <span class="text-3xl">💬</span>
          <div>
            <h4 class="font-serif font-bold text-[#771e30] text-sm sm:text-base">Share with Friends & Family</h4>
            <p class="text-xs text-[#754f2c]">Send this digital invitation link via WhatsApp with a single tap.</p>
          </div>
        </div>

        <button
          @click="shareOnWhatsApp"
          class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5b] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow"
        >
          <span>📲</span>
          <span>Share on WhatsApp</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { downloadInvitationCard, downloadCalendarIcs } from '../utils/downloadHelpers.js';
import { playCelebrateSfx } from '../utils/audioPlayer.js';

function handleDownloadCard() {
  playCelebrateSfx();
  downloadInvitationCard();
}

function handleDownloadIcs() {
  playCelebrateSfx();
  downloadCalendarIcs();
}

function shareOnWhatsApp() {
  const message = encodeURIComponent(
    `💍 *Walima Invitation: Hamza Nawaz & Laiba Waheed*\n\n` +
    `Together with their families, you are cordially invited to celebrate their Walima Ceremony.\n\n` +
    `📅 *Date:* Sunday, 6th December 2026\n` +
    `🕖 *Time:* 7:00 PM\n` +
    `📍 *Venue:* Hotel Dua Event Marriage Hall, Poonch Road, Samanabad, Lahore, Pakistan.\n\n` +
    `Open digital invitation & RSVP here: ${window.location.href}`
  );
  window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
}
</script>
