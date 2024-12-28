import React, { useState, useContext } from 'react';
import axios from 'axios';
import { URL } from '../url.js';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { UserContext } from '../Context/UserContext.jsx';
import { BsXCircleFill } from 'react-icons/bs';
import Modal from "react-modal";
import Home from '../pages/Home.jsx';
=======
import { UserContext } from '../Utils/UserContext.jsx';
import { BsXCircleFill } from 'react-icons/bs';
import Modal from "react-modal";
import AdminIDs from '../AdminIDs.jsx';
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const { setUser } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(true);
<<<<<<< HEAD
  const [closeModal, setcloseModal] = useState(false);
  const navigate = useNavigate();

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
=======
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const resp = await axios.post(`${URL}/auth/api/login`, { email, password });
      setUser(resp.data);
      console.log("Login successful");
      setErr(false);
      setModalIsOpen(false);

      if (AdminIDs.some((admin) => admin.id === resp.data.id)) {
        navigate("/admin/");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0
      setErr(true);
    }
  };

  const CloseEventCall = () => {
    setModalIsOpen(false);
    navigate("/");
<<<<<<< HEAD
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

          <button
            className=' absolute text-2xl w-[45px] h-[45px] z-10 top-24 pl-[10px] border-[1px] text-white bg-gray-800 rounded-full shadow-xl'
            onClick={CloseEventCall}
          ><BsXCircleFill />
          </button>

          <div className=' lg:w-8/12 md:w-6/12 w-[90%] flex gap-4 text-start h-[550px] lg:p-8 p-4 shadow-xl rounded-tl-3xl rounded-br-3xl   loginbgimg'>

            <div className='lg:block hidden w-3/5'>
            </div>

            <div className=' lg:w-2/5 w-full flex flex-col gap-4 bg-[#fff9] backdrop-blur rounded-tl-3xl rounded-br-3xl p-4 shadow-inner'>

              <p className='font-bold text-xl text-center text-gray-800'
              >Unlock  <br /> Maximum Saving
              </p>

              <p className=' text-sm text-center text-gray-500'
              >Unlock Great Healt
=======
  };

  return (
    <>
   
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={CloseEventCall}
        className="transition-all"
        preventScroll={false}
      >
        <div className="flex w-full h-screen justify-center items-center text-center bg-[#bcffa9]">
          <button
            className="absolute text-2xl w-[45px] h-[45px] z-10 lg:top-20 md:top-20 top-16 pl-[10px] border-[1px] text-white bg-gray-800 rounded-full shadow-xl"
            onClick={CloseEventCall}
          >
            <BsXCircleFill />
          </button>

          <div className="lg:w-8/12 md:w-6/12 w-[90%] flex gap-4 text-start h-[550px] lg:p-8  shadow-xl rounded-tl-3xl rounded-br-3xl loginbgimg">
            <div className="lg:block hidden w-3/5"></div>

            <div className="lg:w-2/5 w-full flex flex-col gap-4 bg-white sm:bg-[#ffffff99] backdrop-blur rounded-tl-3xl rounded-br-3xl p-4 shadow-inner">
              <p className="font-bold text-xl text-center text-gray-800">
                Unlock <br /> Maximum Savings
              </p>

              <p className="text-md text-center text-green font-bold">
                Welcome to Log In Page
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0
              </p>

              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
                placeholder='Enter Email'
                className='inp'
=======
                placeholder="Enter Email"
                className="inp"
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
                placeholder='Enter password'
                className='inp'
              />

              <button
                type='submit'
                onClick={handleLogin}
                className='btn1 hover:bg-green-400 hover:text-white transition-all'>
=======
                placeholder="Enter Password"
                className="inp"
              />

              <button
                type="submit"
                onClick={handleLogin}
                className="bg-green py-1 rounded-2xl hover:bg-green-800 text-white font-semibold transition-all"
              >
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0
                Log In
              </button>

              <p>
<<<<<<< HEAD
                Don't have an account?
                <Link to="/signup" className="text-blue-500 text-sm underline">
=======
                You Don't have an account?
                <Link to="/signup" className="text-blue-500 uppercase font-semibold text-sm underline px-1">
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0
                  SignUp
                </Link>
              </p>

<<<<<<< HEAD
              {
                err &&
                <p className=" text-center text-red-500 text-sm underline">
                  Something went wrong
                </p>
              }

=======
              {err && (
                <p className="text-center text-red-500 text-sm underline">
                  Something went wrong
                </p>
              )}
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0
