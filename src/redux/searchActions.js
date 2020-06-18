import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, FETCH_MOVIE_DETAILS } from './types';
import axios from 'axios';
import { APIKey } from '../APIKey';


export const searchMovie = (text, year) => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = (text, year) => dispatch => {

  fetch(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}&y=${year}`).then(
    res => res.json()
  ).then(data => dispatch({
    type: FETCH_MOVIES,
    payload: data.Search
  }))
};

 export const fetchAllMoviesDetails = (text, year) => dispatch => {
  let new_array = [];
  fetch(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}&y=${year}`).then(
    res => res.json()).then(data => data.Search != null ? data.Search.map(movie => {
    axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${movie.imdbID}`)
    .then(response => 
   {  
     new_array.push(response.data)
      dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: new_array
      })}
    ).catch(err => 
      console.log(err)
      )
  }) : null)
};




export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
