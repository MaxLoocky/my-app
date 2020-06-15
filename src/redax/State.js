const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _State: {

    ProfilePage: {
      Posts: [
        {id: 1, message: "Привет, как ты?", LikesCount: 15},
        {id: 2, message: "Это мой первый пост", LikesCount: 20} 
      ],
  
      newPostText: 'kamasutra'
    },
   
    DialogsPage: {
      Messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Have are you?"},
        {id: 3, message: "Yo!"},
        {id: 4, message: "Yo!"} 
      ],
  
      Dialogs: [
        {id: 1, name: "User 1"},
        {id: 2, name: "User 2"},
        {id: 3, name: "User 3"},
        {id: 4, name: "User 4"},
        {id: 5, name: "User 5"} 
      ],
  
      newMessageText: 'kamasutra'
    } 
  },

  _callSubscriber() {
    console.log('State был изменен');
  },

  getState() {
    return this._State;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._State.ProfilePage.newPostText,
        LikesCount: 0
      };
    
      this._State.ProfilePage.Posts.push(newPost);
      this._State.ProfilePage.newPostText = '';
      this._callSubscriber (this._State);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._State.ProfilePage.newPostText = action.newText;
      this._callSubscriber (this._State);
    }
  },

   addMessage() {
    let newMessage = {
      id: 5,
      message: this._State.DialogsPage.newMessageText,
    };

    this._State.DialogsPage.Messages.push(newMessage);
    this._State.DialogsPage.newMessageText = '';
    this._callSubscriber (this._State);
  },

  updateNewMessageText(newText) {
    this._State.DialogsPage.newMessageText = newText;
    this._callSubscriber (this._State);
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT, 
      newText: text
  })

export default store;
window.State = store;