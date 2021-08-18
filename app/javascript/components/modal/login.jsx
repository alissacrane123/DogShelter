import React, { useState} from 'react';
import { useDispatch } from 'react-redux'

import { loginUser } from '../../redux/actions/sessionActions.js';
// import { setModal } from '../../redux/actions/uiActions';

const Login = props => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState('alissacrane');
  const [password, setPassword] = useState('password');

  function handleSubmit() {
    let user;
    if (credentials.indexOf('@') >= 0) {
      user = { email: credentials, password}
    } else {
      user = { username: credentials, password}
    }
    dispatch(loginUser(user))
  }

  return (
    <div className='session'>
      <h1>Log In</h1>

      <input type="text" value={credentials} onChange={e => setCredentials(e.target.value)} />
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;