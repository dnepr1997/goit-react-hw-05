import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import { useEffect, useState } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await getMovieById(movieId);
      setUser(data);
    };
    getData();
  }, [movieId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${user.poster_path}`} alt={user.original_title} />
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
      <nav>
        <p>Additional information</p>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
