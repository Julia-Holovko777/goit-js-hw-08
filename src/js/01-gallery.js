// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
        src="${preview}"
        alt="${description}" />
    </a>
    </li>
    `;
};
const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const ulElement = document.querySelector('ul');
ulElement.style.listStyleType = 'none';

console.log(lightbox);
console.log(galleryItems);
