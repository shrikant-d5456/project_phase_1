import React, { useState, useContext } from 'react';
import axios from 'axios';
import { URL } from '../url.js';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext.jsx';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const resp = await axios.post(`${URL}/auth/api/login`, { email, password });
    
      setUser(resp.data);

      console.log("Login done");

      console.log(resp.data.id);

      setErr(false);
      navigate('/');
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  return (
    <div className='flex w-full h-screen justify-center items-center text-center'>

      <dummy className="py-8"></dummy>
      <div className='flex flex-col gap-4 text-start h-fit p-8 lg:w-1/2 w-full bg-[#f3daff99] shadow-xl'>
      <p className='font-semibold text-2xl'>Log In</p>
      <hr />

      <p>Enter Email</p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className='inp'
      />

      <p>Enter Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='inp'
      />

      <button
        onClick={handleLogin}
        className='btn1'>Log In</button>

      {err && <p>Something went wrong</p>}
      </div>
    </div>
  );
};

export default Login;
