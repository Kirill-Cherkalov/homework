const initialState = [];

export function fetchGifs (state = initialState, action) {
    
    if(action.type === 'LOAD_GIFS') {
        return [...state, ...action.payload];
    }
    return state;
}