//Acá estaran los métodos para obtener, crear, actualizar y eliminar

import {urlMovies, mockAPIUrl} from "./config.js";

export const getMovies = async () => {
    try {
        const response = await fetch(urlMovies);
        
        // data en este ejemplo tiene 2 keys: total y entries

        const { entries } = await response.json();
        return entries;
    }catch (error) {
        return error;
    }
}
export const getMovieFromMockApi = async () => {
    try {
        const response = await fetch(mockAPIUrl);
        const data = response.json();
        return data;
    }   catch (error) {
        return error;
    }
}
export const storeMovieMockApi = async (movie) => {
    try {
        const object ={
            title : movie.title,
            programType : movie.programType,
            releaseYear: movie.releaseYear,
            imageUrl: movie.images["Poster Art"].url,
        };
        const response = await fetch(mockAPIUrl, {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    }catch (error){
        return error;
    }
}
