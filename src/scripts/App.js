import '../scss/app.scss';
import Cover from './cover';

let term;
const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');

function search() {
  const value = input.value.trim();

  if (value !== term) {
    term = value;
    const cover = new Cover();
    cover.form(value);
  }
}

window.onload = () => {
  input.focus();

  input.addEventListener('input', () => {
    setTimeout(() => search(), 400);
  });

  form.addEventListener('submit', search);
};
