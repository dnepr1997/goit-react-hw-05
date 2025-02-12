import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './MoviesPage.module.css';
import { fetchMoviePage } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fetchMoviePage(query);
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getData();
  }, [query]);

  const handleSubmit = (values, actions) => {
    setSearchParams({ query: values.query });
    actions.resetForm();
  };

  return (
    <div>
      <div className={s.formContainer}>
        <Formik initialValues={{ query: query }} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field name="query" placeholder="Search for movies..." className={s.input} />
            <ErrorMessage name="query" component="span" className={s.error} />
            <button type="submit" className={s.button}>
              Search
            </button>
          </Form>
        </Formik>
      </div>

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
