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
        slides[i].style.display = 'block';
    }

    function displaySlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (let i = 0; i < 4; i++) {
            const index = currentSlide + i;
            slides[index].style.display = 'block';
        }

        if (currentSlide + 3 >= slides.length - 1) {
            let diff = slides.length - currentSlide + 1
            for (let i = 0; i <= diff; i++) {
                const index = currentSlide + i;
                slides[index].style.display = 'block';
            }
            // displaySlides()
        }
    }

    return displaySlides;
}

const displaySlides1 = createSlider('#slider-apoiadores', '.prevSlide', '.nextSlide', '.slide');
const displaySlides2 = createSlider('#slider-patrocinadores', '.prevSlide', '.nextSlide', '.slide');
displaySlides1();
displaySlides2();