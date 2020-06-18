import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import Pagination from 'react-js-pagination';

export class MoviesContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      postsPerPage: 3
    }
  }
  render() {

    const { movies } = this.props;
    let content = '';
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) =>this.setState({currentPage:pageNumber})

    content =
      currentPosts != null
        ? movies.map((movie, index) => (
         <MovieCard key={index} movie={movie} />
          
        ))


        : <h3 className="display-4 mb-3 text-danger text-center App">
          <i className="fa fa-search" /> OOps! No Movies Found!
      </h3>
    return <div>
      <div className="row mt-5">{content}</div>
       {/* <Pagination postsPerPage={this.state.postsPerPage}
        totalPosts={movies.length} paginate={paginate}/> */}
    </div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
