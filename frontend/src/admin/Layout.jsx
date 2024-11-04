import React from 'react';
import { Route, Routes, Link , useLocation} from 'react-router-dom';
import { BsBank, BsClipboardDataFill, BsDatabaseFillAdd, BsFileEarmarkArrowUpFill, BsPersonVcardFill, BsSliders2, BsGrid1X2Fill } from "react-icons/bs";
import AllPost from './AllPost';
import HostedPost from './HostedPost';
import Profile from '../Post/Profile';
import AdminNavbar from '../components/AdminNavbar'
import PostDetails from '../Post/PostDetails';
const AdminLayout = () => {

  const path = useLocation().pathname;


  const icons = {
    BsClipboardDataFill: BsClipboardDataFill,
    BsDatabaseFillAdd: BsDatabaseFillAdd,
    BsFileEarmarkArrowUpFill: BsFileEarmarkArrowUpFill,
    BsPersonVcardFill: BsPersonVcardFill,
    BsSliders2: BsSliders2,
    BsBank: BsBank,
    BsGrid1X2Fill:BsGrid1X2Fill,
    
  };

  const arr = [
    {
      path_icon:"BsGrid1X2Fill",
      path_name:"All Post",
      path_link :"/admin/all-post",
    },
    {
      path_icon:"BsClipboardDataFill",
      path_name:"Hosted Post",
      path_link :"/admin/host-post",
    },
    {
      path_icon:"BsPersonVcardFill",
      path_name:"Checked Post",
      path_link :"/admin/view_students",
    },
    
    // {
    //   path_icon:"BsSliders2",
    //   path_name:"Setting",
    //   path_link :"/admin/teacher-dash/setting",
    // },
  ]

  return (
    <>
    <AdminNavbar/>
      <div className='w-full flex text-gray-800'>
        
        
        <div className='md:block hidden w-[300px] h-screen bg-color-blue-dark border-r-[1px] border-[#1aff00] text-sm font-semibold'>
          
          {arr.map((element,index)=>
          (
            <ul key={index} className=' '>

              <Link to={element.path_link}>
                  <li  className={`w-full flex gap-2 justify-start items-center py-1 px-2 rounded-sm hover:bg-[#1aff00] hover:text-white 
                            ${path === element.path_link ? ' bg-[#1aff00] text-white ' : ''}`}
                  >
                   {icons[element.path_icon] && React.createElement(icons[element.path_icon], { className: 'icon-class' })}
                   {element.path_name}
                  </li>
              </Link>
          </ul>
          ))}          

        </div>

        <div className='md:w-[80%] lg:h-screen w-full md:p-2 overflow-y-scroll scroll-smooth'>
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/post/:id" element={<PostDetails/>} />
            <Route path="/all-post" element={<AllPost/>} />
            <Route path="/host-post" element={<HostedPost/>} />
          </Routes>
        </div>
      </div>

    </>
  );
}

export default AdminLayout;
