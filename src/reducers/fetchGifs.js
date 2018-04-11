const initialState = [
    {

    }
];

export function fetchGifs (state = initialState, action) {
    switch(action.type){
        case('LOAD_GIFS'):
        return [...state, ...action.payload];
    }
    return state;
}