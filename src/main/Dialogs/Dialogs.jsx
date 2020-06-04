import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItems}>
        <div className={s.Dialog + ' ' + s.active}>
          <NavLink to='/Dialogs/1'>User 1</NavLink>
        </div>
        <div className={s.Dialog}>
          <NavLink to='/Dialogs/2'>User 2</NavLink>
        </div>
        <div className={s.Dialog}>
          <NavLink to='/Dialogs/3'>User 3</NavLink>
        </div>
        <div className={s.Dialog}>
          <NavLink to='/Dialogs/4'>User 4</NavLink>
        </div>
        <div className={s.Dialog}>
          <NavLink to='/Dialogs/5'>User 5</NavLink>
        </div>
      </div>
      <div className={s.Messages}>
        <div className={s.Message}>Hi!</div>
        <div className={s.Message}>Have are you?</div>
        <div className={s.Message}>Yo!</div>
      </div>
      
    </div>

  );
}

export default Dialogs;
