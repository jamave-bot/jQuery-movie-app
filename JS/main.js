

$(document).ready(() =>{
    $('#searchForm').on('submit', (e)=>{
        e.preventDefault();
        let searchText = $('#searchText').val()
        getMovies(searchText)
    })
})

const getMovies = (searchText) =>{
    // console.log(searchText, API_KEY)
    // console.log(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`);
    axios.get(`https://www.omdbapi.com/?s=${searchText}&apikey=${API_KEY}`)
        .then((res)=>{
            console.log(res);
            let movies = res.data.Search;
            let output = '';
            $.each(movies, (index, movie)=>{
                output += `
                    <div class='col-md-3'>
                        <div class="well text-center">
                            <img src="${movie.Poster} alt="movie poster">
                            <h5>${movie.Title}</h5>
                            <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                        </div>
                    </div>
                `;
            })

            $('#movies').html(output)
        })
        .catch((err)=>{
            console.log(err)
        })
}

const movieSelected = (id) =>{
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

const getMovie = () =>{
    let movieId = sessionStorage.getItem('movieId');
    axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
        .then((res)=>{
            console.log(res);
            let movie = res.data;

            let output = `
                <div class="row">
                    <div class="col-md-4">
                        <img src="${movie.Poster}" class="thumbnail" >
                    </div>

                    <div class="col-md-8">
                        <h2>${movie.Title}</h2>
                        <ul class="list-group"> 
                            <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
                            <li class="list-group-item"><strong>Released:</strong>${movie.Released}</li>
                            <li class="list-group-item"><strong>Rated:</strong>${movie.Rated}</li>
                            <li class="list-group-item"><strong>IMDB Rating:</strong>${movie.imdbRating}</li>
                            <li class="list-group-item"><strong>Director:</strong>${movie.Director}</li>
                            <li class="list-group-item"><strong>Writer:</strong>${movie.Writer}</li>
                            <li class="list-group-item"><strong>Actors:</strong>${movie.Actors}</li>

                        </ul>
                    </div>

                    <div class="row">
                        <div class="well">
                            <h3>Plot</h3>
                            ${movie.Plot}
                        </div>
                            <hr>
                            <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                            <a href="index.html" class="btn btn-default">Go Back to Search </a>
                    </div>

                </div>
            `;

            $('#movies').html(output)

        })
        .catch((err)=>{
            console.log(err)
        })
}