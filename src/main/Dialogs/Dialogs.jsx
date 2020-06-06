import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  
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
  
  let DialogsElements = Dialogs.map( D => <DialogItem name={D.name} id={D.id} /> );
  let MessagesElements = Messages.map ( M => <Message message={M.message} />);

  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItems}>
        { DialogsElements }
      </div>
      <div className={s.Messages}>
        { MessagesElements }
      </div>


    </div>

  );
}

export default Dialogs;
