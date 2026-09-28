<template>
  <div class="min-h-screen bg-islamic-pattern text-[#4a2e18] relative flex flex-col font-sans">
    
    <!-- Rose Petals Floating Canvas -->
    <PetalsCanvas />

    <!-- 3D Envelope Modal (Shown first) -->
    <EnvelopeModal ref="envelopeRef" />

    <!-- Card Viewer Lightbox Modal -->
    <CardViewerModal ref="cardViewerRef" />

    <!-- Navigation Bar -->
    <Navbar @open-envelope-modal="openEnvelope" />

    <!-- Main Content Flow -->
    <main class="flex-grow z-20">
      
      <!-- 1. Hero Invitation Section -->
      <HeroSection @view-card="openCardViewer" />

      <!-- 2. Live Countdown Section -->
      <CountdownSection />

      <!-- 3. Venue & Schedule Details -->
      <EventDetails />

      <!-- 4. Respected Hosts Section -->
      <HostsSection />

      <!-- 5. RSVP & Attendance Form -->
      <RsvpSection />

      <!-- 6. Blessings & Du'as Guestbook -->
      <BlessingsWall />

      <!-- 7. Central Download Hub -->
      <DownloadCenter />

    </main>

    <!-- Floating Audio Player Bar -->
    <AudioPlayerBar />

    <!-- Royal Footer -->
    <footer class="bg-[#241316] text-[#fbf8f2] border-t-2 border-[#c59b4c] py-12 px-4 sm:px-6 relative z-20">
      <div class="max-w-4xl mx-auto text-center space-y-4">
        
        <!-- Bismillah / Du'a -->
        <p class="font-arabic text-2xl sm:text-3xl text-[#dfc384]">
          بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </p>

        <p class="font-serif text-lg font-bold text-white tracking-wider">
          Hamza Nawaz & Laiba Waheed
        </p>

        <p class="text-xs text-[#d4b370] uppercase tracking-widest">
          Sunday, 6th December 2026 • Lahore, Pakistan
        </p>

        <div class="w-24 h-px bg-gradient-to-r from-transparent via-[#c59b4c] to-transparent mx-auto"></div>

        <p class="text-[11px] text-[#fbf8f2]/60 pt-2">
          Designed with love for our wedding celebration. Made for family & friends.
        </p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import CountdownSection from './components/CountdownSection.vue';
import EventDetails from './components/EventDetails.vue';
import HostsSection from './components/HostsSection.vue';
import RsvpSection from './components/RsvpSection.vue';
import BlessingsWall from './components/BlessingsWall.vue';
import DownloadCenter from './components/DownloadCenter.vue';
import EnvelopeModal from './components/EnvelopeModal.vue';
import CardViewerModal from './components/CardViewerModal.vue';
import AudioPlayerBar from './components/AudioPlayerBar.vue';
import PetalsCanvas from './components/PetalsCanvas.vue';

const envelopeRef = ref(null);
const cardViewerRef = ref(null);

function openEnvelope() {
  if (envelopeRef.value) {
    envelopeRef.value.show();
  }
}

function openCardViewer() {
  if (cardViewerRef.value) {
    cardViewerRef.value.open();
  }
}
</script>
