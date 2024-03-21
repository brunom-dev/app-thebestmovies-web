const cardsContainer = document.querySelector("#movies");

export const showMovieDisplay = (movies) => {

    movies.forEach(movie => {
        cardsContainer.innerHTML += '';

        const movieId = movie.id;
        const title = movie.title;
        const releaseYear = movie.release_date.split('-')[0];
        const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const rating = movie.vote_average.toFixed(1);
        const overviewText = movie.overview;
    
        const card = document.createElement('section');
        card.classList.add("col-10", "card", "mt-3");
        card.dataset.movieId = movieId;
    
        const cardCover = document.createElement('div');
        cardCover.classList.add("card-cover", "align-self-center");
    
        const img = document.createElement('img');
        img.src = posterPath;
        img.alt = 'Capa';
        img.className = 'card-cover-img';
        cardCover.appendChild(img);
        card.appendChild(cardCover);
    
        const cardTitle = document.createElement('div');
        cardTitle.classList.add("card-title", "col-8", "mt-4", "align-self-center");
    
        const titulo = document.createElement('h2');
        titulo.classList.add("title-text", "text-center");
        titulo.textContent = `${title} (${releaseYear})`;
    
        const details = document.createElement('div');
        details.classList.add("row", "text-center", "justify-content-center", "mt-3");
    
        const ratingDiv = document.createElement('div');
        ratingDiv.classList.add("title-deitals", "col-4");
        const ratingImg = document.createElement('img');
        ratingImg.src = 'src/images/Star.svg';
        ratingImg.alt = 'star';
        ratingImg.className = 'icon-star';
        const ratingText = document.createElement('p');
        ratingText.className = 'deitals-text';
        ratingText.textContent = rating;
    
        ratingDiv.appendChild(ratingImg);
        ratingDiv.appendChild(ratingText);
        details.appendChild(ratingDiv);
       
        cardTitle.appendChild(titulo);
        cardTitle.appendChild(details);
        const cardText = document.createElement('div');
        cardText.classList.add("card-text", "align-self-center");
        const texto = document.createElement('p');
        texto.className = 'card-text-p';
        if (String(overviewText).length > 0) {
            texto.textContent = overviewText;
        } else {
            texto.textContent = "Sinopse não registrada!"
        }
        cardText.appendChild(texto);
        cardTitle.appendChild(cardText)
        card.appendChild(cardTitle);
    
        cardsContainer.appendChild(card);  
    })
}