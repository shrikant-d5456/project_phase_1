import React, { useState } from 'react'
import axios from 'axios'
import { URL } from '../url.js';
import { useNavigate } from 'react-router-dom'
const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handlereg = async () => {
    try {
      const resp = await axios.post(URL + "/auth/api/sign", { username, email, password });
      console.log("signup :" + resp.data)

      setUsername(resp.data.username)
      setEmail(resp.data.email)
      setPassword(resp.data.password)
      setErr(false)
      navigate('/login')
    }
    catch (err) {
      console.log(err)
      setErr(true)
    }
  }



  console.log(username, email, password);

  return (
    <div className='flex w-full h-screen justify-center items-center text-center'>

      <dummy className="py-8"></dummy>
      <div className='flex flex-col gap-4 text-start h-fit p-8 lg:w-1/2 w-full bg-[#f3daff99] shadow-xl'>

        <p className='font-semibold text-2xl'>Sign Up</p><hr />

        <p>Enter username</p>
        <input type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username' className='inp' />

        <p>Enter email</p>
        <input type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email' className='inp' />

        <p>Enter Password</p>
        <input type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password' className='inp' />

        <button
          onClick={handlereg}
          className='btn1'>Sign up Now</button>
        {err && <p>Somthing error</p>}
      </div>
    </div>
  )
}

export default Signup
