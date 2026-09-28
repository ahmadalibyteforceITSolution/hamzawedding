import { reactive } from 'vue';

export const audioState = reactive({
  isPlaying: false,
  volume: 0.9,
  isMuted: false,
  trackName: 'Driving - Wedding Celebration Music',
  hasInteracted: false,
  isLoaded: false
});

const AUDIO_PATH = '/assets/driving-music.m4a';

let audioCtx = null;
let audioBuffer = null;
let currentSource = null;
let gainNode = null;
let isAudioFetching = false;

let htmlAudio = null;
let sfxOpen = null;
let sfxCelebrate = null;

// Preload and decode audio via Web Audio API (100% bypasses HTML5 media source errors)
export function initAudioSystem() {
  if (typeof window === 'undefined') return;

  // Sound effects
  if (!sfxOpen) {
    sfxOpen = new Audio('/assets/envelope-open.wav');
    sfxOpen.volume = 0.5;
  }
  if (!sfxCelebrate) {
    sfxCelebrate = new Audio('/assets/celebrate.wav');
    sfxCelebrate.volume = 0.6;
  }

  // Pre-fetch and decode the user's driving-music.m4a in memory
  if (!audioBuffer && !isAudioFetching) {
    isAudioFetching = true;
    fetch(AUDIO_PATH)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.arrayBuffer();
      })
      .then(arrayBuf => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        if (!audioCtx) audioCtx = new AudioContext();
        return audioCtx.decodeAudioData(arrayBuf);
      })
      .then(decoded => {
        audioBuffer = decoded;
        audioState.isLoaded = true;
        // If play was requested while loading, start immediately
        if (audioState.isPlaying && !currentSource) {
          startBufferPlayback();
        }
      })
      .catch(err => {
        console.warn('Web Audio decode notice, preparing standard audio fallback:', err);
        initHtmlAudioFallback();
      });
  }
}

function getAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function startBufferPlayback() {
  const ctx = getAudioContext();
  if (!ctx || !audioBuffer) return false;

  stopBufferPlayback();

  gainNode = ctx.createGain();
  const currentVol = audioState.isMuted ? 0 : audioState.volume;
  gainNode.gain.setValueAtTime(currentVol, ctx.currentTime);
  gainNode.connect(ctx.destination);

  currentSource = ctx.createBufferSource();
  currentSource.buffer = audioBuffer;
  currentSource.loop = true;
  currentSource.connect(gainNode);
  currentSource.start(0);

  audioState.isPlaying = true;
  return true;
}

function stopBufferPlayback() {
  if (currentSource) {
    try {
      currentSource.stop();
      currentSource.disconnect();
    } catch (e) {}
    currentSource = null;
  }
}

function initHtmlAudioFallback() {
  if (htmlAudio) return;
  try {
    htmlAudio = document.createElement('audio');
    htmlAudio.loop = true;
    htmlAudio.preload = 'auto';

    const source = document.createElement('source');
    source.src = AUDIO_PATH;
    source.type = 'audio/mp4';
    htmlAudio.appendChild(source);

    const sourceAac = document.createElement('source');
    sourceAac.src = AUDIO_PATH;
    sourceAac.type = 'audio/aac';
    htmlAudio.appendChild(sourceAac);

    document.body.appendChild(htmlAudio);
  } catch (e) {}
}

export function playMusic() {
  audioState.hasInteracted = true;
  audioState.isPlaying = true;

  const ctx = getAudioContext();

  // Method 1: Web Audio API decoded buffer (Fast, clear, zero source errors)
  if (audioBuffer && ctx) {
    startBufferPlayback();
    return;
  }

  // Method 2: If buffer not decoded yet, load it now and start on decode
  initAudioSystem();

  // Method 3: HTML5 audio fallback
  if (htmlAudio) {
    htmlAudio.volume = audioState.isMuted ? 0 : audioState.volume;
    htmlAudio.play().catch(() => {});
  }
}

export function pauseMusic() {
  audioState.isPlaying = false;
  stopBufferPlayback();

  if (htmlAudio) {
    htmlAudio.pause();
  }
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
  const currentVol = audioState.isMuted ? 0 : audioState.volume;
  if (gainNode && audioCtx) {
    gainNode.gain.setValueAtTime(currentVol, audioCtx.currentTime);
  }
  if (htmlAudio) {
    htmlAudio.volume = currentVol;
  }
}

export function toggleMute() {
  audioState.isMuted = !audioState.isMuted;
  setVolume(audioState.volume);
}

export function playEnvelopeSfx() {
  try {
    if (sfxOpen) {
      sfxOpen.currentTime = 0;
      sfxOpen.play().catch(() => {});
    }
  } catch (e) {}
}

export function playCelebrateSfx() {
  try {
    if (sfxCelebrate) {
      sfxCelebrate.currentTime = 0;
      sfxCelebrate.play().catch(() => {});
    }
  } catch (e) {}
}
