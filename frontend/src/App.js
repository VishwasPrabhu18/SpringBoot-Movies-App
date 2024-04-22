import "./App.css";
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home, Header, Trailer, Reviews } from "./components/index";

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMoviews = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      // console.log(response.data);
      setMovies(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  const getMovieData = async (movieId) => {
    console.log("Movie ID : " + movieId);
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMoviews();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
