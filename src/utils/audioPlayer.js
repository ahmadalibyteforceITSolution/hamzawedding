import { reactive } from 'vue';

export const audioState = reactive({
  isPlaying: false,
  volume: 1.0, // 100% full volume for clear voice
  isMuted: false,
  trackName: 'Wedding Sehra - Mazhar Rahi & Fiza Ali',
  hasInteracted: false,
  isReady: false
});

let sfxOpen = null;
let sfxCelebrate = null;

export function initAudioSystem() {
  if (typeof window === 'undefined') return;

  if (!sfxOpen) {
    sfxOpen = new Audio('/assets/envelope-open.wav');
    sfxOpen.volume = 0.5;
  }
  if (!sfxCelebrate) {
    sfxCelebrate = new Audio('/assets/celebrate.wav');
    sfxCelebrate.volume = 0.6;
  }

  // Listen to YouTube player status messages
  window.addEventListener('message', (event) => {
    try {
      if (typeof event.data !== 'string') return;
      const data = JSON.parse(event.data);
      if (data.event === 'onReady') {
        audioState.isReady = true;
        sendYtCommand('unMute');
        sendYtCommand('setVolume', [100]);
        if (audioState.isPlaying) {
          sendYtCommand('playVideo');
        }
      } else if (data.event === 'infoDelivery' && data.info) {
        // Player state: 1 = playing, 2 = paused
        if (data.info.playerState === 1) {
          audioState.isPlaying = true;
        } else if (data.info.playerState === 2 || data.info.playerState === 0) {
          audioState.isPlaying = false;
        }
      }
    } catch (e) {}
  });
}

function sendYtCommand(func, args = '') {
  const iframe = document.getElementById('yt-wedding-iframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: func,
      args: args
    }), '*');
  }
}

export function playMusic() {
  audioState.hasInteracted = true;
  audioState.isPlaying = true;

  // Send play & unMute & set volume to 100%
  sendYtCommand('unMute');
  sendYtCommand('setVolume', [Math.round(audioState.volume * 100)]);
  sendYtCommand('playVideo');

  // Repeat after short delay to ensure browser registers user gesture
  setTimeout(() => {
    sendYtCommand('unMute');
    sendYtCommand('setVolume', [Math.round(audioState.volume * 100)]);
    sendYtCommand('playVideo');
  }, 300);
}

export function pauseMusic() {
  audioState.isPlaying = false;
  sendYtCommand('pauseVideo');
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
  sendYtCommand('setVolume', [Math.round(audioState.volume * 100)]);
}

export function toggleMute() {
  audioState.isMuted = !audioState.isMuted;
  if (audioState.isMuted) {
    sendYtCommand('mute');
  } else {
    sendYtCommand('unMute');
    sendYtCommand('setVolume', [Math.round(audioState.volume * 100)]);
  }
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
