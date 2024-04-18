class ImageGallery {
    constructor(gallery) {
        this.currentIndex = 0;
        this.gallery = gallery;
        this.galleryImgs = Array.from(this.gallery.querySelectorAll(".gallery__item"));

        this.modal = this.gallery.querySelector(".modal");
        this.modalImg = this.modal.querySelector("img");
        this.prev = this.modal.querySelector(".prev");
        this.next = this.modal.querySelector(".next");
        this.modalCloseButton = this.modal.querySelector(".close");
        this.init();
    }

    modalOpen(index) {
        this.currentIndex = index;
        this.modal.style.display = "flex";
        this.modalImg.src = this.galleryImgs[index].src;
    }

    modalClose() {
        this.modal.style.display = "none";
    }

    prevImage() {
        if (this.currentIndex === 0) {
            this.currentIndex = this.galleryImgs.length - 1;
        } else {
            this.currentIndex--;
        }
        this.modalOpen(this.currentIndex)
    }

    nextImage() {
        if (this.currentIndex === this.galleryImgs.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        this.modalOpen(this.currentIndex)
    }

    init() {
        this.galleryImgs.forEach(img => {
            img.addEventListener("click", () => {
                this.modalOpen(this.galleryImgs.indexOf(img));
            });
        });

        this.modalCloseButton.addEventListener("click", () => {
            this.modalClose();
        });

        this.prev.addEventListener("click", () => {
            this.prevImage();
        });

        this.next.addEventListener("click", () => {
            this.nextImage();
        });
    }
}

export default ImageGallery;
