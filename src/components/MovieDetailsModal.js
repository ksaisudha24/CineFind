import { Button, Modal } from "react-bootstrap";

import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieDetailsModal = (props) => {
  const movieDetails = props.movieDetails;
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="card-img-top"
          style={{ width: "14rem" }}
          src={API_IMG + movieDetails.poster_path}
          alt="Movie Poster"
        />
        <h3>{movieDetails.title}</h3>
        <h5>IMDb: {movieDetails.vote_average}</h5>
        <h5>Release Date: {movieDetails.release_date}</h5>
        <p>{movieDetails.overview}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetailsModal;
