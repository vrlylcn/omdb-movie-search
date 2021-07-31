function EmptyMove() {
  return `
    <div class="movie movie--empty">
      <picture class="movie__picture loading"></picture>
  
      <div class="movie__info">
        <h2 class="movie__title loading"></h2>
        <span class="movie__point loading"></span>
  
        <ul class="movie__list">
          <li class="movie__list-item loading"></li>
          <li class="movie__list-item loading"></li>
        </ul>
  
        <div class="movie__description loading"></div>
      </div>
    </div>
  `;
}

export default EmptyMove;
