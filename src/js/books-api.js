import axios from 'axios';

export async function getCategoryList() {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const categories = response.data;
    const select = document.querySelector('.categories');

    categories.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat.list_name;
      option.textContent = cat.list_name;
      select.appendChild(option);
    });
  } catch (error) {
    console.error('Error loading categories:', error);
  }
}
