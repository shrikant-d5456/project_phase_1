import React, { useState } from 'react'
import axios from 'axios'
import { URL } from '../url.js';
import { Link, useNavigate } from 'react-router-dom'
import Modal from "react-modal";
import { BsXCircleFill } from 'react-icons/bs';
import {toast} from 'react-toastify';
const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [errors, setErrors] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const navigate = useNavigate();

  // Validation Function
  const validateForm = () => {
    const newErrors = {};

    if(!username.trim() || !email.trim() || !password || !phoneNo.trim()){
      toast.warn("All data is required.")
    }

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!phoneNo.trim()) {
      newErrors.phoneNo = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNo)) {
      newErrors.phoneNo = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handlereg = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!validateForm()) return; // Don't proceed if validation fails

    try {
      const resp = await axios.post("http://localhost:8000/auth/api/sign", { username, email, password, phoneNo });
      toast.success("Congratulations! Signup successfully 😇");
      navigate('/login');
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please try again.");
    }
  }

  const CloseEventCall = () => {
    setModalIsOpen(false);
    navigate("/");
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="transition-all"
        preventScroll={false}
      >
        <div className='fixed flex w-full h-full justify-center items-center bg-[#bcffa9]'>

          <div className='lg:w-8/12 md:w-6/12 w-[90%] flex gap-4 text-start h-[550px] lg:p-8 rounded-tl-3xl rounded-br-3xl loginbgimg'>

            <div className='lg:block hidden w-3/5'></div>

            <form 
              onSubmit={handlereg}
              className='relative lg:w-2/5 w-full flex flex-col gap-2 bg-white  p-4 shadow-inner'
            >
              <button
                className="absolute top-4 left-4 text-2xl text-gray-400 rounded-full "
                onClick={CloseEventCall}
                type="button"
              >
                <BsXCircleFill />
              </button>

              <p className='font-bold text-xl text-center text-gray-800'>Unlock<br />Maximum Savings</p>
              <p className="text-md text-center text-green font-bold">Welcome to Sign In Page</p>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter Username'
                className='inp'
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
                className='inp'
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
                className='inp'
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <input
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder='Enter Phone Number'
                className='inp'
              />
              {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}

              <button
                type='submit'
                className="bg-green py-1 rounded-2xl hover:bg-green-800 text-white font-semibold transition-all"
              >
                Sign Up
              </button>

              <p className=' text-sm'>
                Already Signed Up?
                <Link to="/login" className="text-blue-500  tracking-wider font-semibold text-sm underline px-1">
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Signup;
