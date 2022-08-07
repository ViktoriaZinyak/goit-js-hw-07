import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map(({ original, preview, description }) => {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
  })
  .join("");

gallery.innerHTML = galleryEl;

const lightbox = new SimpleLightbox(".gallery a");
console.log(lightbox);

lightbox.on(
  "shown.simplelightbox",
  () => (lightbox.defaultOptions.captionDelay = 250)
);

const galleryItem = document.querySelectorAll(".gallery img");
galleryItem.forEach((item) => item.setAttribute("title", item.alt));
console.log(galleryItem);
