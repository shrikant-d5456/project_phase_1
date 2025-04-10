import React, { useContext, useEffect, useState } from 'react';
import PostCard from "./PostCard.jsx";
import axios from 'axios';
import { URL } from '../url.js';
import { UserContext } from '../Utils/UserContext.jsx';
import { BsSearch } from 'react-icons/bs';
import Magic from '../components/Magic.jsx';
import Select from '../components/Select.jsx';
import { useParams } from 'react-router-dom';

const PostSection = ({ send }) => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [tag, settag] = useState(send || 'All');
  const [magic, setMagic] = useState(false);
  const [input, setInput] = useState("");
  const params  = useParams();


  const tags = ['All', 'skin', 'cough', 'diabetes', 'hair',  'immunity'];
  const ingredient = ['All', 'Turmeric', 'Neem', 'Triphala', 'Ala',  'Honey'];
  // const places = ['All', 'maharashtra', 'tamilnadu', 'rajasthan','gujrat','odisha','Himachal pradesh','manipur'];

  const getPosts = async () => {
    try {
      const resp = await axios.get(`https://project-phase-1-tpyd.onrender.com/auth/api/post/hostData`);
      setPosts(resp.data.data);
      setFilters(resp.data.data); // Initialize filters with fetched posts
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
   
  }, []);

  const onClickTag = (ele) => {
    settag(ele);
    if (ele === "All") {
      setFilters(posts);
    } else {
      const filteredPosts = posts.filter(
        (item) =>
          item.title.toLowerCase() === ele.toLowerCase() ||
          item.ingredient.some(ingredient => ingredient.toLowerCase() === ele.toLowerCase()) ||
          item.desc.toLowerCase() === ele.toLowerCase() ||
          item.categories.some(category => category.toLowerCase() === ele.toLowerCase()) 
      );
      setFilters(filteredPosts);
    };
  }

  const handleSearch = () => {
    const filteredPosts = posts.filter(
      (item) =>
        item.title.toLowerCase() === input.toLowerCase() ||
        item.ingredient.some(ingredient => ingredient.toLowerCase() === input.toLowerCase()) ||
        item.desc.toLowerCase() === input.toLowerCase() ||
        item.categories.some(category => category.toLowerCase() === input.toLowerCase())
    );
    setFilters(filteredPosts);

    setTimeout(() => {
      setMagic(false);
    }, 2000);
    setMagic(true);
  }; 



  return (
    <div className='sm:flex '>
      <div className='sm:w-64 w-full sm:h-screen flex-col sm:flex-row  p-4 bg-white'>

        <div className=' py-4 border-b-2 border-green flex'>
          <Select
            options={tags}
            className="border-[1px] text-sm border-gray-300 px-4 py-2  outline-none"
            placeholder="Search by tags.."
            inp={input}
            setInp={setInput}
            width={200} //width length 100 200 250 300 400
          />
          <button
            onClick={handleSearch}
            className="bg-green text-white p-2  "
          >
            <BsSearch />
          </button>
        </div>

        <div className=' py-4 border-b-2 border-green'>
          <p className=' font-semibold text-sm mb-2'>Filter By Tags</p>
          <div className='flex flex-wrap gap-2 justify-start items-start m-auto'>
            {
              tags.map((item, ind) => (
                <button
                  key={ind}
                  className={` text-sm font-semibold border-[1px] border-green rounded-full px-2 py-1 ${item === tag ? "bg-green text-white" : "text-green"}`}
                  onClick={() => onClickTag(item)}
                >{item}</button>
              ))
            }
          </div>
        </div>

        <div className=' py-4 border-b-2 border-green'>
          <p className=' font-semibold text-sm mb-2'>Filter By Ingredient</p>
          <div className='flex flex-wrap gap-2 justify-start items-start m-auto'>
            {
              ingredient.map((item, ind) => (
                <button
                  key={ind}
                  className={` text-sm font-semibold border-[1px] border-green rounded-full px-2 py-1 ${item === tag ? "bg-green text-white" : "text-green"}`}
                  onClick={() => onClickTag(item)}
                >{item}</button>
              ))
            }
          </div>
        </div>

        

      </div>

      <div className='w-full sm:w-11/12 grid md:grid-cols-4 grid-cols-2 gap-2 justify-start  items-start px-4'>
        {magic && <Magic />}
        {filters.map((post, index) => (
          <div key={index} >
            <PostCard key={post._id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostSection;