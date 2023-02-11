import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
	return galleryItems.reduce((html, {preview, original, description}) => {
	return html + `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
	},"");
};

listEl.innerHTML = createGalleryMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
	captionsData: "alt",
	captionPosition: 'bottom',
	captionDelay: 250,
});

