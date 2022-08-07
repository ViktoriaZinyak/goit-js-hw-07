import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryEl = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.innerHTML = galleryEl;

console.log(gallery);

gallery.addEventListener("click", onGalleryOpen);

function onGalleryOpen(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  gallery.addEventListener("keydown", onEscPush);

  function onEscPush(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
