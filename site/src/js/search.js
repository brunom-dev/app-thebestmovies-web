import { apiKey } from "./api.js";;
import { showMovieDisplay } from "./main.js";

const buttonPesquisa = document.querySelector('#search-button');
const inputPesquisa = document.querySelector('#search-input');
inputPesquisa.addEventListener('keypress', searchMovieEnter);
buttonPesquisa.addEventListener('click', searchMovieButton);

const searchMovieButton = () => {
    const searchTerm = inputPesquisa.value.trim();

    if (searchTerm !== '') {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${searchTerm}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => {
                const movies = data.results; // Array de filmes correspondentes aos resultados da pesquisa
                let movieIds = [];
                let movieList = [];

                const exactMatch = movies.find(movie => movie.title === searchTerm); // Verifica se há um filme com título exato

                if (exactMatch) {
                    movieIds.push(exactMatch.id); // Adiciona o ID do filme com título exato
                    movieList.push(exactMatch); // Adiciona o filme à lista de filmes
                } else {
                    movieIds = movies.map(movie => movie.id); // Adiciona os IDs de todos os filmes correspondentes
                    movieList = movies; // Define a lista de filmes como todos os filmes correspondentes
                }
                document.querySelector('#movies').innerHTML = ''
                showMovieDisplay(movieList);
            })
            .catch(error => {
                console.error('Ocorreu um erro ao pesquisar filmes:', error);
            });
    } else {
        window.alert('Campo de pesquisa vazio. Tente novamente')
        location.reload()
    }
}  

const searchMovieEnter = event => {
    if (event.key === 'Enter') {
        const searchTerm = inputPesquisa.value.trim(); // Obtém o valor do campo de pesquisa e remove espaços em branco no início e no final

        if (searchTerm !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${searchTerm}&page=1&include_adult=false`)
                .then(response => response.json())
                .then(data => {
                    const movies = data.results; // Array de filmes correspondentes aos resultados da pesquisa
                    let movieIds = [];
                    let movieList = [];

                    const exactMatch = movies.find(movie => movie.title === searchTerm); // Verifica se há um filme com título exato

                    if (exactMatch) {
                        movieIds.push(exactMatch.id); // Adiciona o ID do filme com título exato
                        movieList.push(exactMatch); // Adiciona o filme à lista de filmes
                    } else {
                        movieIds = movies.map(movie => movie.id); // Adiciona os IDs de todos os filmes correspondentes
                        movieList = movies; // Define a lista de filmes como todos os filmes correspondentes
                    }
                    document.querySelector('#movies').innerHTML = ''
                    showMovieDisplay(movieList);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao pesquisar filmes:', error);
                });
        } else {
            window.alert('Campo de pesquisa vazio. Tente novamente')
            location.reload()
        }
    }
}  