<template>
  <section id="rsvp" class="py-16 px-4 sm:px-6 bg-[#f7f2e7]/70 relative">
    <div class="max-w-3xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-10">
        <p class="text-xs uppercase tracking-[0.25em] text-[#8e6330] font-semibold">Join Our Celebration</p>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#771e30] mt-1">
          RSVP & Guest Attendance
        </h2>
        <div class="w-20 h-0.5 bg-[#c59b4c] mx-auto mt-2"></div>
        <p class="text-xs sm:text-sm text-[#754f2c] mt-2">
          Kindly respond by 1st December 2026 to help us prepare for your gracious presence.
        </p>
      </div>

      <!-- RSVP Card -->
      <div class="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#c59b4c]/50 shadow-2xl relative">
        
        <!-- Form when not yet submitted in this session or editing -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          
          <!-- Full Name -->
          <div>
            <label class="block text-xs uppercase tracking-wider font-bold text-[#771e30] mb-1.5">
              Your Full Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.name"
              required
              type="text"
              placeholder="e.g. Dr. Salman Khan & Family"
              class="w-full px-4 py-3 rounded-xl border border-[#c59b4c]/50 focus:border-[#771e30] focus:ring-2 focus:ring-[#771e30]/20 outline-none text-sm transition-all bg-[#faf8f2]"
            />
          </div>

          <!-- Phone / WhatsApp -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs uppercase tracking-wider font-bold text-[#771e30] mb-1.5">
                WhatsApp / Phone <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.phone"
                required
                type="tel"
                placeholder="e.g. +92 300 1234567"
                class="w-full px-4 py-3 rounded-xl border border-[#c59b4c]/50 focus:border-[#771e30] focus:ring-2 focus:ring-[#771e30]/20 outline-none text-sm transition-all bg-[#faf8f2]"
              />
            </div>

            <!-- Number of Guests -->
            <div>
              <label class="block text-xs uppercase tracking-wider font-bold text-[#771e30] mb-1.5">
                Number of Guests Attending
              </label>
              <select
                v-model.number="form.guests"
                class="w-full px-4 py-3 rounded-xl border border-[#c59b4c]/50 focus:border-[#771e30] focus:ring-2 focus:ring-[#771e30]/20 outline-none text-sm transition-all bg-[#faf8f2]"
              >
                <option v-for="n in 10" :key="n" :value="n">
                  {{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}
                </option>
              </select>
            </div>
          </div>

          <!-- Attendance Radio options -->
          <div>
            <label class="block text-xs uppercase tracking-wider font-bold text-[#771e30] mb-2">
              Will you be joining us? <span class="text-red-500">*</span>
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label 
                :class="[
                  'flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all',
                  form.attending === 'Attending' 
                    ? 'border-[#771e30] bg-[#fbf3f4] text-[#771e30] font-bold shadow-sm' 
                    : 'border-[#c59b4c]/40 bg-[#faf8f2] text-[#624127]'
                ]"
              >
                <input type="radio" value="Attending" v-model="form.attending" class="hidden" />
                <span class="text-lg">🎉</span>
                <span class="text-xs sm:text-sm">Joyfully Attending</span>
              </label>

              <label 
                :class="[
                  'flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all',
                  form.attending === 'Declining' 
                    ? 'border-[#771e30] bg-[#fbf3f4] text-[#771e30] font-bold shadow-sm' 
                    : 'border-[#c59b4c]/40 bg-[#faf8f2] text-[#624127]'
                ]"
              >
                <input type="radio" value="Declining" v-model="form.attending" class="hidden" />
                <span class="text-lg">💌</span>
                <span class="text-xs sm:text-sm">Regretfully Declining</span>
              </label>
            </div>
          </div>

          <!-- Message / Du'a -->
          <div>
            <label class="block text-xs uppercase tracking-wider font-bold text-[#771e30] mb-1.5">
              Blessings & Note for the Couple (Optional)
            </label>
            <textarea
              v-model="form.message"
              rows="3"
              placeholder="Write your prayers, du'as or congratulations to Hamza & Laiba..."
              class="w-full px-4 py-3 rounded-xl border border-[#c59b4c]/50 focus:border-[#771e30] focus:ring-2 focus:ring-[#771e30]/20 outline-none text-sm transition-all bg-[#faf8f2]"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button
              type="submit"
              class="w-full py-4 rounded-xl bg-gradient-to-r from-[#771e30] via-[#9e1f36] to-[#771e30] text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>✨</span>
              <span>Confirm RSVP Submission</span>
              <span>✨</span>
            </button>
          </div>

        </form>

        <!-- Success Toast Alert -->
        <div v-if="submittedMessage" class="mt-6 p-4 rounded-2xl bg-[#f0fdf4] border border-[#86efac] text-[#166534] flex items-center gap-3 text-sm animate-fade-in">
          <span class="text-2xl">✅</span>
          <div>
            <p class="font-bold">Alhamdulillah! Your RSVP has been confirmed.</p>
            <p class="text-xs mt-0.5">Thank you for letting us know. We look forward to celebrating together!</p>
          </div>
        </div>

        <!-- Host Admin RSVP Download & Counter Area -->
        <div class="mt-10 pt-6 border-t border-[#c59b4c]/30 flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#754f2c]">
            <span class="font-bold text-[#771e30]">{{ allRsvps.length }} RSVPs recorded</span> 
            ({{ confirmedGuestsCount }} attending guests)
          </div>

          <!-- Download RSVP CSV button for the family! -->
          <button
            @click="handleDownloadRsvpCsv"
            class="px-4 py-2 rounded-xl bg-[#faf6ee] border border-[#c59b4c] text-[#771e30] hover:bg-[#ede0be] text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            title="Download RSVP responses as Excel / CSV spreadsheet"
          >
            <span>📊</span>
            <span>Download RSVP Guest List (CSV)</span>
          </button>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import confetti from 'canvas-confetti';
