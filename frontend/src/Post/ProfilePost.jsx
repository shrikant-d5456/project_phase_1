<<<<<<< HEAD:frontend/src/Post/ProfilePost.jsx
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { URL } from "../url";
import { UserContext } from "../Utils/UserContext";
import { Link } from "react-router-dom";
=======
import axios from 'axios'; 
import React, { useContext, useEffect, useState } from 'react';
import { URL } from '../url';
import { UserContext } from '../Context/UserContext';
>>>>>>> e5ee7ca266caf53a12b75b0fabda994dcfacb0b9:frontend/src/pages/ProfilePost.jsx

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

<<<<<<< HEAD:frontend/src/Post/ProfilePost.jsx
  const userPosts = posts.filter((post) => post.userId === user.id);
=======
  const userPosts = posts.filter(post => post.userId === user.id);
>>>>>>> e5ee7ca266caf53a12b75b0fabda994dcfacb0b9:frontend/src/pages/ProfilePost.jsx

  return (
    <>
      {userPosts.length > 0 ? (
        userPosts.map((post, index) => (
<<<<<<< HEAD:frontend/src/Post/ProfilePost.jsx
          <Link
            key={index}
            to={
              post.validator1 &&
              post.validator2 &&
              post.validator3 &&
              post.validator4 &&
              post.validator5
                ? `/posts/post/${post._id}`
                : `/posts/post/post-validatation/${post._id}`
            }
            className="lg:w-1/3 border-[1px] border-gray-200 bg-white p-4 shadow text-sm "
          >
            <div key={index}>
              <img className="w-full h-[150px]" src={post.img} alt="" />
              <h1 className="text-justify my-2 font-semibold text-gray-800">
                {post.title}
              </h1>
              <p className=" my-2 text-gray-600 text-justify">
                {post.desc.substring(0,20)}..Read More
              </p>
            </div>
          </Link>
=======
          <div key={index} className='lg:w-1/4 border-[1px] border-gray-200 bg-white p-4 shadow text-sm '>
            <img className='w-full' src={post.img} alt="" />
            <h1 className='text-justify my-2 font-semibold text-gray-800'>{post.title}</h1>
            <p className=' my-2 text-gray-600 text-justify'>{post.desc.substring(0,73)}..Read More</p>
          </div>
>>>>>>> e5ee7ca266caf53a12b75b0fabda994dcfacb0b9:frontend/src/pages/ProfilePost.jsx
        ))
      ) : (
        <p>No posts yet</p>
      )}
    </>
  );
};

export default ProfilePost;
