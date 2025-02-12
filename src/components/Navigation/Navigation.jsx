import s from './Navigation.module.css';
import clsx from 'clsx';
import { NavLink, Outlet } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <>
      <div className={s.navContainer}>
        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </nav>
      </div>
      <div style={{ marginTop: '80px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
