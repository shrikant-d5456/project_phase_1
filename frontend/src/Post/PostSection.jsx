import React, { useContext, useEffect, useState } from 'react';
import PostCard from "./PostCard.jsx";
import axios from 'axios';
import { URL } from '../url.js';
// import { Link } from 'react-router-dom';
import { UserContext } from '../Utils/UserContext.jsx';

const PostSection = () => {

  const [posts, setposts] = useState([]);
  const { user } = useContext(UserContext);

  const getposts = async () => {
    try {
      const resp = await axios.get(`${URL}/auth/api/post/hostData`);
      setposts(resp.data.data);
    } catch (err) {
      setError(err.msg);
    }
  }; 

  useEffect(() => {
    getposts();
  },[]);

  return (
    <div>
      <div className=' w-full sm:w-10/12  flex flex-wrap lg:justify-start justify-center items-center m-auto '>
        {posts.map((post, index) => (
         <div key={index} className='lg:w-1/4'>
              <PostCard key={post._id} post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostSection
