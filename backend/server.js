const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const PORT = 5000;

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

// Movie search endpoint with pagination
app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.query;
    const page = req.query.page || 1;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error searching movies" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
