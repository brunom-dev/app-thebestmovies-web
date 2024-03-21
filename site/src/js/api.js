import { showMovieDisplay } from "./main.js";

export const apiKey = 'c9f5368308f29a5af1579e259e5a164d';

let movies = []; 

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    movies = data.results.slice(0,10);
    showMovieDisplay(movies);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os filmes populares:', error);
  });
