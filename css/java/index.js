const progress = document.querySelector('.progress-bar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
  const progressPercent = (window.scrollY / totalHeight) * 100;
  progress.style.width = progressPercent + '%';
};

//CODIGO DE LA ANIMACION de la flecha

window.addEventListener('scroll', function () {
  const flecha = document.querySelector('.flecha');
  if (window.scrollY > 1) { // Ajusta el valor según tus necesidades
    flecha.classList.add('oculto');
  } else {
    flecha.classList.remove('oculto');
  }
});

//Codigo de la animacion del texto de la flecha
window.addEventListener('scroll', function () {
  const flecha = document.querySelector('.text-flecha');
  if (window.scrollY > 1) { // Ajusta el valor según tus necesidades
    flecha.classList.add('oculto');
  } else {
    flecha.classList.remove('oculto');
  }
});

// CODIGO DE LA ANIMACION HACIA EL MAIN

const scrollToMainButton = document.getElementById('scrollToMain');
const mainSection = document.getElementById('main2');

scrollToMainButton.addEventListener('click', () => {
  mainSection.scrollIntoView({ behavior: 'smooth' });
});


// CODIGO DEL AUDIO

const playPauseButton = document.getElementById('playPauseButton');
const playImage = document.getElementById('playImage');
const pauseImage = document.getElementById('pauseImage');
const audio = document.getElementById('myAudio');
let isPlaying = false;

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playImage.style.display = 'block';
    pauseImage.style.display = 'none';
  } else {
    audio.play();
    playImage.style.display = 'none';
    pauseImage.style.display = 'block';
  }
  isPlaying = !isPlaying;
});

//ENLACES A PAGINAS

        document.getElementById("1").addEventListener("click", () => {
    window.location.href = "introduccion.html";
        });


document.getElementById("2").addEventListener("click", () => {
  window.location.href = "artistas.html";
});

document.getElementById("3").addEventListener("click", () => {
  window.location.href = "discografia.html";
});

document.getElementById("4").addEventListener("click", () => {
  window.location.href = "galeria.html";
});

document.getElementById("5").addEventListener("click", () => {
  window.location.href = "nosotros.html";
});
