import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.Navbar}>
        <div className={s.Item}>
            <a href="/Profile">Profile</a>
        </div>
        <div className={s.Item}>
            <a href="/Dialogs">Messages</a>
        </div>
        <div className={s.Item}>
            <a href="/News">News</a>
        </div>
        <div className={s.Item}>
            <a href="/Music">Music</a>
        </div>
        <div className={s.Item}>
            <a href="/Settings">Settings</a>
        </div>
    </nav>
  );
}

export default Navbar;
