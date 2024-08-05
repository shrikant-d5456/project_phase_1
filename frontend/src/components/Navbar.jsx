import React, { useContext, useState } from 'react'
import axios from 'axios'
import { URL } from '../url.js';
import { useNavigate,Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext.jsx';
import { BsList } from 'react-icons/bs';


const Navbar = () => {

  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext);


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
      console.log(err)
    }

  }

  return (
    <div className='fixed z-10  flex w-full justify-between items-center py-2 bg-black/20 lg:px-10 px-4 '>
       
        <div className='lg:hidden flex flex-col absolute bg-[#ae00ff99] text-white px-10 top-14 left-1'>
        
        {menu && <>
        { !user &&
          <>
          <Link to="/login"><button onClick={()=>setmenu(false)} className='btn'>Login</button></Link>
          <Link to="/signup"><button onClick={()=>setmenu(false)} className='btn'>Sign Up</button></Link>
          </>
          }

          { user && 
          <>
          <button onClick={handlelogout}className='btn'>Logout</button>
           <Link to="/profile"><button onClick={()=>setmenu(false)} className='btn'>Profile</button></Link>
           <Link to="/createpost"><button onClick={()=>setmenu(false)} className='btn'>Create</button></Link>
          </>}
          </>
        }
           
        </div>
        <div>
            <Link to='/'> 
            <p className='text-white flex justify-center items-center gap-4'>
              <button onClick={()=>setmenu(!menu)} ><BsList className='text-xl font-bold'/></button> 
              Blog App
            </p></Link>
        </div>

        <div >
            <input type="text" className=' w-40 bg-transparent border px-4 my-2' placeholder='search..' />
        </div>
        <div className='gap-4 lg:block hidden'>
          { !user &&
          <>
          <Link to="/login"><button className='btn'>Login</button></Link>
          <Link to="/signup"><button className='btn'>Sign Up</button></Link>
          </>
          }

          { user && 
          <>
          <button onClick={handlelogout}
          className='btn'>Logout</button>
           <Link to="/profile"><button className='btn'>Profile</button></Link>

           <Link to="/createpost"><button className='btn'>Create</button></Link>
          </>}
           


            
        </div>
     
    </div>
  )
}

export default Navbar
