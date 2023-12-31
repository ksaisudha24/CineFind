import React from "react";
import { Container } from "react-bootstrap";
import MovieBox from "./MovieBox";
import "../styles/Movies.css";

const Movies = (props) => {
  return (
    <>
      <div>
        {props.movies.length > 0 || props.query === "" ? (
          <div className="container">
            <div className="grid">
              {props.movies.map((movieReq) => (
                <MovieBox key={movieReq.id} movieDetails={movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <div className="no-movies-display">
            <h2>Sorry!! No Movies Found.</h2>
            <h5>Please try different keywords.</h5>
          </div>
        )}

        <Container className="d-flex justify-content-center my-3">
          {props.movies.length > 0 && props.currentPage > 1 && (
            <button
              className="pagination-button previous"
              onClick={props.onPreviousPage}
            >
              &#8249;
            </button>
          )}
          {props.movies.length > 0 && props.currentPage < props.totalPages && (
            <button
              className="pagination-button next"
              onClick={props.onNextPage}
            >
              &#8250;
            </button>
          )}
        </Container>
      </div>
    </>
  );
};

export default Movies;
