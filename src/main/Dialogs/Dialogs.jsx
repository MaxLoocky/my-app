import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  
  let DialogsElements = props.Dialogs.map( D => <DialogItem name={D.name} id={D.id} /> );
  let MessagesElements = props.Messages.map ( M => <Message message={M.message} />);

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
