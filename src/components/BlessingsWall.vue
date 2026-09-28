<template>
  <section id="wishes" class="py-16 px-4 sm:px-6 relative">
    <div class="max-w-4xl mx-auto">
      
      <!-- Section Header -->
      <div class="text-center mb-10">
        <p class="text-xs uppercase tracking-[0.25em] text-[#8e6330] font-semibold">Prayers & Du'as for Hamza & Laiba</p>
        <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#771e30] mt-1">
          Blessings & Guestbook
        </h2>
        <div class="w-20 h-0.5 bg-[#c59b4c] mx-auto mt-2"></div>
        <p class="text-xs sm:text-sm text-[#754f2c] mt-2">
          Leave your loving wishes and prayers for the newly married couple.
        </p>
      </div>

      <!-- Write a Blessing Card -->
      <div class="bg-gradient-to-r from-[#fffcf7] to-[#faf4e6] border-2 border-[#c59b4c]/50 rounded-2xl p-6 sm:p-8 shadow-lg mb-10 max-w-2xl mx-auto">
        <h3 class="font-serif font-bold text-lg text-[#771e30] mb-4 flex items-center gap-2">
          <span>✍️</span>
          <span>Send Your Du'a & Mubarak</span>
        </h3>

        <form @submit.prevent="addWish" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              v-model="newWish.author"
              required
              type="text"
              placeholder="Your Name (e.g. Uncle Farooq)"
              class="w-full px-4 py-2.5 rounded-xl border border-[#c59b4c]/40 bg-white text-sm outline-none focus:border-[#771e30]"
            />
            <input
              v-model="newWish.relation"
              type="text"
              placeholder="Relationship / City (e.g. Lahore / Friend)"
              class="w-full px-4 py-2.5 rounded-xl border border-[#c59b4c]/40 bg-white text-sm outline-none focus:border-[#771e30]"
            />
          </div>

          <textarea
            v-model="newWish.text"
            required
            rows="3"
            placeholder="Write your prayers and warm wishes..."
            class="w-full px-4 py-2.5 rounded-xl border border-[#c59b4c]/40 bg-white text-sm outline-none focus:border-[#771e30]"
          ></textarea>

          <button
            type="submit"
            class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#771e30] to-[#cb2f4b] text-white font-semibold text-xs sm:text-sm tracking-wide shadow hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>💐</span>
            <span>Send Blessing to Couple</span>
          </button>
        </form>
      </div>

      <!-- Wishes Masonry / Grid Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div
          v-for="(wish, index) in wishes"
          :key="index"
          class="bg-white rounded-2xl p-5 border border-[#c59b4c]/40 shadow-sm hover:shadow-md hover:border-[#c59b4c] transition-all flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-[#fbf3f4] text-[#771e30] font-bold text-xs flex items-center justify-center border border-[#c59b4c]/30">
                  {{ wish.author.charAt(0) }}
                </div>
                <div>
                  <h4 class="font-serif font-bold text-sm text-[#771e30]">{{ wish.author }}</h4>
                  <p class="text-[10px] text-[#8e6330]">{{ wish.relation || 'Well-wisher' }}</p>
                </div>
              </div>
              <span class="text-[10px] text-[#754f2c]/70">{{ wish.time }}</span>
            </div>

            <p class="text-xs sm:text-sm text-[#624127] italic leading-relaxed">
              "{{ wish.text }}"
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-[#ede0be]/60 flex items-center justify-between text-xs text-[#8e6330]">
            <span class="font-arabic text-sm text-[#771e30]">بَارَكَ اللَّهُ لَكُمَا</span>
            <button 
              @click="likeWish(wish)"
              class="flex items-center gap-1 text-xs hover:text-[#cb2f4b] transition-colors py-1 px-2 rounded-lg hover:bg-[#fbf3f4]"
            >
              <span>❤️</span>
              <span>{{ wish.likes || 0 }}</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import confetti from 'canvas-confetti';
import { playCelebrateSfx } from '../utils/audioPlayer.js';

const WISHES_STORAGE_KEY = 'walima_wishes_v1';

const newWish = reactive({
  author: '',
  relation: '',
  text: ''
});

const wishes = ref([
  {
    author: 'Uncle Tahir & Family',
    relation: 'Family Elder • Lahore',
    text: 'Barakallahu lakuma wa baraka alaikuma wa jama\'a bainakuma fee khair. May Allah SWT shower His blessings upon your union and grant you lifetime of love, peace and barakah.',
    time: 'Yesterday',
    likes: 18
  },
  {
    author: 'Usman & Maryam',
    relation: 'Cousins',
    text: 'Huge congratulations to dearest Hamza Bhai and Laiba Bhabi! Wishing both of you boundless happiness, beautiful memories, and a blessed new journey together!',
    time: '2 days ago',
    likes: 24
  },
  {
    author: 'Dr. Kamran Qureshi',
    relation: 'Family Friend',
    text: 'MashaAllah what a wonderful couple! Heartiest felicitations to Muhammad Nawaz sahib and Abdul Hafeez sahib and all families.',
    time: '3 days ago',
    likes: 12
  },
  {
    author: 'Ayesha & Saad',
    relation: 'University Friends',
    text: 'So thrilled for Hamza & Laiba! Can\'t wait to attend on 6th December in Lahore. Keep smiling always!',
    time: 'Just now',
    likes: 9
  }
]);

onMounted(() => {
  try {
    const saved = localStorage.getItem(WISHES_STORAGE_KEY);
    if (saved) {
      wishes.value = JSON.parse(saved);
    }
  } catch (e) {}
});

function addWish() {
  playCelebrateSfx();

  wishes.value.unshift({
    author: newWish.author,
    relation: newWish.relation || 'Well-wisher',
    text: newWish.text,
    time: 'Just now',
    likes: 1
  });

  try {
    localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishes.value));
  } catch (e) {}

  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.7 }
  });

  newWish.author = '';
  newWish.relation = '';
  newWish.text = '';
}

function likeWish(wish) {
  wish.likes = (wish.likes || 0) + 1;
  try {
    localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishes.value));
  } catch (e) {}
}
</script>
