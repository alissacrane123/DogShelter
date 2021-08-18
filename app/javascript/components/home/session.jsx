import React, { useState} from 'react';

import { loginUser } from '../../redux/actions/sessionActions.js';

const Session = props => {
  const [email, setEmail] = useState('alissa@gmail.com');
  const [password, setPassword] = useState('password');


  return (
    <div className='session'>
      <h1>Log In</h1>

      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} />

      <button onClick={() => loginUser({email, password})}>Submit</button>
    </div>
  )
}

export default Session;