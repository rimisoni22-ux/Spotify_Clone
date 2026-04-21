
  // ===== SELECT ELEMENTS =====
const audio = document.getElementById('audio-player');
const playBtn = document.querySelector('.player-cantrol-icon[style*="height:2rem"]');
const progressBar = document.querySelector('.progress-bar');
const currTime = document.querySelector('.curr-time');
const totTime = document.querySelector('.tot-time');

let isPlaying = false;

// ===== FORMAT TIME =====
function formatTime(sec){
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0'+s : s}`;
}

// ===== PLAY / PAUSE =====
playBtn.addEventListener('click', () => {
    if(!isPlaying){
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
});

// ===== UPDATE PROGRESS BAR =====
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100 || 0;
    progressBar.value = progress;
    currTime.textContent = formatTime(audio.currentTime);
    totTime.textContent = formatTime(audio.duration || 0);
});

// ===== SEEK WITH PROGRESS BAR =====
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});
