//Aqué estará la lógica del DOM

import { getMovies, storeMovieMockApi, getMovieFromMockApi } from "./service/index.js";

const btnGetMovies = document.querySelector("#btn-get-movies");
const containerMovies = document.querySelector("#container-movies");
const btnSaveApi = document.querySelector("#btn-save-api");
const btnGetMovieFromMockApi = document.querySelector("#btn-get-movies-mock-api");

const moviesWithImage = [];

btnGetMovies.onclick = async function () {
    const movies = await getMovies();
    containerMovies.innerHTML = "";
    movies
    .sort(() => 0.5 - Math.random())
    .forEach(async (movie)=>{
        //dentro del forEach no se hereda el async por ende hay que hacer que el forEach sea asíncrono
        const imageUrl = movie.images["Poster Art"].url;

        const response = await fetch(imageUrl);
        //sepamos qu si una peticion falla el response.ok será false
        //si no será true
        if(response.ok){
            //si la peticion de la imagen está ok vamos a renderizar la pelicula
            renderMovie(movie);
        }
        
    });
    
};

btnGetMovieFromMockApi.onclick = async  function(){
    const movies = await getMovieFromMockApi();
    console.log(movies);
};

btnSaveApi.onclick =function (){
    console.log(moviesWithImage);
    moviesWithImage.forEach(async (movie) => {
        await storeMovieMockApi(movie);
    });
};

function renderMovie(movie) {
    const movies = document.querySelectorAll("#container-movies .col");

    if (movies.length === 20) return;
    moviesWithImage.push(movie);
    containerMovies.innerHTML += `
    <div class="col">
        <div class="card my-3" >
            <div class="into-photo">
                <span class="badge text-bg-${
                    movie.programType === "series" ? "success" : "warning"
                }">${movie.programType}</span>
                <img
                    src="${movie.images["Poster Art"].url}"
                    class="card-img-top"
                    alt=""
                />
            </div>
            <div class="card-body">
                <div class="card-title">${movie.title}</div>
            </div>
        </div>
    </div>
    `
};