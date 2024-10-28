import React, { useState, useContext } from 'react';
import axios from 'axios';
import { URL } from '../url.js';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext.jsx';
import {BsXCircleFill } from 'react-icons/bs';
import Modal from "react-modal";
import Home from './Home.jsx';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [closeModal, setcloseModal] = useState(false);

  const handleLogin = async () => {

    try {
      const resp = await axios.post(`${URL}/auth/api/login`, { email, password });

      setUser(resp.data);

      console.log("Login done");

      console.log(resp.data.id);

      setErr(false);
      setModalIsOpen(false);
      navigate('/');
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  const CloseEventCall = () => {
    setModalIsOpen(false);
    navigate("/");
  }

  return (
    <>
      <Home />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="transition-all"
        preventScroll={false}
      >
        <div className='flex w-full h-screen justify-center  items-center text-center bg-[#0cff0c53] shadow-2xl'>

          <button className=' absolute text-2xl w-[45px] h-[45px] z-10 top-24 pl-[10px] border-[1px] text-white bg-gray-800 rounded-full shadow-xl'
            onClick={CloseEventCall}
          ><BsXCircleFill />
          </button>

          <div className=' lg:w-8/12 w-full flex gap-4 text-start h-[550px] lg:p-8 p-4 shadow-xl rounded-tl-3xl rounded-br-3xl   loginbgimg'>

            <div className='lg:block hidden w-3/5'>
            </div>

            <div className=' lg:w-2/5 w-full flex flex-col gap-4 bg-[#fff9] backdrop-blur rounded-tl-3xl rounded-br-3xl p-4 shadow-inner'>
              <p className='font-bold text-xl text-center text-gray-800'>Unlock  <br /> Maximum Saving</p>

              <p className=' text-sm text-center text-gray-500'>Unlock Great Healt</p>

              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
                className='inp'
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
                className='inp'
              />

              
              
              <button
                type='submit'
                onClick={handleLogin}
                className='btn1 hover:bg-green-400 hover:text-white transition-all'>
                Log In
              </button>

              <p>
                Don't have an account?
                <Link to="/signup" className="text-blue-500 text-sm underline">
                  SignUp
                </Link>
              </p>

              {
                err &&
                <p className=" text-center text-red-500 text-sm underline">
                  Something went wrong
                </p>
              }

            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
