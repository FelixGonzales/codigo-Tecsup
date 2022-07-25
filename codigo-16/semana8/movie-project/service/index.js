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
