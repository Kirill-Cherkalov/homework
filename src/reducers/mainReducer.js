import {combineReducers} from 'redux';
import { fetchGifs } from './fetchGifs'
export const mainReducer = combineReducers({
    fetchGifs,
}) 
