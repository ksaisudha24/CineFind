const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Trending movies endpoint with pagination
app.get("/api/trending", async (req, res) => {
  try {
    const page = req.query.page || 1; // Get the page number from the query parameter (default to 1)
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching trending movies" });
  }
});

// Endpoint to handle movie search based on name, genre
app.get('/api/search', async (req, res) => {
  try {
    const searchTerm = req.query.query;
    const page = req.query.page || 1;
    if (!searchTerm) {
      return res.status(400).json({ error: 'Please provide a search term.' });
    }
    const movieNameUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=false&page=${page}&query=${encodeURIComponent(searchTerm)}`;
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
    const [movieNameResponse, genreResponse] = await Promise.all([
      axios.get(movieNameUrl),
      axios.get(genreUrl),
    ]);

    const genreList = genreResponse.data.genres;

    // Check if the search term matches any genre name
    const matchingGenres = genreList.filter((genre) =>
      genre.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // If matchingGenres array is not empty, perform search by genre
    if (matchingGenres.length > 0) {
      const genreId = matchingGenres[0].id;
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}&page=${page}`;
      const response = await axios.get(apiUrl);
      const movies = response.data;
      return res.json(movies);
    }

    // If matchingGenres array is empty, return movies that match the movie name
    res.json(movieNameResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch movies.' });
  }
});

// To fetch credits
app.get("/api/credits", async(req, res) => {
  try {
    const movie_id = req.query.id;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=credits`
    );
    res.json(response.data);
  } catch(error) {
    res.status(500).json({error: "Cannot fetch credits"});
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
