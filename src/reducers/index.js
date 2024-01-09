import {ADD_MOVIES} from '../actions';


const initailMovieState = {
    list:[],
    favourites:[]
}

export default function movies(state=initailMovieState,action){
    if(action.type===ADD_MOVIES)
    {
        return {
            ...state,
            list:action.movies
        } 
    }
    return state;
}


