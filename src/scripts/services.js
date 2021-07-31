const apiUrl = 'https://www.omdbapi.com/?apikey=591cae26';

function Services() {
  this.search = (value) => fetch(`${apiUrl}&s=${value}`)
    .then((res) => res.json())
    .then((res) => res);

  this.itemSearch = (imdbID) => fetch(`${apiUrl}&i=${imdbID}`)
    .then((res) => res.json())
    .then((res) => res);
}

export default Services;
