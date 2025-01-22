import React, { useState } from 'react'
import axios from 'axios'
 
import { Link, useNavigate } from 'react-router-dom'
import Modal from "react-modal";
import { BsXCircleFill } from 'react-icons/bs';


const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [err, setErr] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [closeModal, setcloseModal] = useState(false);
  const navigate = useNavigate();


  const handlereg = async () => {
    try {
      const resp = await axios.post(URL + "/auth/api/sign", { username, email, password });
      // console.log("signup :" + resp.data);

      setUsername(resp.data.username);
      setEmail(resp.data.email);
      setPassword(resp.data.password);
      setErr(false);
      navigate('/login');
    } catch (err) {
      console.log(err)
      setErr(true)
    }
  }

  const CloseEventCall = () => {
    setModalIsOpen(false);
    navigate("/");
  }

  // console.log(username, email, password);

  return (
    <>
   
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="transition-all"
        preventScroll={false}
      >
        <div className=' fixed flex w-full h-full justify-center  items-center text-center bg-white sm:bg-[#bcffa9]'>

          <button className=' absolute text-2xl w-[45px] h-[45px] z-10 lg:top-20 md:top-20 top-16  pl-[10px] sm:border-[1px] text-white bg-gray-800 rounded-full '
            onClick={CloseEventCall}
          ><BsXCircleFill />
          </button>

          <div className=' lg:w-8/12 md:w-6/12 w-[90%] flex gap-4 text-start h-[550px] lg:p-8  rounded-tl-3xl rounded-br-3xl loginbgimg'>

            <div className='lg:block hidden w-3/5'>
            </div>

            <div
              className=' lg:w-2/5 w-full flex flex-col gap-4  bg-white sm:bg-[#ffffff99] backdrop-blur rounded-tl-3xl border-none rounded-br-3xl p-4 sm:shadow-inner'
            >

              <p className='font-bold text-xl text-center text-gray-800'>Unlock<br />Maximum Savings</p>
              <p className="text-md text-center text-green font-bold">
                Welcome to Sign In Page
              </p>


              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter Username'
                className='inp '
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
                className='inp '
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
                className=' inp'
              />

              <input
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder='Enter PhoneNo'
                className='inp '
              />

              <button
                type='submit'
                onClick={handlereg}
                className="bg-green py-1 rounded-2xl hover:bg-green-800 text-white font-semibold transition-all"
              >

                Sign Up
              </button>

              <p>
                You already SignUp!
                <Link to="/login" className="text-blue-500 uppercase font-semibold text-sm underline px-1">
                  Login
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
  )
}

export default Signup