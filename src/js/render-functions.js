import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const moreButton = document.querySelector('.more-button');

//
export function renderGallery(books) {
  console.log(books);
  const markup = books
    .map(book => {
      const { author, book_image, title, price } = book;

      return `
      <li class="gallery-item">
        <img src="${book_image}" alt="${title}" />
        <p>${title}</p>
        <p>${author}</p>
        <p>${price}</p>
        <button class="book-button" type="button">Learn more</button>
      </li>
    `;
    })
    .join('');

  gallery.innerHTML = markup;

  // new SimpleLightbox('.gallery a', {
  //   captionsData: 'title',
  //   captionDelay: 250,
  // });
}

//
export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  moreButton.style.display = 'block';
}

export function hideLoadMoreButton() {
  moreButton.style.display = 'none';
}
