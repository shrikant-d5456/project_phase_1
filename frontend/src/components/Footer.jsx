import React from 'react';
import {BsGoogle,BsFacebook,BsTwitterX,BsInstagram,BsYoutube} from 'react-icons/bs';

<<<<<<< HEAD
function Footer() {
    return (
        <div className='w-screen text-sm border-t-2'>
            <footer className="lg:flex w-screen  bg-[#ffffff]">

                <div className="lg:w-2/5 p-4 m-auto ">
                    <h1 className="text-2xl font-bold ml-4 mb-4"> Developer {`</>`} </h1><hr className='border-green' /> 
                    <span className="flex gap-8 text-2xl m-4 text-gray-800">
                        <i><BsGoogle className='text-black'/></i>
                        <i><BsInstagram className='text-black'/></i>
                        <i><BsFacebook className='text-black'/></i>
                        <i><BsYoutube className='text-black'/></i>
                        <i><BsTwitterX className='text-black'/></i>
                    </span>
                </div>

                <div className="lg:w-3/5 w-full p-2 lg:flex gap-4 list-none ">
                    <div className="m-2 flex flex-col gap-4">
                        <li className="font-medium ">Useful Links</li>
                    </div>
                    <hr />
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium ">Information</li>
                        <li className='text-gray-800'>About Us</li>
                        <li className='text-gray-800'>Privacy Policy</li>
                        <li className='text-gray-800'>Terms & Conditions</li>
                        <li className='text-gray-800'>What info we collect ?</li>
                    </div>
                    <hr />
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium ">Contact Us</li>
                        <li className='text-gray-800'>Mangaon, Raigad</li>
                        <li className='text-gray-800'>Phone - </li>
                        <li className='text-gray-800'>Email - <a href='mailto:'>aayurvedikmedicine.com</a></li>
                        <li className='text-gray-800'>FAQ</li>
                    </div>
                    <hr />
                </div>
            </footer>
            <div className=" p-2 text-center font-semibold ">
                <p className='text-sm my-4'>Designed &👩🏻‍💻by Developer | © All Rights Reserved {new Date().getFullYear()} </p>
            </div>
        </div>
    )
}

export default Footer
=======
const Footer = () => {
  return (
    <div className='w-full bg-[#1aff00] text-white bottom-1'>
      <p className=' text-center'> Footer</p>
    </div>
  )
}

export default Footer

>>>>>>> e5ee7ca266caf53a12b75b0fabda994dcfacb0b9
