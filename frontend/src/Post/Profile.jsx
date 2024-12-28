import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { URL } from '../url';
import { UserContext } from '../Utils/UserContext';
import ProfilePost from './ProfilePost';
import AdminIDs from '../AdminIDs';
// import Navbar from '../components/Navbar';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkId, setCheckId] = useState("");

  const getUser = async () => {
    try {
      const resp = await axios.get(`${URL}/auth/user/${user.id}`);
      const userData = resp.data.data;
      setData(userData);
      setUsername(userData.username);
      setEmail(userData.email);
      setPassword(userData.password);
    } catch (err) {
      console.log(err);
    }
  };

  const setUser = async () => {
    try {
      const resp = await axios.put(`${URL}/auth/user/${user.id}`, {
        username,
        email,
        password
      });
      setData(resp.data.data);
      console.log("updated ")
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
    
      <div className='w-11/12 h-full m-auto'>
        <p className=' text-2xl font-semibold my-4 pl-2 text-gray-800'>Your Post</p>

        <hr className=' border-[#00ff26] border-[1px]' />

        <div className='lg:flex w-full my-4'>

          <div className='lg:w-4/5 w-full justify-center items-center '>
            <div className='flex flex-wrap'>
              <ProfilePost />
            </div>
          </div>

          <div className='lg:w-1/5  '>
          {user.username === "admin" ? 
          <>
          <label htmlFor="inp" className=' text-sm font-semibold'>Enter Admin ID to Update Profile</label>
            <input
              type="text"
              id='inp'
              value={checkId}
              onChange={(e) => setCheckId(e.target.value)}
              className=' w-full text-sm px-1 py-2 border-[1px] border-[#00ff26] outline-none'
              placeholder='Enter Admin ID'
            />
          </>
          :""}
          

            {
              user.username === "admin" && AdminIDs.some((admin) => admin.id === checkId) ?

                <>
                  <p className=' text-2xl font-semibold my-4 text-gray-800'>Your Profile</p>
                  <div className=' flex flex-col gap-2 text-sm border-[1px] border-[#00ff26] p-4' >

                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='inp'
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='inp'
                    />

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='inp'
                    />

                    <button onClick={setUser} className='bg-green text-white'>Update</button>

                  </div>
                </>

                :
                ""
            }
          </div>



          {user.username === "admin" ? "" :
            <div className='lg:w-1/5  '>
              <p className=' text-2xl font-semibold my-4 text-gray-800'>Your Profile</p>
              <div className=' flex flex-col gap-2 text-sm border-[1px] border-[#00ff26] p-4' >

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='inp'
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='inp'
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='inp'
                />

                <button onClick={setUser} className='btn1'>Update</button>

              </div>
            </div>
          }


        </div>

      </div>
    </>
  );
};

export default Profile;