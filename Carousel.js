document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail img");
    const largerImages = document.querySelectorAll(".image-container img");
    const modal = document.getElementById("image-viewer-modal");
    const modalImage = document.getElementById("modal-image");
    const modalCaption = document.getElementById("caption");
    const closeButton = document.querySelector(".modal .close");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    let currentImageIndex = 0;

    // Function to open the modal
    function openModal(imageSrc, captionText) {
        modal.classList.add("show"); // Show the modal
        modalImage.classList.remove("visible"); // Initially hide image
        modalImage.src = imageSrc; // Set the new image source
        modalCaption.textContent = captionText; // Set the caption
        
        // Wait for the image source to be set, then show the image with a fade-in effect
        setTimeout(() => {
            modalImage.classList.add("visible"); // Fade in the new image
        }, 50); // Delay slightly to ensure the src is updated before fading in

        currentImageIndex = Array.from(largerImages).findIndex(img => img.src === imageSrc);
    }

    // Function to close the modal
    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modalImage.src = "";
            modalCaption.textContent = "";
        }, 300);
    }

    // Function to show the next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % largerImages.length;
        const nextImage = largerImages[currentImageIndex];
        openModal(nextImage.src, nextImage.alt || nextImage.title || "");
    }

    // Function to show the previous image
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + largerImages.length) % largerImages.length;
        const prevImage = largerImages[currentImageIndex];
        openModal(prevImage.src, prevImage.alt || prevImage.title || "");
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
    closeButton.addEventListener("click", closeModal);

    // Close the modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Add event listeners for the next/prev buttons
    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);
});
