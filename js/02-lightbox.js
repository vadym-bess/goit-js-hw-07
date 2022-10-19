import { galleryItems } from './gallery-items.js';
// Change code below this line
let galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery");

let galleryList = ``;

function initGallery() {

    galleryItems.forEach(element => {
         galleryList += `<a class="gallery__item" href="${element.original}">
                        <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
                        </a>`;
    });
    galleryEl.innerHTML = galleryList;

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });

};

initGallery();
