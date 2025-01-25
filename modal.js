const modal = document.getElementById('image-viewer-modal');
const modalImage = document.getElementById('modal-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselContainer = document.querySelector('.carousel-container');
const prevButton = carouselContainer.querySelector('.prev');
const nextButton = carouselContainer.querySelector('.next');
const carouselInner = carouselContainer.querySelector('.carousel-inner');

// Function to populate the modal content
function populateModal(index) {
  const images = Array.from(carouselInner.children);
  modalImage.src = images[index].src;
  document.getElementById('caption').textContent = images[index].alt;
}

// Add event listeners to carousel buttons
prevButton.addEventListener("click", () => {
  const currentIndex = Array.from(carouselInner.children).indexOf(carouselInner.children[0]);
  const newIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
  carouselInner.style.transform = `translateX(-${newIndex * 100}%)`;
});

nextButton.addEventListener("click", () => {
  const currentIndex = Array.from(carouselInner.children).indexOf(carouselInner.children[0]);
  const newIndex = (currentIndex + 1) % carouselInner.children.length;
  carouselInner.style.transform = `translateX(-${newIndex * 100}%)`;
});

// Add event listeners to thumbnails
carouselInner.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const index = Array.from(carouselInner.children).indexOf(event.target);
    modal.style.display = 'block';
    populateModal(index);
  }
});