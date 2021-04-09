import '../scss/app.scss';
import $ from 'jquery';
import debounce from 'debounce';
import OMDB from './OMDB';

$(() => {
  const searchInput = $('.js-search-input');
  searchInput.focus();

  searchInput.on('input', () => {
    debounce(new OMDB().init(), 1000);
  });

  $(document).on('submit', '.js-search-form', (e) => {
    e.preventDefault();
  });

  $(document).on('click', '.js-list-view-button', (e) => {
    e.preventDefault();
    new OMDB().list();
  });
});
