import React, {useState} from 'react';
import './Login.css';
 const [username, setUsername] = useState();
 const [password, setPassword] = useState();

const Login = ({setToken}) => {

  async function loginUser(){
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(data => data.json())
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return (
    <div>
        <h1>Please Log In</h1>
    <form onSubmit={handleSubmit} >
    <label>
      <p>Username</p>
      <input type="text" onChange={e => setUsername(e.target.value)}/>
    </label>
    <label>
      <p>Password</p>
      <input type="password" onChange={e => setPassword(e.target.value)}/>
    </label>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  </div>
  )
}
Login.propTypes = {
  setToken: propTypes.func.isRequired
}

export default Login;