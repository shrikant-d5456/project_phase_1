import React, { useContext, useEffect, useState } from 'react';
import HomePost from '../components/HomePost';
import axios from 'axios';
import Slider from '../components/Slider.jsx';
import { URL } from '../url.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext.jsx';

const Home = () => {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext)

  const getposts = async () => {
    try {
      const resp = await axios.get(`${URL}/auth/post`);
      setposts(resp.data.data);


    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getposts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='w-full'>
      <Slider />
      <h1 className='text-2xl font-semibold text-gray-600 my-4 lg:mx-52 mx-4 '>Popular Topics </h1>
        <hr />
      <div className='w-10/12 flex flex-wrap justify-center items-center m-auto gap-8'>  
        {posts.map((post) => (
          
          <div className='lg:w-1/3'>
          <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
            <HomePost key={post._id} post={post} />
          </Link>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Home;
