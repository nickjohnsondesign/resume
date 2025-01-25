// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get all thumbnail and larger images
    const thumbnails = document.querySelectorAll(".thumbnail img");
    const largerImages = document.querySelectorAll(".image-container img");
    const modal = document.getElementById("image-viewer-modal");
    const modalImage = document.getElementById("modal-image");
    const modalCaption = document.getElementById("caption");
    const closeButton = document.querySelector(".modal .close");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    let currentImageIndex = 0; // Index for current image in modal

    // Helper function to open the modal with the correct image
    function openModal(imageSrc, captionText) {
        modalImage.src = imageSrc; // Set modal image source
        modalCaption.textContent = captionText; // Set caption
        modal.style.display = "block"; // Show the modal
        currentImageIndex = Array.from(largerImages).findIndex(img => img.src === imageSrc);
    }

    // Function to show the next image in the modal
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % largerImages.length;
        openModal(largerImages[currentImageIndex].src, largerImages[currentImageIndex].alt || "");
    }

    // Function to show the previous image in the modal
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + largerImages.length) % largerImages.length;
        openModal(largerImages[currentImageIndex].src, largerImages[currentImageIndex].alt || "");
    }

    // Add click event to each thumbnail
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            const largeImageSrc = thumbnail.getAttribute("data-large-src") || thumbnail.src;
            const captionText = thumbnail.getAttribute("title") || "";
            openModal(largeImageSrc, captionText);
        });
    });

    // Add click event to each larger image
    largerImages.forEach((largerImage) => {
        largerImage.addEventListener("click", () => {
            openModal(largerImage.src, largerImage.alt || largerImage.title || "");
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Add event listeners for the next/prev buttons
    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);
});
