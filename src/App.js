import React, { useEffect, useState } from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Movies from "./components/Movies";
import NavigationBar from "./components/NavigationBar";

import "./styles/App.css";

const BACKEND_URL = "https://cinefind.onrender.com";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response;
        if (query !== "") {
          response = await axios.get(`${BACKEND_URL}/api/search`, {
            params: {
              query: query,
              page: currentPage,
            },
          });
        } else {
          response = await axios.get(`${BACKEND_URL}/api/trending`, {
            params: {
              page: currentPage,
            },
          });
        }
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (e) {
        console.log(e);
      }
    };
      fetchMovies();
  }, [currentPage, query]);

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <NavigationBar
        query={query}
        onChangeHandler={changeHandler}
      />
      <Movies
        movies={movies}
        query={query}
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </>
  );
}

export default App;
