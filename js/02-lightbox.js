import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const cardsMarkup = createMarkup(galleryItems);


function onClickEvent(event) {
    event.preventDefault();

    const lightbox = new SimpleLightbox('.gallery a', { 
    captionData: "alt",
    captionDelay: 250,
    });
    
    if(event.target.nodeName !== "IMG") {
        return
   }
    lightbox.open();
}

galleryRef.addEventListener("click", onClickEvent);
    function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;}).join(" ");
};

console.log(cardsMarkup);
galleryRef.insertAdjacentHTML("beforeend", cardsMarkup);

console.log(galleryItems);
