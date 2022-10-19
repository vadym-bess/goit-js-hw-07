import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const cardsMarkup = createMarkup(galleryItems);
galleryRef.addEventListener("click", onClickEvent);

function onClickEvent(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="600" height="600">`);

    if(!event.target.classList.contains("gallery__image")) {
        return;
   }
    instance.show();
}



function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src= "${preview}"
      data-source= "${original}"
      alt= "${description}"
    />
  </a>
    </div>`;
    }).join(" ");

};
console.log(cardsMarkup);
galleryRef.insertAdjacentHTML("beforeend", cardsMarkup);


