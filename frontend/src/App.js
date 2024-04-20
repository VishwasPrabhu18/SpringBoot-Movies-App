import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';

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
    <h1>Hello World</h1>
  );
}

export default App;
