import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
  render() {

    const { movies } = this.props;
    let content = '';

    content =
      movies != null
        ? movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        :<h3 className="display-4 mb-3 text-danger text-center App">
        <i className="fa fa-search" /> OOps! No Movies Found!
      </h3>
    return <div className="row mt-5">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
