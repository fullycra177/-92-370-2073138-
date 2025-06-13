// Set 2 hours countdown (2 * 60 * 60 = 7200 seconds)
let secondsLeft = 7200;

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateTimer() {
  const timerEl = document.getElementById('timer');
  const finalMsg = document.getElementById('final-message');

  if (secondsLeft > 0) {
    timerEl.textContent = formatTime(secondsLeft);
    secondsLeft--;
    setTimeout(updateTimer, 1000);
  } else {
    timerEl.textContent = '00:00:00';
    finalMsg.classList.remove('hidden');
  }
}

// Start countdown on load
window.onload = updateTimer;
