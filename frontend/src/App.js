import "./App.css";
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Home, Header, Trailer } from "./components/index";

function App() {

  const [movies, setMovies] = useState();

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