import { downloadRsvpCsv } from '../utils/downloadHelpers.js';
import { playCelebrateSfx } from '../utils/audioPlayer.js';

const STORAGE_KEY = 'walima_rsvps_v1';

const form = reactive({
  name: '',
  phone: '',
  guests: 2,
  attending: 'Attending',
  message: ''
});

const submittedMessage = ref(false);
const allRsvps = ref([]);

onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      allRsvps.value = JSON.parse(saved);
    } else {
      // Seed with sample initial RSVPs
      allRsvps.value = [
        { name: 'Dr. Tariq & Family', phone: '+92 300 4567890', guests: 4, attending: 'Attending', message: 'Mubarak ho! May Allah bless the couple with infinite happiness.', date: '2026-09-25' },
        { name: 'Chaudhry Bilal Ahmad', phone: '+92 321 9876543', guests: 2, attending: 'Attending', message: 'InshaAllah we will definitely attend. Warmest wishes from all of us!', date: '2026-09-26' }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allRsvps.value));
    }
  } catch (e) {}
});

const confirmedGuestsCount = computed(() => {
  return allRsvps.value
    .filter(r => r.attending === 'Attending')
    .reduce((sum, r) => sum + (Number(r.guests) || 1), 0);
});

function handleSubmit() {
  playCelebrateSfx();

  const newEntry = {
    name: form.name,
    phone: form.phone,
    guests: form.guests,
    attending: form.attending,
    message: form.message,
    date: new Date().toLocaleDateString()
  };

  allRsvps.value.unshift(newEntry);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allRsvps.value));
  } catch (e) {}

  submittedMessage.value = true;

  // Confetti burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Reset form inputs partially
  form.message = '';
  
  setTimeout(() => {
    submittedMessage.value = false;
  }, 6000);
}

function handleDownloadRsvpCsv() {
  downloadRsvpCsv(allRsvps.value);
}
</script>
