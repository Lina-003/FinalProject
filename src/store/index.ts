import { Screens } from "../types/navigation";
import { AppState } from "../types/store";
import storage, { PersistanceKeys } from "../utils/storage"

const emptyState: AppState = {
    
    screen: Screens.DASHBOARD,
    
    header: {
        img: "",
    
    }
};

export let appState = storage.get<AppState>({key: PersistanceKeys.STORE, defaultValue: emptyState});