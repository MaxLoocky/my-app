import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.ProfileInfo}>
        <div>
          <img src="https://storge.pic2.me/upload/299/5a9ee783c3f3a.jpg"></img>
        </div>

        <div className={s.DiscriptionBlock}>
          ava + discription
        </div>
        
    </div>

  );
}

export default ProfileInfo;
