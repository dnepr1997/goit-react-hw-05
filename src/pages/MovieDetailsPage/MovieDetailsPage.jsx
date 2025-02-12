import { NavLink, Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import { useEffect, useRef, useState } from 'react';
import s from './MovieDetailsPage.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  const location = useLocation();
  const goBack = useRef(location?.state ?? '/movies');

  // const goBack = () => {
  //   navigate(location.state?.from ?? '/movies');
  // };
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMovieById(movieId);
        setUser(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getData();
  }, [movieId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className={s.btnContainer}>
        <Link to={goBack.current} className={s.goBack}>
          Go back
        </Link>
      </div>
      <div className={s.info}>
        <div>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w500${user.poster_path}`}
            alt={user.original_title}
          />
        </div>
        <div>
          <h3>{user.original_title}</h3>
          <b>Overview</b>
          <p>{user.overview}</p>
          <p>
            <b>Release_date - </b>
            {user.release_date}
          </p>
        </div>
      </div>
      <div className={s.navContainer}>
        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="cast">
            Cast
          </NavLink>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
