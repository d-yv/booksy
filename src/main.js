import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { getCategoryList } from './js/books-api.js';
import { renderGallery } from './js/render-functions.js';

const select = document.querySelector('.categories');

select.addEventListener('change', handleCategorySelect);

getCategoryList();

async function handleCategorySelect(event) {
  const category = event.target.value;
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${encodeURIComponent(
        category
      )}`
    );
    const books = response.data;
    renderGallery(books);
  } catch (error) {
    console.error('Error loading Books', error);
  }
}
