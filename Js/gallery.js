const galleryData = {
  box1: [
    "Media/Box-1/Box-1.1.jpg",
    "Media/Box-1/Box-1.2.jpg",
    "Media/Box-1/Box-1.3.jpg",
  ],
  box2: [
    "Media/Box-2/IMG_3320.JPG",
    "Media/Box-2/IMG_3322.JPG",
    "Media/Box-2/IMG_3325.JPG",
    "Media/Box-2/IMG_3327.JPG",
  ],
  box3: [
    "Media/Box-3/IMG_3134.JPG",
    "Media/Box-3/IMG_3136.JPG",
    "Media/Box-3/IMG_3137.JPG",
    "Media/Box-3/IMG_3138.JPG",
    "Media/Box-3/IMG_3139.JPG",
    "Media/Box-3/IMG_3140.JPG",
    "Media/Box-3/IMG_3143.JPG",
  ],
  box4: [
    "Media/Box-4/IMG_3122.JPG",
    "Media/Box-4/IMG_3125.JPG",
    "Media/Box-4/IMG_3126.JPG",
    "Media/Box-4/IMG_3127.JPG",
    "Media/Box-4/IMG_3128.JPG",
    "Media/Box-4/IMG_3129.JPG",
    "Media/Box-4/IMG_3130.JPG",
  ],
  box5: [
    "Media/Box-5/box5-img-1.jpg",
    "Media/Box-5/box5-img-2.jpg",
    "Media/Box-5/box5-img-3.jpg",
    "Media/Box-5/box5-img-4.jpg",
    "Media/Box-5/box5-img-5.jpg",
    "Media/Box-5/box5-img-6.jpg",
  ],
};

const firsGallery = document.getElementById("first-gallery");
const galleryContainer = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-lightbox");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let currentImages = [];
let currentIndex = 0;

function getBoxFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("box");
}

function showGallery(boxId) {
  galleryContainer.innerHTML = "";
  currentImages = galleryData[boxId] || [];

  if (currentImages.length === 0) {
    galleryContainer.innerHTML = "<p>Şəkil tapılmadı.</p>";
    return;
  }

  currentImages.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "300px";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    img.style.margin = "10px";
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openLightbox(index));
    galleryContainer.appendChild(img);
  });
}

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = currentImages[currentIndex];
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden"; // scroll disable
}

function closeLightbox() {
  lightbox.style.display = "none";
  document.body.style.overflow = ""; // scroll restore
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex];
}

function showPrevImage() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex];
}

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

// ESC ilə bağlamaq
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

const boxId = getBoxFromURL();
showGallery(boxId);
