import { Screens } from "../types/navigation";
import {MovieInterface} from "../types/data/movieInterface";

export const navigate = (screen: Screens) => {
    return {
        type: "NAVIGATE",
        payload: screen
    }
};

export const updateMovies = (movies: MovieInterface[]) => {
    return {
        type: "UPDATE",
        payload: movies
    }
};