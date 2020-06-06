import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let Posts = [
    {id: 1, message: "Привет, как ты?", LikesCount: 15},
    {id: 2, message: "Это мой первый пост", LikesCount: 20}
  ]

  let PostsElement = Posts.map( P => <Post Message={P.message} LikesCount={P.LikesCount} />)

  return (
    <div className={s.MyPosts}>
      <h3>My posts</h3>
      <div>
        New post
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.Posts}>
        { PostsElement }
      </div>
    </div>

  );
}

export default MyPosts;
