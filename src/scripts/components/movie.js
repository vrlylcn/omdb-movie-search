export default function (item) {
  let star;

  /*
  if (item.Ratings.length) {
    star = item.Ratings[0].Value.split('/');
  }

  ${star[0]}<small class="movie__point-small">/${star[1]}</small>
   */

  return `
    <div class="movie">
      <picture class="movie__picture loading">
        <img src="${
          item.Poster !== 'N/A'
            ? item.Poster
            : 'https://via.placeholder.com/300x300'
        }" alt="${item.Title}" class="movie__image">
      </picture>

      <div class="movie__info">
        <h2 class="movie__title">
          ${item.Title} (${item.Year})
        </h2>
        <span class="movie__point">
          <svg class="icon icon-star">
            <use xlink:href="#icon-star"></use>
          </svg>
          
        </span>

        <ul class="movie__list">
          <li class="movie__list-item">
            <strong class="movie__list-title">Dil:</strong>
            ${item.Language}
          </li>

          <li class="movie__list-item">
            <strong class="movie__list-title">Oyuncular:</strong>
            ${item.Actors} | <a href="#" class="movie__link">Tüm listeyi gör</a>
          </li>
        </ul>

        <div class="movie__description">
          ${item.Plot !== 'N/A' ? '<p>' + item.Plot + '</p>' : ''}
          <a href="#" class="movie__link">Detaylar</a>
        </div>
      </div>
    </div>
  `;
}
