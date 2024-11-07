import React, { useContext, useEffect, useState } from 'react';
import PostCard from './PostCard.jsx';
import axios from 'axios';
import Slider from '../components/Slider.jsx';
import { URL } from '../url.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../Utils/UserContext.jsx';
import About from '../components/About.jsx';
import Service from '../components/Service.jsx';
import Contact from '../components/Contact.jsx';
// import Navbar from '../components/Navbar.jsx';

const Home = () => {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const getposts = async () => {
    try {
      const resp = await axios.get(`${URL}/auth/api/post/hostData`);
      console.log("aaaaaaaaaa : "+resp.data);
      setposts(resp.data.data);
      // console.log("aaaaaaaaaaaa : "+resp.data.data);
    } catch (err) {
      setError(err.msg);
    } finally {
      setLoading(false);
    }
  }; 

  useEffect(() => {
    getposts();
  },[]);

  if (loading) {
    return <div className=' w-screen h-screen flex justify-center m-auto items-center'><div className='w-[80px] h-[80px] animate-spin border-4 rounded-full border-l-0 border-green-500 '></div></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='w-full'>
      <div className='flex lg:justify-center justify-between lg:px-0 px-4 items-center p-2 text-[#284525] lg:gap-20 gap-4 list-none shadow-sm border-[1px] border-t-gray-200 border-b-gray-200 overflow-scroll'>
      <Link to="/"><li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Home</li></Link>
        <a href='#post'><li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Post</li></a>
        <a href="#about"> <li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>About</li></a>
        <a href="#service"><li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Service</li></a>
       <a href="#contact"><li className='hover:text-green-800 lg:tracking-widest lg:uppercase'>Contact</li></a>
        
      </div>
      <div className=' lg:px-20 my-8 '>
        <Slider />
      </div>

      <div className=' w-full m-auto  flex justify-center items-center gap-10 px-4  overflow-scroll'>
        {
          [...Array(5)].map(() => (
            <div className='flex justify-center items-center flex-col hover:text-green-800 cursor-pointer mt-4'>
              <img
                className=' h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] rounded-full shadow-none mb-4 hover:scale-110 transition-all'
                src="https://krishnaayurved.com/cdn/shop/collections/Category_banner-01_720x.jpg?v=1662485951" alt="img" />
              <p>shop/collections</p>
            </div>
          ))
        }
      </div>

      <div id='post' className='lg:w-10/12 lg:p-0 px-4 m-auto justify-center items-center'>
        <h1 className='text-2xl font-semibold text-gray-600 py-4 mt-4'>Popular Topics </h1>
        <hr/>
        <div className='w-full flex flex-wrap lg:justify-start justify-center items-center m-auto gap-4 py-6'>
          {posts.slice(0, 4).map((post, index) => (
            <div key={post._id} className='lg:w-1/4'>
              <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
                <PostCard key={post._id} post={post} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <About/>

      <Service/>
      <Contact/>

    </div>
  );
};

export default Home;
