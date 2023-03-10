import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divEl = document.querySelector(".gallery");
const imgEl = document.querySelector(".gallery__image");
function createGalleryHtmlMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) =>
   `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
		).join("");

} 
// console.log(galleryHtmlMarkup);
divEl.innerHTML = createGalleryHtmlMarkup(galleryItems);

divEl.addEventListener("click", onImageClick);

function onImageClick(event) {
	if (event.target.nodeName !== "IMG") {
		return;
  };
  event.preventDefault();
  
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
  {
      onShow: () => document.addEventListener("keydown", onCloseModal),
      onClose: () => document.removeEventListener("keydown", onCloseModal),
    });
  
  instance.show()

 
  function onCloseModal(event) {
    if (event.code === "Escape") {
    instance.close();
   }
  }
};

 

