import React, { useContext, useEffect, useState } from 'react';
import PostCard from './PostCard.jsx';
import axios from 'axios';
import { URL } from '../url.js';
// import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext.jsx';

const AdminPage = () => {

  const [posts, setposts] = useState([]);
  const { user } = useContext(UserContext);

  const getposts = async () => {
    try {
      const resp = await axios.get(`${URL}/auth/api/post`);
      setposts(resp.data.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getposts();
  });

  return (
    <div>
      <h1 className='text-2xl font-semibold text-gray-600 mt-20 mb-10 text-center'>Hosting post </h1>
      <div className='w-full flex flex-wrap justify-center items-center m-auto gap-4 '>
        {posts.map((post, index) => (
         <div key={index} className='lg:w-1/4'>
              <PostCard key={post._id} post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPage