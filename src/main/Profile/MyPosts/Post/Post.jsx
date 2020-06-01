import React from 'react';
import s from './Post.module.css';

function Post (props) {
  return (
      <div>
        <div className={s.Item}>
          <img src="https://avatars.mds.yandex.net/get-pdb/1540679/1b7083e5-8fdd-4b8c-a94e-0a4b950d44c2/s1200" />
          { props.message }
          <div>
            <span>like { props.like }</span>
          </div>
        </div>
      </div>

);
}

export default Post;
