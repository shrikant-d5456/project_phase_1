import React from 'react'
import { BsBag, BsPersonAdd, BsSearch } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
// import Modal from "react-modal";
 
const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
        <div>
            <div className='anime bg-green-900 text-white font-semibold text-center p-1 overflow-hidden'>
                <p className=' text-sm animate-pulse '>Welcome to Our Website!</p>
            </div>

            <div className='flex justify-between items-center p-4'>
                <div>Logo</div>
                <div className=' hidden lg:flex justify-center items-center border-[1px] border-gray-200 outline-none rounded-full px-4 py-2 shadow-sm'>
                    <input 
                    className='outline-none'
                    type="text"  />
                    <i><BsSearch/></i>
                </div>
                <div className='flex gap-8 mr-4'>
                    <span className='flex gap-2 justify-center items-center hover:text-green-800 cursor-pointer' onClick={()=>navigate("/login")}><BsPersonAdd/>Login</span>
                    <span className='flex gap-2 justify-center items-center hover:text-green-800 cursor-pointer'><BsBag/>Cart</span>
                </div>
            </div>
        </div>
        <div className='flex lg:justify-center justify-between lg:px-0 px-4 items-center p-2 text-[#284525] lg:gap-20 gap-4 list-none shadow-sm border-[1px] border-t-gray-200 border-b-gray-200 overflow-scroll'>
            <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Home</li>
            <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Post</li>
            <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Service</li>
            <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>About</li>
            <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Contact</li>
        </div>
        
        </>
    )
}

export default Navbar
