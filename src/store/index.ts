import { Screens } from "../types/navigation";
import { AppState } from "../types/store";
import storage, { PersistanceKeys } from "../utils/storage"
import {reducer} from "./reducer";
import { Observer } from "../types/store";

const emptyState: AppState = {
    screen: Screens.LOGIN,
    header: {
        img: ""
    },
    movies: []
};

export let appState = storage.get<AppState>({key: PersistanceKeys.STORE, defaultValue: emptyState});

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;
    notifyObservers();
};

export const addObserver = (ref: Observer) => {
    observers = [...observers, ref];
};