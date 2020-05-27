import React from 'react';
import s from './Navbar.module.css';

function Navbar () {
  return (
    <nav className={s.Navbar}>
        <div className={`${s.Item} ${s.Activ}`}>
            <a href="#" className={s.Url}>Profile</a>
        </div>
        <div className={s.Item}>
            <a href="#" className={s.Url}>Messages</a>
        </div>
        <div className={s.Item}>
            <a href="#" className={s.Url}>News</a>
        </div>
        <div className={s.Item}>
            <a href="#" className={s.Url}>Music</a>
        </div>
        <div className={s.Item}>
            <a href="#" className={s.Url}>Settings</a>
        </div>
    </nav>
  );
}

export default Navbar;
