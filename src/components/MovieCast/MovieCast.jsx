import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import s from './MoviesCast.module.css';

const MoviesCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {cast.map(item => (
          <li key={item.id} className={s.actors}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p>{item.original_name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesCast;
