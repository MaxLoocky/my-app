import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.Navbar}>
        <div className={s.Item}>
            <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.Item} >
            <NavLink to="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to="/Settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
    </nav>
  );
}

export default Navbar;
