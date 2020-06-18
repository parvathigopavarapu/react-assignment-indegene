import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import Movie from './Movie'

export class SecoundTab extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <p>Loading...</p> : <Movie />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps)(SecoundTab);
