import { useEffect, useState } from 'react';
import { getTrendMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTrendMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getData();
  }, []);
  console.log(movies);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};
export default HomePage;
