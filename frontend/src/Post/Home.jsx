import React, { useContext, useEffect, useState } from 'react';
import PostCard from './PostCard.jsx';
import axios from 'axios';
import Slider from '../components/Slider.jsx';
import { Link } from 'react-router-dom';
import { UserContext } from '../Utils/UserContext.jsx';
import Service from '../pages/Service.jsx';
import Experts from '../pages/Experts.jsx';
import DiscoverAayurveda from '../pages/DiscoverAayurveda.jsx';
import PlayStoreApp from '../pages/PlayStoreApp.jsx';
import AyurvedaPage from '../pages/AyurvedaPage.jsx';


const Home = () => {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const getposts = async () => {
    try {
      const resp = await axios.get(`http://localhost:8000/auth/api/post/hostData`);
      setposts(resp.data.data);
    } catch (err) {
      setError(err.msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getposts();
  }, []);

  if (loading) {
    return <div className=' w-screen h-screen flex justify-center m-auto items-center'><div className='w-[80px] h-[80px] animate-spin border-4 rounded-full border-l-0 border-green-500 '></div></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const array = [
    {
      img: "https://krishnaayurved.com/cdn/shop/collections/Category_banner-05_720x.jpg?v=1661885544",
      data: "skin"
    },
    {
      img: "https://th.bing.com/th/id/OIP.gc2-7BZLD26q_AfqHv5nEAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      data: "cough"
    },
    {
      img: "https://th.bing.com/th/id/OIP.1pkpHr3YhGV_cg5z8qLs9gHaF7?w=213&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      data: "fever "
    },
    {
      img: "https://krishnaayurved.com/cdn/shop/collections/Category_banner-04_720x.jpg?v=1622649044",
      data: "diabetes"
    },
    {
      img: "https://th.bing.com/th/id/OIP.g5YKFyJEATTRznzMy2ePjAHaEK?pid=ImgDet&w=184&h=103&c=7&dpr=1.3",
      data: "hair"
    },
    {
      img: "https://th.bing.com/th/id/OIP.O6JTVqCZTJcfoMZ7hxyk-gHaG0?pid=ImgDet&w=184&h=169&c=7&dpr=1.3",
      data: "diet"
    },
    {
      img: "https://th.bing.com/th/id/OIP.MSymyyfWMPd684YKtqL2DAHaFh?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      data: "immunity-wellness"
    },
    {
      img: "https://th.bing.com/th/id/OIP.UmOeNQHori0DJrQLDdB2pgHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      data: "pain-reliever"
    },
    {
      img: "https://th.bing.com/th/id/OIP.OSYk3IFC-C2FO9QZjF3bHwHaLH?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      data: "juices"
    },


  ]

  return (
    <div className='w-full'>
      <div className=' w-full bg-white flex lg:justify-center justify-between lg:px-0 px-4 items-center py-4 text-[#284525] lg:gap-20 gap-10 list-none border-[1px] border-t-gray-200 border-b-gray-200 overflow-x-scroll  shadow-md'>
        <Link to="/"><li className='hover:text-green lg:tracking-widest lg:uppercase w-full'>Home</li></Link>
        <a href='#post'><li className='hover:text-green lg:tracking-widest lg:uppercase w-full'>Post</li></a>
        <Link to='/plant-informaion'> <li className='hover:text-green lg:tracking-widest lg:uppercase w-full whitespace-nowrap'>Plant Information</li></Link>
        <Link to="/practitioner"><li className='hover:text-green lg:tracking-widest lg:uppercase w-full'>Practioner's</li></Link>
        <Link to="/diseases"><li className='hover:text-green lg:tracking-widest lg:uppercase w-full'>Diseases</li></Link>
        <Link to="/allergies"><li className='hover:text-green lg:tracking-widest lg:uppercase w-full'>Allergies</li></Link>
        <a href="#service"><li className='hover:text-green lg:tracking-widest lg:uppercase w-full'>Service</li></a>

      </div>
      <div className=' lg:px-14 my-8 '>
        <Slider />
      </div>

      {/* <div className=' bg-white md:w-11/12 w-full m-auto my-4 flex gap-10 p-2 overflow-x-scroll sm:rounded-full'>
        {
          array.map((item, ind) => (
            <Link key={ind} to={user ? `/${item.data}` : "/login"}>
              <div className=' ml-10 mr-2  w-full flex justify-center items-center flex-col hover:text-green cursor-pointer mt-4'>
                <img
                  className=' h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] md:h-[100px] md:w-[100px] rounded-full shadow-none mb-4 hover:scale-110 hover:shadow-xl transition-all object-cover'
                  src={item.img} alt="img" />
                <p className=' text-sm text-center'>{item.data}</p>
              </div>
            </Link>
          ))
        }
      </div> */}

      <div id='post' className='lg:w-10/12 lg:p-0 px-4 m-auto justify-center items-center'>
        <h1 className='text-2xl font-semibold text-gray-600 py-4 mt-4'>Releases Topics </h1>
        <hr />
        <div className='w-full flex flex-wrap lg:justify-start justify-center items-center m-auto py-6'>
          {posts.slice(0, 4).map((post, index) => (
            <div key={post._id} className='lg:w-1/4'>
              <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
                <PostCard key={post._id} post={post} />
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Link to={user ? "/post" : "/login"}>
            <button className='flex float-right bg-green px-4 py-1 text-white'>See More ⫸</button>
          </Link>
        </div>
      </div>
      <DiscoverAayurveda />
    <AyurvedaPage/>
      <Service />
      <Experts />
      <PlayStoreApp />
    </div>
  );
};

export default Home;
