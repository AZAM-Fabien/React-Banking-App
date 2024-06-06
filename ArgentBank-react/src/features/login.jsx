import '../../designs/css/main.css'
 import InputWrapper from '../../compossant/Input Warpper.jsx';
 import { useState } from 'react';
 import { useDispatch,  useSelector} from 'react-redux';
 import { login } from './Sing-inSlice.js';
 import { useNavigate } from 'react-router-dom'; 


function LogIn() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const authState = useSelector((state) => state.auth); 
  console.log('État du reducer auth :', authState);   

  const handleUsernameChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("email", email)

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email:email, password: password }),
      });
      console.log('Reponse de l\'API :', response)
      if (response.ok) {
        const data = await response.json();
        dispatch(login({ email: email, password: password, token: data.body.token }));
        console.log('Connexion réussie ! Données reçues :', data);
        navigate('/user');
      } else {
        const errorData = await response.json(); 
        console.error('Erreur de connexion :', errorData);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
    <InputWrapper
      label="Username"
      id="username"
      type="text"
      value={email}
      onChange={handleUsernameChange}
    />
    <InputWrapper
      label="Password"
      id="password"
      type="password"
      value={password}
      onChange={handlePasswordChange}
    />
    <div className="input-remember">
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
    </div>
    <button className="sign-in-button">Sign In</button>
  </form>
  )
}
export default LogIn