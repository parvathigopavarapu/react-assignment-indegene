import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,LOADING,FETCH_MOVIE_DETAILS
  } from '../redux/types';
  
  const initialState = {
    text: '',
    movies: [],
    movie: [],
    movies_info:[],
    loading:false
  };

 function moviesReducer (state = initialState , action){
      switch (action.type){
          case SEARCH_MOVIE:
              return {
                  ...state,
                  text: action.playload,
                  loading:false
              }
              case FETCH_MOVIES:
                return {
                  ...state,
                  movies: action.payload,
                  loading:false
                };
              case FETCH_MOVIE:
                return {
                  ...state,
                  movie: action.payload,
                  loading:false 
                };
                case FETCH_MOVIE_DETAILS:
                  return {
                    ...state,
                    movies_info: action.payload,
                    loading:false 
                  };
                case LOADING:
                  return {
                    ...state,
                    loading: true
                  };
                default:
                    return state;
      }
     

  }
  export default moviesReducer;