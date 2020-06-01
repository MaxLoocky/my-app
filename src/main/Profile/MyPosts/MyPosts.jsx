import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts () {
  return (
    <div>
      My posts
      <div>
        New post
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.Post}>
        <Post message="Привет, как ты?" like="15"/>
        <Post message="Это мой первый пост" like="20"/>
      </div>
    </div>

  );
}

export default MyPosts;
