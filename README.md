# CineFind🔍 - Movie Search Application
CineFind is a movie search application that allows users to search for movies based on their names or genres using The Movie Database (TMDB) API.
Try CineFind at: [Live Demo]( https://cinefind-movie.netlify.app/)

## Features

- View trending movies on the home page.
- Search for movies by entering movie names or genres.
- View movie details such as IMDb rating, release date and overview.
- Pagination support to navigate through search results.
- Responsive design for optimal viewing on smaller devices.

## Tech Stack

- React.js (Frontend)
- Express.js (Backend)

## How to Run the Application

### Prerequisites

Before running the application, make sure you have the following installed:
- Node.js (https://nodejs.org)

### Backend Setup

1. Clone the repository to your local machine.
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Obtain a TMDB API key by creating an account at https://www.themoviedb.org/. \ Once you have the API key, create a `.env` file in the `backend` directory and add the following:
  TMDB_API_KEY=YOUR_TMDB_API_KEY
  Replace `YOUR_TMDB_API_KEY` with your actual TMDB API key.
5. Start the development server:
   ```
   npm start
   ```
   The server will start running on http://localhost:5000.

### Frontend Setup

1. Open a new terminal.

2. Navigate to the root directory:
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
  The application will open in your default web browser at http://localhost:3000/home.

## Usage

1. Upon opening the application, you will see trending movies on the home page.

2. To search for movies, enter the name or genre of the movie in the search bar. The search results will be displayed, and you can navigate through the results using the pagination buttons.

3. If no movies or genres match the search query, a message will be displayed indicating that no results were found. You can try different keywords to refine your search.

## Demo
Try out the deployed project at: https://cinefind-movie.netlify.app/ \
Backend is deployed on render at: https://cinefind.onrender.com/ \
Access it by using https://cinefind.onrender.com/api/trending or https://cinefind.onrender.com/api/search?query={query}


## Screenshots
![img2](https://github.com/ksaisudha24/CineFind/assets/68504200/c269cb0d-b94d-49a6-9b3d-99b2c1857dc2)
![img3](https://github.com/ksaisudha24/CineFind/assets/68504200/2e2534a5-1209-4496-ad1a-7f1a19f203b7)
![img4](https://github.com/ksaisudha24/CineFind/assets/68504200/b774df63-cf8f-4181-adbe-e0d55b67f1ab)
![img5](https://github.com/ksaisudha24/CineFind/assets/68504200/85173280-dd76-4feb-8b06-08bfa94a0a26)
![img6](https://github.com/ksaisudha24/CineFind/assets/68504200/6f42d3f1-4750-4e5f-8982-9f1f5e6cd49f)

## Credits

- This application uses the TMDB API to fetch movie data. (https://www.themoviedb.org/documentation/api)

Happy movie searching with CineFind!



