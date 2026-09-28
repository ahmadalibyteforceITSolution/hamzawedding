import { reactive, ref } from 'vue';

export const audioState = reactive({
  isPlaying: false,
  volume: 0.6,
  isMuted: false,
  trackName: 'Aaj Mere Yaar Ki Shaadi Hai',
  hasInteracted: false,
});

let audioInstance = null;
let sfxOpen = null;
let sfxCelebrate = null;

// Synthesizer fallback if audio tag has any trouble
let audioCtx = null;
let synthOsc1 = null;
let synthOsc2 = null;
let synthGain = null;
let synthTimer = null;

export function initAudio() {
  if (typeof window === 'undefined') return;

  if (!audioInstance) {
    audioInstance = new Audio('/assets/wedding-music.wav');
    audioInstance.loop = true;
    audioInstance.volume = audioState.volume;
  }

  if (!sfxOpen) {
    sfxOpen = new Audio('/assets/envelope-open.wav');
    sfxOpen.volume = 0.5;
  }

  if (!sfxCelebrate) {
    sfxCelebrate = new Audio('/assets/celebrate.wav');
    sfxCelebrate.volume = 0.6;
  }
}

export function playMusic() {
  initAudio();
  audioState.hasInteracted = true;
  if (audioInstance) {
    audioInstance.volume = audioState.isMuted ? 0 : audioState.volume;
    audioInstance.play().then(() => {
      audioState.isPlaying = true;
    }).catch(err => {
      console.warn('Audio tag autoplay prevented, falling back to Web Audio API synthesis:', err);
      startWebAudioSynth();
    });
  }
}

export function pauseMusic() {
  if (audioInstance) {
    audioInstance.pause();
  }
  stopWebAudioSynth();
  audioState.isPlaying = false;
}

export function toggleMusic() {
  if (audioState.isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

export function setVolume(val) {
  audioState.volume = Math.max(0, Math.min(1, val));
  if (audioInstance) {
    audioInstance.volume = audioState.isMuted ? 0 : audioState.volume;
  }
  if (synthGain) {
    synthGain.gain.setValueAtTime(audioState.isMuted ? 0 : audioState.volume * 0.15, audioCtx ? audioCtx.currentTime : 0);
  }
}

export function toggleMute() {
  audioState.isMuted = !audioState.isMuted;
  setVolume(audioState.volume);
}

export function playEnvelopeSfx() {
  try {
    initAudio();
    if (sfxOpen) {
      sfxOpen.currentTime = 0;
      sfxOpen.play().catch(() => {});
    }
  } catch (e) {
    // Ignore audio autoplay restrictions
  }
}

export function playCelebrateSfx() {
  try {
    initAudio();
    if (sfxCelebrate) {
      sfxCelebrate.currentTime = 0;
      sfxCelebrate.play().catch(() => {});
    }
  } catch (e) {
    // Ignore
  }
}

// Built-in fallback Web Audio Synthesizer
function startWebAudioSynth() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    synthGain = audioCtx.createGain();
    synthGain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    synthGain.connect(audioCtx.destination);

    // Warm Tanpura Drone
    const drone1 = audioCtx.createOscillator();
    drone1.type = 'sine';
    drone1.frequency.setValueAtTime(146.83, audioCtx.currentTime); // D3
    drone1.connect(synthGain);
    drone1.start();
    synthOsc1 = drone1;

    const drone2 = audioCtx.createOscillator();
    drone2.type = 'triangle';
    drone2.frequency.setValueAtTime(220.00, audioCtx.currentTime); // A3
    drone2.connect(synthGain);
    drone2.start();
    synthOsc2 = drone2;

    audioState.isPlaying = true;
  } catch (err) {
    console.error('Audio synth error:', err);
  }
}

function stopWebAudioSynth() {
  try {
    if (synthOsc1) { synthOsc1.stop(); synthOsc1.disconnect(); synthOsc1 = null; }
    if (synthOsc2) { synthOsc2.stop(); synthOsc2.disconnect(); synthOsc2 = null; }
    if (synthTimer) { clearInterval(synthTimer); synthTimer = null; }
  } catch (e) {}
}
