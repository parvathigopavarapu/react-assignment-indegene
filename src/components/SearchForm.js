import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../redux/searchActions';

export class SearchForm extends Component {
    constructor(){
        super()
        this.state ={
            text:'',
            year:null
        }
    }
  onChange = e => {
      this.setState ({
          [e.target.name] : e.target.value
      })
    this.props.searchMovie(this.state.text, this.state.year);
  };

  onSubmit = e => {
    
    e.preventDefault();
    this.props.fetchMovies(this.state.text, this.state.year);
    this.props.setLoading();
  };

  render() {
    return (
        <div className="container text-center">
          <h3 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie
          </h3>
          <form className="row" id="searchForm" onSubmit={this.onSubmit}>
           
            <input
              type="text"
              className="form-control col-5"
              name="text"
              placeholder="Movie Title"
              onChange={this.onChange}
            />
            <input
              type="text"
              className="form-control col-5 ml-1"
              name="year"
              placeholder="Movie Release year"
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg ml-1">
              Search
            </button>
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(JSON.stringify(state))
    return {
       text: state.text
    }
};

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
