import { reactive } from 'vue';

export const audioState = reactive({
  isPlaying: false,
  volume: 0.7,
  isMuted: false,
  trackName: 'Wedding Sehra - Mazhar Rahi & Fiza Ali',
  hasInteracted: false,
  usingYouTube: true
});

const YOUTUBE_VIDEO_ID = 'HD4UtsmAV4Y';

let ytPlayer = null;
let ytReady = false;
let pendingPlay = false;

let audioInstance = null;
let sfxOpen = null;
let sfxCelebrate = null;

// Initialize YouTube Iframe API
export function initYouTubeAudio() {
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
  if (!audioInstance) {
    audioInstance = new Audio('/assets/wedding-music.wav');
    audioInstance.loop = true;
    audioInstance.volume = audioState.volume;
  }

  // Check if API script already injected
  if (!document.getElementById('yt-iframe-api-script')) {
    const tag = document.createElement('script');
    tag.id = 'yt-iframe-api-script';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  window.onYouTubeIframeAPIReady = () => {
    try {
      ytPlayer = new window.YT.Player('yt-hidden-audio-player', {
        height: '1',
        width: '1',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          playsinline: 1
        },
        events: {
          onReady: (event) => {
            ytReady = true;
            event.target.setVolume(audioState.volume * 100);
            if (audioState.isMuted) {
              event.target.mute();
            }
            if (pendingPlay) {
              event.target.playVideo();
              pendingPlay = false;
            }
          },
          onStateChange: (event) => {
            // YT.PlayerState.PLAYING is 1
            if (event.data === 1) {
              audioState.isPlaying = true;
              audioState.usingYouTube = true;
            } else if (event.data === 2 || event.data === 0) {
              audioState.isPlaying = false;
            }
          },
          onError: (err) => {
            console.warn('YouTube Player encountered issue, falling back to local wedding music:', err);
            audioState.usingYouTube = false;
            if (audioState.isPlaying && audioInstance) {
              audioInstance.play().catch(() => {});
            }
          }
        }
      });
    } catch (e) {
      console.error('Error instantiating YT Player:', e);
    }
  };
}

export function playMusic() {
  audioState.hasInteracted = true;
  audioState.isPlaying = true;

  if (ytReady && ytPlayer && typeof ytPlayer.playVideo === 'function') {
    try {
      ytPlayer.unMute();
      ytPlayer.setVolume(audioState.isMuted ? 0 : audioState.volume * 100);
      ytPlayer.playVideo();
      return;
    } catch (e) {
      console.warn('Could not call playVideo on YT Player, using fallback:', e);
    }
  } else {
    pendingPlay = true;
  }

  // Backup HTML5 local audio playback
  if (audioInstance) {
    audioInstance.volume = audioState.isMuted ? 0 : audioState.volume;
    audioInstance.play().then(() => {
      audioState.isPlaying = true;
    }).catch(() => {});
  }
}

export function pauseMusic() {
  audioState.isPlaying = false;
  pendingPlay = false;

  if (ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
    try {
      ytPlayer.pauseVideo();
    } catch (e) {}
  }

  if (audioInstance) {
    audioInstance.pause();
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
  if (ytPlayer && typeof ytPlayer.setVolume === 'function') {
    try {
      ytPlayer.setVolume(audioState.volume * 100);
    } catch (e) {}
  }
  if (audioInstance) {
    audioInstance.volume = audioState.isMuted ? 0 : audioState.volume;
  }
}

export function toggleMute() {
  audioState.isMuted = !audioState.isMuted;
  if (ytPlayer) {
    try {
      if (audioState.isMuted && typeof ytPlayer.mute === 'function') {
        ytPlayer.mute();
      } else if (!audioState.isMuted && typeof ytPlayer.unMute === 'function') {
        ytPlayer.unMute();
        ytPlayer.setVolume(audioState.volume * 100);
      }
    } catch (e) {}
  }
  if (audioInstance) {
    audioInstance.volume = audioState.isMuted ? 0 : audioState.volume;
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
