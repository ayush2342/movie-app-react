import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITE} from '../actions';


const initailMovieState = {
    list:[],
    favourites:[],
    showFavorites:false
}

export default function movies(state=initailMovieState,action){
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


