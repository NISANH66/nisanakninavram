document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.testimonial-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close');

    images.forEach(image => {
        image.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImage.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target !== lightboxImage) {
            lightbox.style.display = 'none';
        }
    });
});
