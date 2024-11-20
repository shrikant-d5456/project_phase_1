import React, { useState, useContext } from 'react';
import axios from 'axios';
import { URL } from '../url.js';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Utils/UserContext.jsx';
import { BsXCircleFill } from 'react-icons/bs';
import Modal from "react-modal";
import AdminIDs from '../AdminIDs.jsx';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const { setUser } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(true);
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
      setErr(true);
    }
  };

  const CloseEventCall = () => {
    setModalIsOpen(false);
    navigate("/");
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={CloseEventCall}
        className="transition-all"
        preventScroll={false}
      >
        <div className="flex relative w-full h-screen justify-center items-center text-center bg-[conic-gradient(var(--tw-gradient-stops))] from-[#fef08a] via-[#84cc16] to-[#275b21]">
          <button
            className="absolute text-2xl w-[45px] h-[45px] z-10 top-20 pl-[10px] border-[1px] text-white bg-gray-800 rounded-full shadow-xl"
            onClick={CloseEventCall}
          >
            <BsXCircleFill />
          </button>

          <div className="lg:w-8/12 md:w-6/12 w-[90%] flex gap-4 text-start h-[550px] lg:p-8 p-4 shadow-xl rounded-tl-3xl rounded-br-3xl loginbgimg">
            <div className="lg:block hidden w-3/5"></div>

            <div className="lg:w-2/5 w-full flex flex-col gap-4 bg-[#fff9] backdrop-blur rounded-tl-3xl rounded-br-3xl p-4 shadow-inner">
              <p className="font-bold text-xl text-center text-gray-800">
                Unlock <br /> Maximum Savings
              </p>

              <p className="text-md text-center text-green font-bold">
                Welcome to Log In Page
              </p>

              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="inp"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="inp"
              />

              <button
                type="submit"
                onClick={handleLogin}
                className="bg-green py-1 rounded-2xl hover:bg-green-800 text-white font-semibold transition-all"
              >
                Log In
              </button>

              <p>
                You Don't have an account?
                <Link to="/signup" className="text-blue-500 text-sm underline px-1">
                  SignUp
                </Link>
              </p>

              {err && (
                <p className="text-center text-red-500 text-sm underline">
                  Something went wrong
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
