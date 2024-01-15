import { combineReducers } from 'redux';

import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITE} from '../actions';


const initailMovieState = {
    list:[],
    favourites:[],
    showFavorites:false
}

export function movies(state=initailMovieState,action){
    // if(action.type===ADD_MOVIES)
    // {
    //     return {
    //         ...state,
    //         list:action.movies
    //     } 
    // }
    // return state;

    switch (action.type){
        case ADD_MOVIES:
            return {
                        ...state,
                        list:action.movies
                    } 
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            } 

        case REMOVE_FAVOURITE:
            const newFavouriteList = state.favourites.filter((movie)=>{
                return movie.Title!==action.movie.Title
            })
            return {
                ...state,
                favourites:newFavouriteList
            } 

            case SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavorites:action.val
            } 
        
            default:
                return state;

    }
}

const initailSearchState = {
    result:{}
}

export function search(state=initailSearchState,action)
{

    return state;
}


// const initailRootState = {
//     movies:initailMovieState,
//     search:initailSearchState
// }


// export default function rootReducer(state=initailRootState,action)
// {
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }

// }


export default combineReducers({
    movies,
    search 
})


