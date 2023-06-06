export const reducer = (action: any, prevState: any) => {
    switch (action.type) {
        case "NAVIGATE":
            prevState.screen = action.payload;
            break;
    }
    switch (action.type) {
        case "UPDATE":
            prevState.screen = action.payload;
            break;
    }

    return prevState;
};