document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const images = slider.querySelectorAll("img");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");

  let currentIndex = 0;
  const totalSlides = images.length;

  function updateSlider() {
      const width = slider.clientWidth;
      slider.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
  }

  nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
  });

  // Auto slide
  let autoSlide = setInterval(nextSlide, 4000);

  function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 4000);
  }

  window.addEventListener("resize", updateSlider); 
  updateSlider(); 
});