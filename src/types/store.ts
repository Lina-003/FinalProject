import { Screens } from "./navigation";

export type AppState = {
    
    screen: Screens,
    
    header: {
        img: string,
    },
  
};

export type Observer = { render: () => void } & HTMLElement;
