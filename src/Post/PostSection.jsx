import React, { useContext, useEffect, useState } from 'react';
import PostCard from "./PostCard.jsx";
import axios from 'axios';
 
import { UserContext } from '../Utils/UserContext.jsx';
import { BsSearch } from 'react-icons/bs';
import Magic from '../components/Magic.jsx';
import Select from '../components/Select.jsx';

const PostSection = ({ send }) => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [aiResp, setAiResp] = useState("");
  const [tag, settag] = useState(send || 'All');
  const [magic, setMagic] = useState(false);
  const [input, setInput] = useState(send || "");

  const tags = ['skin', 'cough', 'fever', 'diabetes', 'hair', 'diet', 'immunity', 'pain', 'juices'];
  const ingredient = ['Turmeric', 'Neem', 'Triphala', 'Ala', 'Herbal Tea', 'Honey'];
  const places = ['india', 'mumbai'];

  const getPosts = async () => {
    try {
      const resp = await axios.get(`${ import.meta.env.VITE__BACKEND_URL}/auth/api/post/hostData`);
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
    setInput(ele);
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
    handleSearch();
  }

  const handleSearch = async () => {
    setAiResp("Loading ..");
    try {
      const airesp = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDqRzss9cWQrNuYPaY5bwLqjsieloDj-QE",
        method: 'post',
        data: {
          "contents": [{
            "parts": [{ "text": (`give me all information about ${input}`) }]
          }]
        }
      });
      setAiResp(airesp.data.candidates[0].content.parts[0].text);
      console.log(airesp);
    }
    catch (e) {
      console.log(e)
    }

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

  const formatAiResponse = (text) => {
    return (
      <div>
        {text.split("\n").map((line, index) => (
          <>
          <p key={index} className=' tracking-wide'>
            {line.split("**").map((part, i) => (
              i % 2 === 1 ? <strong key={i} >{part}</strong> : part
            ))}
            <br />
          </p>
        
          </>
        ))}
      </div>
    );
  };

  return (
    <div className='sm:flex '>
      <div className='sm:w-64 w-full sm:h-screen flex-col sm:flex-row p-4 bg-white'>
        <div className='py-4 border-b-2 border-green flex'>
          <Select
            options={tags}
            className="border-[1px] text-sm border-gray-300 px-4 py-2 outline-none"
            placeholder="Search by tags.."
            inp={input}
            setInp={setInput}
            width={200} //width length 100 200 250 300 400
          />
          <button
            onClick={handleSearch}
            className="bg-green text-white p-2"
          >
            <BsSearch />
          </button>
        </div>

        <div className='py-4 border-b-2 border-green'>
          <p className='font-semibold text-sm mb-2'>Filter By Tags</p>
          <div className='flex flex-wrap gap-2 justify-start items-start m-auto'>
            {tags.map((item, ind) => (
              <button
                key={ind}
                className={`text-sm font-semibold border-[1px] border-green rounded-full px-2 py-1 ${item === tag ? "bg-green text-white" : "text-green"}`}
                onClick={() => onClickTag(item)}
              >{item}</button>
            ))}
          </div>
        </div>

        <div className='py-4 border-b-2 border-green'>
          <p className='font-semibold text-sm mb-2'>Filter By Ingredient</p>
          <div className='flex flex-wrap gap-2 justify-start items-start m-auto'>
            {ingredient.map((item, ind) => (
              <button
                key={ind}
                className={`text-sm font-semibold border-[1px] border-green rounded-full px-2 py-1 ${item === tag ? "bg-green text-white" : "text-green"}`}
                onClick={() => onClickTag(item)}
              >{item}</button>
            ))}
          </div>
        </div>

        <div className='py-4 border-b-2 border-green'>
          <p className='font-semibold text-sm mb-2'>Filter By Places</p>
          <div className='flex flex-wrap gap-2 justify-start items-start m-auto'>
            {places.map((item, ind) => (
              <button
                key={ind}
                className={`text-sm font-semibold border-[1px] border-green rounded-full px-2 py-1 ${item === tag ? "bg-green text-white" : "text-green"}`}
                onClick={() => onClickTag(item)}
              >{item}</button>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full h-screen flex-col sm:w-11/12 px-4 overflow-scroll'>
        <div className='w-full grid md:grid-cols-4 grid-cols-2 gap-2 justify-start items-start'>
          {magic && <Magic />}
          {filters.map((post, index) => (
            <div key={index}>
              <PostCard key={post._id} post={post} />
            </div>
          ))}
        </div>

        {aiResp !== "" && (
          <div className='w-full max-h-fit bg-white my-2 font-sans p-4 text-wrap'>
            <p className=' font-bold font-mono'>"{input}"</p><br />
            {formatAiResponse(aiResp)}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostSection;
