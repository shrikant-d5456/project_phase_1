import axios from 'axios'; 
import React, { useContext, useEffect, useState } from 'react';
import { URL } from '../url';
import { UserContext } from '../Context/UserContext';

const ProfilePost = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  const getPosts = async () => {
    try {
      const resp = await axios.get(`${URL}/auth/post`);
      setPosts(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const userPosts = posts.filter(post => post.userId === user.id);

  return (
    <>
      {userPosts.length > 0 ? (
        userPosts.map((post, index) => (
          <div key={index} className='lg:w-1/4 border-[1px] border-gray-200 bg-white p-4 shadow text-sm '>
            <img className='w-full' src={post.img} alt="" />
            <h1 className='text-justify my-2 font-semibold text-gray-800'>{post.title}</h1>
            {/* <span>
              <p className=' my-2 text-gray-600'>@{post.username}</p>
              <p className=' my-2 text-[10px]'>{new Date(post.createdAt).toLocaleString()}</p>
            </span> */}
            <p className=' my-2 text-gray-600 text-justify'>{post.desc.substring(0,73)}..Read More</p>
          </div>
        ))
      ) : (
        <p>No posts yet</p>
      )}
    </>
  );
};

export default ProfilePost;
