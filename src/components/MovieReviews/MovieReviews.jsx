import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../services/api';
import { useParams } from 'react-router-dom';
import s from './MoviesReviews.module.css';

const MoviesReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(item => (
          <li key={item.id}>
            <h2 className={s.title}>{item.author}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesReviews;
