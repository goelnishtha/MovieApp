import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AddMovies from './components/AddMovies';
import ListMovies from './components/ListMovies';
import Navbar from './components/Navbar';
import { Container, Grid, Grid2 } from '@mui/material';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
    { id: 3, title: "Interstellar", year: 2014, genre: "Adventure", rating: 8.6 },
    { id: 4, title: "Memento", year: 2000, genre: "Thriller", rating: 8.5 }
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, { id: movies.length + 1, ...movie }]);
  };

  return (
    <Router>
      <Navbar />
      <Container>
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 item xs={12} sm={3} md={3}></Grid2>
          <Grid2 item xs={12} sm={6} md={6}>
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/add-movies' element={<AddMovies addMovie={addMovie} />} />
              <Route path='/list-movies' element={<ListMovies movies={movies} />} />
            </Routes>
          </Grid2>
          <Grid2 item xs={12} sm={3} md={3}></Grid2>
        </Grid2>
      </Container>
    </Router>
  );
};

export default App;