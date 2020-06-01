import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.Navbar}>
        <div className={s.Item}>
            <a src="#">Profile</a>
        </div>
        <div className={s.Item}>
            <a src="#">Messages</a>
        </div>
        <div className={s.Item}>
            <a src="#">News</a>
        </div>
        <div className={s.Item}>
            <a src="#">Music</a>
        </div>
        <div className={s.Item}>
            <a src="#">Settings</a>
        </div>
    </nav>
  );
}

export default Navbar;
