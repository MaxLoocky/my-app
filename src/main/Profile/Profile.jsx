import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.Profile}>
        <ProfileInfo />
        
        <MyPosts 
          ProfilePage={props.ProfilePage} 
          newPostText={props.ProfilePage.newPostText} 
          dispatch={props.dispatch}
        />
    </div>

  );
}

export default Profile;
