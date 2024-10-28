import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { URL } from '../url';
import { UserContext } from '../Context/UserContext';
import ProfilePost from '../components/ProfilePost';
import Navbar from '../components/Navbar';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <Navbar/>

      <div className='w-10/12 m-auto'>
        <p className=' text-2xl font-semibold my-4  pl-2 text-gray-800'>Your Post</p>

        <hr className=' border-[#00ff26] border-[1px]' />

        <div className='lg:flex gap-8 w-full my-4'>

          <div className='lg:w-4/5 w-full justify-center items-center '>
            <div className='flex flex-wrap'>
              <ProfilePost />
            </div>
          </div>

          <div className='lg:w-1/5  '>
            <p className=' text-2xl font-semibold my-4 text-gray-800'>Your Profile</p>
            <div className=' flex flex-col gap-2 text-sm border-[1px] border-green-500 p-4' >
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
        </div>

      </div>
    </>
  );
};

export default Profile;