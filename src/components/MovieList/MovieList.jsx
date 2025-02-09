import { NavLink } from 'react-router-dom';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li className={s.li} key={movie.id}>
              <NavLink to={`/movies/${movie.id.toString()}`}>
                <h2>{movie.title}</h2>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
