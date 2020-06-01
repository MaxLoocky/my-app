import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile () {
  return (
    <div className={s.Profile}>
        <div>
          <img src="https://storge.pic2.me/upload/299/5a9ee783c3f3a.jpg"></img>
        </div>

        <div>
          ava + discription
        </div>
        
        <MyPosts />
    </div>

  );
}

export default Profile;
