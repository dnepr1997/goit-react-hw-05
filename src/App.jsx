import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import Navigation from './components/Navigation/Navigation';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesCast from './components/MovieCast/MovieCast';
import MoviesReviews from './components/MovieReviews/MovieReviews';

import './App.css';

function App() {
  // const buildLinkClass = ({ isActive }) => {
  //   return clsx(css.link, isActive && css.active);
  // };
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MoviesCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
