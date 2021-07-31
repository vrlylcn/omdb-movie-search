import Services from './services';
import movie from './components/movie';
import emptyMovie from './components/emptyMovie';

function Cover() {
  const _this = this;
  this.cover = document.querySelector('.js-cover');
  this.coverResult = document.querySelector('.js-cover-result-items');

  this.form = (value) => {
    if (value.length > 2) {
      this.cover.classList.remove('deactivate');
      this.cover.classList.add('active');
      new Services().search(value).then((res) => {
        if (res.Response === 'False') {
          _this.resultNotFound();
        }

        if ({}.hasOwnProperty.call(res, 'Search')) {
          _this.getItemDetail(res.Search);
        }
      });
    } else if (this.cover.classList.contains('active')) {
      this.cover.classList.add('deactivate');
      this.cover.classList.remove('active');
    }
  };

  this.getItemDetail = (result) => {
    this.coverResult.innerHTML = '';

    result.slice(0, 2).forEach((item) => {
      new Services().itemSearch(item.imdbID).then((res) => _this.itemRender(res));
    });
  };

  this.itemRender = (data) => {
    this.coverResult.insertAdjacentHTML('afterbegin', movie(data));
  };

  this.resultNotFound = () => {
    const html = emptyMovie();
    this.coverResult.innerHTML = '';
    this.coverResult.insertAdjacentHTML('afterbegin', html);
  };
}

export default Cover;
