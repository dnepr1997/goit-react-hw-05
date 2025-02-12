import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>404 Not Found</p>
      <Link className={s.btn} to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
