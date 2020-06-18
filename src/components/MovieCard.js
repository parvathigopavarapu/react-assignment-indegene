import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Movie from './Movie';
import { fetchMovie } from '../redux/searchActions';

export class MovieCard extends Component {
    constructor(){
        super()
        this.state={
            modalIsOpen:false
        }
    }
    componentDidMount() {
      this.props.fetchMovie(this.props.movie.imdbID);
    }
  render() {
    const { movie, movieModal } = this.props;
    const id = movie.imdbID
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <button className="btn btn-primary" 
           onClick={()=> this.setState({modalIsOpen : true})}>
            Movie Info...
          </button>
          <Modal isOpen={this.state.modalIsOpen} 
          shouldCloseOnOverlayClick={false}
          onRequestClose = {() => this.setState({modalIsOpen : false})}
          style={{
            overlay:{
              backgroundColor:'gray'
            }
          }}>
            <div>
            <h1 className="mb-4">{movieModal.Title}</h1>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movieModal.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movieModal.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movieModal.Rated}
              </li>
             
              <li className="list-group-item">
                <strong>Director:</strong> {movieModal.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movieModal.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movieModal.Actors}
              </li>
              <li className="list-group-item bg-light">
                <strong>boxoffice:</strong> {movieModal.imdbRating > 7 ? <h4 className='text-success'>Hit</h4> : <h4 className='text-danger'>Flop</h4>}
              </li>
            </ul>
          </div>
            {/* <Movie  id={movie.imdbID}/> */}
            <div>
              <button className="btn btn-primary mt-2 btn-block"
              onClick={() => this.setState({modalIsOpen:false})}>
                Close
              </button>
            </div>
           
          </Modal>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
 
  movieModal: state.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie }
)(MovieCard);
