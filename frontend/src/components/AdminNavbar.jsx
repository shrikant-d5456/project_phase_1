import React, { useContext, useState } from 'react'
import axios from 'axios'
import { URL } from '../url.js';
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../Utils/UserContext.jsx';
import { BsBag, BsFilePost, BsList, BsPersonAdd, BsPersonDashFill, BsPerson, BsSearch, BsX } from 'react-icons/bs';


const AdminNavbar = () => {

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
                    <p className=' text-sm '>Welcome! {user?.username}</p>
                </div>

                <div className='flex justify-between items-center px-4 border-b-[1px] border-[#1aff00]'>
                    <Link to="/admin"><div>Logo</div></Link>
                    <div className=' z-10 absolute top-11 right-14'>
                        {menu &&
                            <div className=' bg-white rounded-md border-[1px] border-gray-200 flex flex-col py-2 px-8 gap-2 '>
                                {!user &&
                                    <span className='flex gap-2 justify-center items-center hover:text-green-800 cursor-pointer' onClick={() => navigate("/login")}><BsPersonAdd />Login</span>
                                }
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
                                    <Link to="/admin/profile">
                                        <span onClick={() => setmenu(false)} className='flex gap-2 items-center hover:text-green-800 cursor-pointer'>
                                            <BsPerson />
                                            Profile
                                        </span>
                                    </Link>
                                    <span onClick={handlelogout} className='flex gap-2 justify-center items-center hover:text-green-800 cursor-pointer'><BsPersonDashFill />Logout</span>
                                </>}
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default AdminNavbar
