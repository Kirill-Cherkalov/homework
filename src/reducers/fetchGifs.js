
export function fetchGifs (state = [], action) {
    switch(action.type){
    case('LOAD_GIFS'):
        return [...state, ...action.payload];
    }
    return state;
}