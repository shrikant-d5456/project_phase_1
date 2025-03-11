import axios from 'axios'; 
import React, { useContext, useEffect, useState } from 'react';
import { URL } from '../url';
import { UserContext } from '../Utils/UserContext';
import { Link } from 'react-router-dom';

const SavePost = () => {
  const [posts, setPosts] = useState([]);
  const [saveposts, setSavePosts] = useState([]);
  const [matchedPosts, setMatchedPosts] = useState([]);
  const { user } = useContext(UserContext);

  const getUserSavedPosts = async () => {
    try {
      const resp = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND}/auth/user/${user.id}`);
      setSavePosts(resp.data.data.savedPosts || []);
      // console.log('Saved posts:', resp.data.data.savedPosts);
    } catch (err) {
      console.error('Error fetching saved posts:', err);
    }
  };

  const getPosts = async () => {
    try {
      const resp = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND}/auth/post`);
      setPosts(resp.data.data || []);
      // console.log('Posts:', resp.data.data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  // Fetch posts and saved posts together
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getPosts(), getUserSavedPosts()]);
    };
    fetchData();
  }, []);

  // Match saved posts with all posts
  useEffect(() => {
    if (posts.length > 0 && saveposts.length > 0) {
      const matched = posts.filter((post) => saveposts.includes(post._id));
      setMatchedPosts(matched);
      // console.log('Matched posts:', matched);
    }
  }, [posts, saveposts]);

  return (
    <div  className=' w-10/12 m-auto flex '>
      {matchedPosts.length > 0 ? (
        matchedPosts.map((post) => (
          <Link
            key={post._id}
            to={
              post.validator1 &&
              post.validator2 &&
              post.validator3 &&
              post.validator4 &&
              post.validator5
                ? `/posts/post/${post._id}`
                : `/posts/post/post-validation/${post._id}`
            }
      
          >
            <div className="lg:w-[300px] border-[1px] border-gray-200  bg-white p-4 shadow text-sm">
              <img className="w-full h-[150px]" src={post.img} alt="" />
              <h1 className="text-justify my-2 font-semibold text-gray-800">
                {post.title.substring(0,40)}
              </h1>
              <p className="my-2 text-gray-600 text-justify">
                {post.desc.substring(0, 73)}..Read More
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p>No saved posts yet</p>
      )}
    </div>
  );
};

export default SavePost;
