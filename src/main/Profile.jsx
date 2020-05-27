import React from 'react';
import s from './Profile.module.css';

function Profile () {
  return (
    <div className={s.Profile}>
        <div>
          <img src="https://storge.pic2.me/upload/299/5a9ee783c3f3a.jpg"></img>
        </div>

        <div>
          ava + discription
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className={s.Posts}>
            <div className={s.Item}>
              Post 1
            </div>
            <div className={s.Item}>
              Post 2
            </div>
          </div>
        </div>
    </div>

  );
}

export default Profile;
