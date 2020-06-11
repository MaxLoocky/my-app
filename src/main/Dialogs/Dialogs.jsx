import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  
  let DialogsElements = props.State.Dialogs.map( D => <DialogItem name={D.name} id={D.id} /> );
  let MessagesElements = props.State.Messages.map ( M => <Message message={M.message} />);
  
  let newMessageElement = React.createRef();

  let addMessage = (postMessage) => {
    let text = newMessageElement.current.value;
    props.addMessage(text);
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItems}>
        { DialogsElements }
      </div>
      <div className={s.Messages}>
        { MessagesElements }

        <div>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={ props.newMessageText }></textarea>
          <button onClick={ addMessage }>=></button>
        </div>
      </div>
    </div>

  );
}

export default Dialogs;
