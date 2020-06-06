import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let Posts = [
  {id: 1, message: "Привет, как ты?", LikesCount: 15},
  {id: 2, message: "Это мой первый пост", LikesCount: 20}
] 

let Dialogs = [
  {id: 1, name: "User 1"},
  {id: 2, name: "User 2"},
  {id: 3, name: "User 3"},
  {id: 4, name: "User 4"},
  {id: 5, name: "User 5"}
]

let Messages = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "Have are you?"},
  {id: 3, message: "Yo!"},
  {id: 4, message: "Yo!"}
]

ReactDOM.render(
  <React.StrictMode>
    <App Posts={Posts} Dialogs={Dialogs} Messages={Messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
