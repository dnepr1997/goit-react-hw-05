import { NavLink, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li className={s.li} key={movie.id}>
              <NavLink to={`/movies/${movie.id.toString()}`} state={location}>
                <h2>{movie.title}</h2>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
