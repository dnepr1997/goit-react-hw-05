import { useEffect, useState } from 'react';
import { getTrendMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getTrendMovies();
      setMovies(data);
    };
    getData();
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};
export default HomePage;
