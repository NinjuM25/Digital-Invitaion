// Countdown Timer
const countdown = document.getElementById('timer');
const eventDate = new Date("December 30, 2024 14:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval();
    countdown.innerHTML = "Event Started!";
  }
}, 1000);

// Popup Image Functionality
function showPopup(imageSrc) {
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  popupImage.src = imageSrc;
  popup.style.display = 'flex';
}

function closePopup() {
  document.getElementById('image-popup').style.display = 'none';
}
