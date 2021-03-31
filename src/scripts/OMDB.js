import $ from 'jquery';
import movie from './components/movie';
import emptyMovie from './components/emptyMovie';

class OMDB {
  term;
  apiUrl = 'http://www.omdbapi.com/?apikey=591cae26';
  cover = $('.js-cover');
  searchInput = $('.js-search-input');
  moreButton = $('.js-list-view-button');
  coverResultItems = $('.js-cover-result-items');

  constructor() {
    this.term = this.searchInput.val().trim();

    if (this.term.length > 2) {
      this.coverResultItems.html(emptyMovie());
      this.moreButton.removeClass('active');
      this.cover.removeClass('deactivate').addClass('active');
      this.coverSearch();
    } else {
      if (this.cover.hasClass('active')) {
        this.cover.removeClass('active').addClass('deactivate');
      }
    }
  }

  coverSearch() {
    this.apiSearch(`${this.apiUrl}&s=${this.term}`).then((response) => {
      const searchValue = $('.js-search-input').val().trim();

      if (this.term === searchValue && typeof response.Search !== 'undefined') {
        this.coverResultItems.empty();
        this.moreButton.addClass('active');
        response.Search.slice(0, 2).map((item) => {
          this.apiSearch(`${this.apiUrl}&i=${item.imdbID}`).then((item) => {
            this.coverResultItems.append(movie(item));
          });
        });
      } else {
        this.coverResultItems.html(emptyMovie());
        this.moreButton.removeClass('active');
      }
    });
  }

  apiSearch(url) {
    return $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json'
    });
  }
}

export default OMDB;
