import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import "../styles/MovieDetailsModal.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const BACKEND_URL = "https://cinefind.onrender.com";
// const BACKEND_URL = "http://localhost:5000";

const MovieDetailsModal = (props) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const movieDetails = props.movieDetails;
  useEffect(() => {
    const credits = async () => {
      let response = await axios.get(`${BACKEND_URL}/api/credits`, {
        params: {
          id: movieDetails.id,
        },
      });
      let cast = [];
      for (let i = 0; i < 5; i++) {
        if (response.data.credits.cast[i])
          cast.push(response.data.credits.cast[i]);
      }
      setMovieCredits(cast);
    }
    credits();
  }, [movieDetails]);
  const castDisplay = movieCredits.map((cast) =>
   <div key={cast.id}>
      <img className="card-img-top"
            style={{ width: "6rem" }}
            src={API_IMG + cast.profile_path}
            alt={cast.name} />
      <h6>{cast.name}</h6>
    </div>);
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="card-img-top"
          style={{ width: "14rem" }}
          src={API_IMG + movieDetails.poster_path}
          alt={movieDetails.title}
        />
        <h3>{movieDetails.title}</h3>
        <h5>IMDb: {movieDetails.vote_average}</h5>
        <h5>Release Date: {movieDetails.release_date}</h5>
        <p>{movieDetails.overview}</p>
        {castDisplay.length > 0 && <h5> Cast: </h5>}
        <div className="cast-display">{castDisplay}</div>
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
