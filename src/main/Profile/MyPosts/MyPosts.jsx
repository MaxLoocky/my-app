import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        New post
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.Post}>
        <Post Message="Привет, как ты?" LikesCount="15"/>
        <Post Message="Это мой первый пост" LikesCount="20"/>
      </div>
    </div>

  );
}

export default MyPosts;
