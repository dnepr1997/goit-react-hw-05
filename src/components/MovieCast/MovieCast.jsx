import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';

const MoviesCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <p>{item.original_name}</p>
            <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesCast;
