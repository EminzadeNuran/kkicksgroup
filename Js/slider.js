document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let current = 0;
    let autoSlide;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    function prevSlide() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, 5000); // 5 saniyədə bir dəyişir
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    startAutoSlide();
  });
