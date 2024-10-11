import React, { useContext, useEffect, useState } from 'react';
import HomePost from '../components/HomePost';
import axios from 'axios';
import Slider from '../components/Slider.jsx';
import { URL } from '../url.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext.jsx';
import Navbar from './Navbar.jsx';

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
      <Navbar />

      <div className=' lg:px-20 px-4 my-8 rounded-2xl'>
        <Slider />
      </div>

      <div className=' w-full m-auto  flex justify-center items-center gap-10 px-4  overflow-scroll'>
        {
          [...Array(5)].map(()=>(
        <div className='flex justify-center items-center flex-col hover:text-green-800 cursor-pointer mt-4'>
          <img
            className=' h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full shadow-none mb-4 hover:scale-110 transition-all'
            src="https://krishnaayurved.com/cdn/shop/collections/Category_banner-01_720x.jpg?v=1662485951" alt="img" />
          <p>shop/collections</p>
        </div>
        ))
        }

      </div>

     <div className=' w-full'>

     <h1 className='text-2xl font-semibold text-gray-600 mt-20 mb-10 text-center'>Popular Topics </h1>
      

      <div className='w-full flex flex-wrap justify-center items-center m-auto gap-4 '>
        {posts.map((post) => (

          <div className='lg:w-1/4'>
            <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
              <HomePost key={post._id} post={post} />
            </Link>
          </div>
        ))}
      </div>

     </div>





    </div>

  );
};

export default Home;
