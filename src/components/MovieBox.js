import React, { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import "../styles/Movies.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="card card-container text-center mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src={API_IMG + props.movieDetails.poster_path}
          alt="Movie Poster"
        />
        <div className="card-body">
          <button type="button" className="btn btn-outline-light" onClick={handleShow}>
            View More
          </button>
          <MovieDetailsModal
            show={show}
            handleClose={handleClose}
            movieDetails={props.movieDetails}
          ></MovieDetailsModal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
