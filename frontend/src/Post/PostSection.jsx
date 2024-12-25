import React, { useContext, useEffect, useState } from 'react';
import PostCard from "./PostCard.jsx";
import axios from 'axios';
import { URL } from '../url.js';
import { UserContext } from '../Utils/UserContext.jsx';
import { BsSearch } from 'react-icons/bs';
import Magic from '../components/Magic.jsx';

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [tag, settag] = useState("All");
  const { user } = useContext(UserContext);
  const [magic, setMagic] = useState(false);
  const [input, setInput] = useState("");

  const getPosts = async () => {
    try {
      const resp = await axios.get(`${URL}/auth/api/post/hostData`);
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

  const tags = ['All', 'immunity', 'weight loss','cough',''];
  const ingredient = ['All', 'Turmeric', 'Neem', 'Triphala', 'Ala', 'Herbal Tea', 'Honey'];
  const places = ['All', 'india', 'mumbai'];

  return (
    <div className='sm:flex '>
      <div className='sm:w-64 w-full sm:h-screen flex-col sm:flex-row  p-4 bg-white'>

        <div className=' py-4 border-b-2 border-green flex'>
          <input
            type="text"
            placeholder="Search post .."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-[1px] text-sm border-gray-300 px-4 py-2  outline-none"
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
              tags.map((item) => (
                <button
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
              ingredient.map((item) => (
                <button
                  className={` text-sm font-semibold border-[1px] border-green rounded-full px-2 py-1 ${item === tag ? "bg-green text-white" : "text-green"}`}
                  onClick={() => onClickTag(item)}
                >{item}</button>
              ))
            }
          </div>
        </div>

        <div className=' py-4 border-b-2 border-green'>
          <p className=' font-semibold text-sm mb-2'>Filter By Places</p>
          <div className='flex flex-wrap gap-2 justify-start items-start m-auto'>
            {
              places.map((item) => (
                <button
                  className={` text-sm font-semibold border-[1px] border-green rounded-full px-2 py-1 ${item === tag ? "bg-green text-white" : "text-green"}`}
                  onClick={() => onClickTag(item)}
                >{item}</button>
              ))
            }
          </div>
        </div>

      </div>

      <div className='w-full sm:w-11/12 grid md:grid-cols-4 grid-cols-2 gap-2 justify-start  items-start px-4'>
      {magic && <Magic/>}
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