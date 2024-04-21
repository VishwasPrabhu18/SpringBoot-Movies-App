import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home } from "./components/index";

function App() {

  const [movies, setMovies] = useState();

  const getMoviews = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      console.log(response.data);
      setMovies(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMoviews();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
