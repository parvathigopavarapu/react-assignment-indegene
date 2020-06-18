import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie, setLoading, fetchAllMoviesDetails } from '../redux/searchActions';


export class Movie extends Component {

  render() {
    const { loading, movies } = this.props;
    console.log("fdsf" + JSON.stringify(movies))

    let movieInfo = (
      movies != null || undefined
        ? movies.map((movie, index) => (
          <div className="container card m-2 p-4" key={movie.imdbID}>
            <div className="row">
              <div className="col-md-4 ">
                <img src={movie.Poster} className="thumbnail" alt="Poster" />
              </div>
              <div className="col-md-8">
                <h2 className="mb-4">{movie.Title}</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Genre:</strong> {movie.Genre}
                  </li>
                  <li className="list-group-item">
                    <strong>Released:</strong> {movie.Released}
                  </li>
                  <li className="list-group-item">
                    <strong>Rated:</strong> {movie.Rated}
                  </li>

                  <li className="list-group-item">
                    <strong>Director:</strong> {movie.Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Writer:</strong> {movie.Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Actors:</strong> {movie.Actors}
                  </li>
                  <li className="list-group-item bg-light">
                    <strong>boxoffice:</strong> {movie.imdbRating > 7 ? <h4>Hit</h4> : <h4>Flop</h4>}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="card card-body  my-5 ">
                <div className="col-md-12">
                  <h3>About </h3>
                  {movie.Plot}
                  <hr />

                </div>
              </div>
            </div>
          </div>
        ))
        :  <h3 className="display-4 mb-3 text-danger text-center App">
        <i className="fa fa-search" /> OOps! No Movies Found!
    </h3>

    );

    let content = loading
      ? <p>Loading...</p> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  movies: state.movies_info
});

export default connect(
  mapStateToProps,
  { fetchAllMoviesDetails, setLoading }
)(Movie);
