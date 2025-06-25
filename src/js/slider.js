document.addEventListener('DOMContentLoaded', function () {

    const slides = document.querySelectorAll('.ctechs-hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 15000;

    function changeSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        currentSlide = n;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function startSlideshow() {
        slideInterval = setInterval(() => {
            let next = currentSlide + 1;
            if (next >= slides.length) {
                next = 0;
            }
            changeSlide(next);
        }, intervalTime);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {

            clearInterval(slideInterval);
            changeSlide(index);
            startSlideshow();
        });
    });

    let touchStartX = 0;
    let touchEndX = 0;

    const heroSection = document.querySelector('.ctechs-hero');

    heroSection.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    heroSection.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;

        if (touchEndX < touchStartX - swipeThreshold) {
            clearInterval(slideInterval);
            let next = currentSlide + 1;
            if (next >= slides.length) {
                next = 0;
            }
            changeSlide(next);
            startSlideshow();
        }

        if (touchEndX > touchStartX + swipeThreshold) {
            clearInterval(slideInterval);
            let prev = currentSlide - 1;
            if (prev < 0) {
                prev = slides.length - 1;
            }
            changeSlide(prev);
            startSlideshow();
        }
    }

    heroSection.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    heroSection.addEventListener('mouseleave', () => {
        startSlideshow();
    });

    startSlideshow();
});

