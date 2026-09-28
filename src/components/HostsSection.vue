<template>
  <section id="hosts" class="py-16 px-4 sm:px-6 relative">
    <div class="max-w-4xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-10">
        <p class="text-xs uppercase tracking-[0.25em] text-[#8e6330] font-semibold">Warmly Welcomed By Our Families</p>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#771e30] mt-1">
          Received By
        </h2>
        <div class="w-20 h-0.5 bg-[#c59b4c] mx-auto mt-2"></div>
        <p class="text-xs text-[#754f2c] max-w-lg mx-auto mt-3">
          Your presence will be our greatest honor. The Nawaz and Waheed families look forward to welcoming you with warmest hospitality.
        </p>
      </div>

      <!-- Host Family Card Frame -->
      <div class="bg-gradient-to-b from-[#fffcf7] via-[#faf4e6] to-[#fbf8f2] border-2 border-[#c59b4c]/60 rounded-3xl p-6 sm:p-10 shadow-xl max-w-2xl mx-auto relative">
        
        <!-- Decorative subtle emblem -->
        <div class="text-center mb-6">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#771e30]/10 text-[#771e30] text-2xl border border-[#c59b4c]/40">
            ⚜️
          </div>
          <h3 class="font-serif text-sm uppercase tracking-widest text-[#8e6330] font-bold mt-2">
            Respected Family Hosts
          </h3>
        </div>

        <!-- 2 Column Names matching original card -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#c59b4c]/30">
          
          <!-- Column 1 -->
          <div class="space-y-4 pt-2 sm:pt-0 sm:pr-4 text-center">
            <div 
              v-for="name in col1Hosts" 
              :key="name"
              class="p-3 rounded-xl bg-white/80 border border-[#c59b4c]/30 shadow-sm hover:border-[#c59b4c] transition-all hover:scale-[1.02]"
            >
              <p class="font-serif text-base sm:text-lg font-bold text-[#771e30]">{{ name }}</p>
              <p class="text-[10px] uppercase tracking-wider text-[#8e6330]">Host Family</p>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="space-y-4 pt-4 sm:pt-0 sm:pl-4 text-center">
            <div 
              v-for="name in col2Hosts" 
              :key="name"
              class="p-3 rounded-xl bg-white/80 border border-[#c59b4c]/30 shadow-sm hover:border-[#c59b4c] transition-all hover:scale-[1.02]"
            >
              <p class="font-serif text-base sm:text-lg font-bold text-[#771e30]">{{ name }}</p>
              <p class="text-[10px] uppercase tracking-wider text-[#8e6330]">Host Family</p>
            </div>
          </div>

        </div>

        <!-- Query Contact Banner -->
        <div class="mt-8 p-4 rounded-2xl bg-white/90 border border-[#c59b4c] shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">📱</span>
            <div>
              <p class="font-serif font-bold text-[#771e30] text-sm">For Any Query or Assistance</p>
              <p class="text-xs text-[#754f2c]">Please message or call: <strong class="text-[#771e30]">+92 308 4195221</strong></p>
            </div>
          </div>
          <a
            href="https://wa.me/923084195221?text=Assalam-o-Alaikum!%20I%20have%20a%20query%20regarding%20the%20Walima%20Ceremony."
            target="_blank"
            class="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1ebd5b] text-white text-xs font-bold transition-all shadow flex items-center gap-1.5 active:scale-95"
          >
            <span>💬</span>
            <span>Send Query on WhatsApp</span>
          </a>
        </div>

        <!-- Quote / Ayat at bottom -->
        <div class="mt-8 text-center border-t border-[#c59b4c]/30 pt-6">
          <p class="font-serif italic text-xs sm:text-sm text-[#754f2c]">
            "And among His signs is that He created for you mates from among yourselves that you may find tranquility in them; and He placed between you love and mercy."
          </p>
          <p class="text-[11px] text-[#8e6330] font-semibold mt-1">— Surah Ar-Rum [30:21]</p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const col1Hosts = [
  'Muhammad Nawaz',
  'Abdul Hafeez',
  'Mumtaz Ahmad',
  'Gulzar Subhani'
];

const col2Hosts = [
  'Azhar Hafeez',
  'Asad Ali',
  'Moeez Nawaz',
  'Zain Nawaz'
];
</script>
