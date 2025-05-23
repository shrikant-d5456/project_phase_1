import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../url.js';
// import { Link } from 'react-router-dom';
import { UserContext } from '../Utils/UserContext.jsx';
import AdminPostCard from './AdminPostCard.jsx';

const Dashboard = () => {

  const [posts, setposts] = useState([]);
  const { user } = useContext(UserContext);

  const getposts = async () => {
    try {
      const resp = await axios.get(`https://project-phase-1-woku.onrender.com/auth/api/post`);
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
      <div className='w-full flex flex-wrap lg:justify-start justify-center items-center m-auto '>
        {posts.map((post, index) => (
         <div key={index} className='lg:w-1/4'>
              <AdminPostCard key={post._id} post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard