import React, { useContext, useState } from 'react'
import axios from 'axios'
import { URL } from '../url.js';
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext.jsx';
import { BsBag, BsFilePost, BsList, BsPersonAdd, BsPersonDashFill, BsPerson, BsSearch, BsX } from 'react-icons/bs';


const Navbar = () => {

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [menu, setmenu] = useState(false);

  const handlelogout = async () => {
    try {
      const resp = await axios.post(URL + "/auth/api/logout")
      console.log(resp.data);
      setUser(null);
      setmenu(false)
      navigate('/login');
    }
    catch (err) {
      console.log("someting went wrongs")
    }
  }

  return (
    <header>
      <div>
        <div className=' bg-[#1aff00] text-white font-semibold text-center p-1 overflow-hidden'>
          <p className=' text-sm '>Welcome to Our Website!</p>
        </div>

        <div className='flex justify-between items-center p-4'>
          <Link to="/"><div>Logo</div></Link>

          <div className=' sticky  hidden lg:flex justify-center items-center border-[1px] border-gray-200 outline-none rounded-full px-4 py-2 shadow-sm'>
            <input
              className='outline-none'
              type="text" />
            <i><BsSearch /></i>
          </div>


          <div className=' z-10 absolute top-11 right-14'>
            {menu &&
              <div className=' bg-white rounded-md border-[1px] border-gray-200 flex flex-col py-2 px-8 gap-2 '>

                {!user &&
                  <span className='flex gap-2 justify-center items-center hover:text-green-800 cursor-pointer' onClick={() => navigate("/login")}><BsPersonAdd />Login</span>
                }
                {user &&
                  <>
                    <span onClick={handlelogout} className='flex gap-2 justify-center items-center hover:text-green-800 cursor-pointer'><BsPersonDashFill />Logout</span>
                    <span className='flex gap-2 items-center hover:text-green-800 cursor-pointer'><BsBag />Cart</span>

                    <Link to="/profile">
                      <span onClick={() => setmenu(false)} className='flex gap-2 items-center hover:text-green-800 cursor-pointer'>
                        <BsPerson />
                        Profile
                      </span>
                    </Link>

                    <Link to="/createpost">
                      <span onClick={() => setmenu(false)} className='flex gap-2 items-center hover:text-green-800 cursor-pointer'>
                        <BsFilePost />
                        Create
                      </span>
                    </Link>
                  </>}

              </div>
            }
          </div>

          <div>
            <button className='lg:hidden block bg-white text-xl shadow-xl p-2 rounded-md border-[1px] border-gray-200' onClick={() => setmenu(!menu)}>{menu ? <BsX /> : <BsList />}</button>
            <div className=' lg:flex hidden py-2 px-8 gap-8 '>
              {!user &&
                <span className='flex gap-2 justify-center items-center hover:text-green-800 cursor-pointer' onClick={() => navigate("/login")}><BsPersonAdd />Login</span>
              }
              {user &&
                <>

                  <Link to="/profile">
                    <span onClick={() => setmenu(false)} className='flex gap-2 items-center hover:text-green-800 cursor-pointer'>
                      <BsPerson />
                      Profile
                    </span>
                  </Link>

                  <Link to="/createpost">
                    <span onClick={() => setmenu(false)} className='flex gap-2 items-center hover:text-green-800 cursor-pointer'>
                      <BsFilePost />
                      Create
                    </span>
                  </Link>
                  <span className='flex gap-2 items-center hover:text-green-800 cursor-pointer'><BsBag />Cart</span>
                  <span onClick={handlelogout} className='flex gap-2 justify-center items-center hover:text-green-800 cursor-pointer'><BsPersonDashFill />Logout</span>
                </>}
            </div>
          </div>
        </div>
      </div>

      <div className='flex lg:justify-center justify-between lg:px-0 px-4 items-center p-2 text-[#284525] lg:gap-20 gap-4 list-none shadow-sm border-[1px] border-t-gray-200 border-b-gray-200 overflow-scroll'>
        <Link to="/"><li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Home</li></Link>
        <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Post</li>
        <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Service</li>
        <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>About</li>
        <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Contact</li>
      </div>

    </header>
  )
}

export default Navbar
