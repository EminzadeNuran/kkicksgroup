let currentSlide = 0;
const slides = document.querySelectorAll('.video-item');
const totalSlides = slides.length;


function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  document.querySelector('.video-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
  stopAllVideos();
}


function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function togglePlay(event, index) {
  event.stopPropagation();
  const video = document.getElementById(`video${index}`);
  const overlay = document.getElementById(`overlay${index}`);
  const icon = overlay.querySelector("i");

  if (video.paused) {
    stopAllVideos();
    video.play();
    overlay.classList.remove("visible");
  } else {
    video.pause();
    icon.classList.replace("fa-pause", "fa-play");
    setTimeout(() => {
      overlay.classList.remove("visible");
    }, 1500);
  }
}


function handleOverlayClick(index) {
  const video = document.getElementById(`video${index}`);
  const overlay = document.getElementById(`overlay${index}`);
  const icon = overlay.querySelector("i");

  if (!video.paused) {
    video.pause(); 
    icon.classList.replace("fa-play", "fa-pause");
    overlay.classList.add("visible");
  }
}


function stopAllVideos() {
  for (let i = 1; i <= totalSlides; i++) {
    const v = document.getElementById(`video${i}`);
    const o = document.getElementById(`overlay${i}`);
    const icon = o.querySelector("i");

    v.pause();
    o.classList.add("visible");
    icon.classList.replace("fa-pause", "fa-play");
  }
}

showSlide(0);
