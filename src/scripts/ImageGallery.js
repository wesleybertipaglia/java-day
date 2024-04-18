class ImageGallery {
    constructor(gallery) {
        this.gallery = gallery;
        this.galleryImgs = this.gallery.querySelectorAll(".gallery__item");

        this.modal = this.gallery.querySelector(".modal");
        this.modalImg = this.modal.querySelector("img");
        this.modalCloseButton = this.modal.querySelector(".close");

        this.galleryImgs.forEach((img) => {
            img.addEventListener("click", this.modalOpen.bind(this, img));
        });

        this.modalCloseButton.addEventListener("click", () => this.modalClose());

        this.modal.addEventListener("click", () => this.modalClose());
    }

    modalClose() {
        this.modal.style.display = "none";
    }

    modalOpen(img) {
        this.modal.style.display = "flex";
        this.modalImg.src = img.src;
    }
}

export default ImageGallery;
