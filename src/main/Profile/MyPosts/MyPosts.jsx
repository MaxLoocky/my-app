import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let PostsElement = props.ProfilePage.Posts.map( P => <Post Message={P.message} LikesCount={P.LikesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }

  return (
    <div className={s.MyPosts} >
      <h3>My posts</h3>
      <div>
        New post
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={ props.newPostText } />
        </div>
        <div>
          <button onClick={ addPost }> Add Post</button>
        </div>
      </div>
      <div className={s.Posts}>
        { PostsElement }
      </div>
    </div>

  );
}

export default MyPosts;
