import { Screens } from "./navigation";
import {MovieInterface} from "./data/movieInterface";

export type AppState = {
    
    screen: Screens,
    header: {
        img: string,
    },
    movies:MovieInterface[]
};

export type Observer = { render: () => void } & HTMLElement;
