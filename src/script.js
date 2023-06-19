function createSlider(containerSelector, prevButtonSelector, nextButtonSelector, slideSelector) {
    const container = document.querySelector(containerSelector);
    const prevButton = container.querySelector(prevButtonSelector);
    const nextButton = container.querySelector(nextButtonSelector);
    const slides = container.querySelectorAll(slideSelector);
    let currentSlide = 0;

    prevButton.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        displaySlides();
    });

    nextButton.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        displaySlides();
    });

    for (let i = 0; i < 4; i++) {
        slides[i].style.display = 'flex';
    }

    function displaySlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (let i = currentSlide; i < currentSlide + 4; i++) {
            const index = i % slides.length;
            slides[index].style.display = 'flex';
        }
    }

    return displaySlides;
}

const displaySlides1 = createSlider('#slider-container1', '.prevSlide', '.nextSlide', '.slide');
const displaySlides2 = createSlider('#slider-container2', '.prevSlide', '.nextSlide', '.slide');
displaySlides1();
displaySlides2();
