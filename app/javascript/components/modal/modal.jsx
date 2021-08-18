import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import Login from './login';
import Signup from './signup';
import { setModal } from "../../redux/actions/uiActions";


const Modal = props => {
  const dispatch = useDispatch();
  const { modal } = props;

  let component;

  switch (modal) {
    case 'login':
      component = <Login />
      break;
    case 'signup':
      component = <Signup />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={() => dispatch(setModal(null))}>
      <div onClick={e => e.stopPropagation()} className='modal'>{ component }</div>
    </div>
  )
}

export default Modal;