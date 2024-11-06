const progress = document.querySelector('.progress-bar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
  const progressPercent = (window.scrollY / totalHeight) * 100;
  progress.style.width = progressPercent + '%';
};

// CODIGO DE LA ANIMACION HACIA EL MAIN

const scrollToMainButton = document.getElementById('scrollToMain');
const mainSection = document.getElementById('main2');

scrollToMainButton.addEventListener('click', () => {
  mainSection.scrollIntoView({ behavior: 'smooth' });
});


// CODIGO DEL AUDIO

const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');

playButton.addEventListener('click', () => {
  audio.play();
});

pauseButton.addEventListener('click', () => {
  audio.pause();
});