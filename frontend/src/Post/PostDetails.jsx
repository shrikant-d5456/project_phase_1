import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from '../url.js';
import { UserContext } from '../Utils/UserContext.jsx';
import Comment from './Comment.jsx';
import { BsBookmarkHeart, BsBookmarkHeartFill, BsHeart, BsYoutube } from 'react-icons/bs';
import AdminIDs from "../Utils/AdminIDs.jsx";
import Lang from '../components/Lang.jsx';
import Email from '../components/Email.jsx';

const PostDetails = () => {
  const [post, setPost] = useState({});
  const [valid, setValid] = useState(false);
  const [check, setCheck] = useState(false);
  const [admin, setAdmin] = useState("");
  const [validator, setValidator] = useState("");
  const [checked, setChecked] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const postId = useParams();

  const [save, setSave] = useState(false);

  const getPost = async () => {
    try {
      const resp = await axios.get(`https://project-phase-1-woku.onrender.com/auth/post/${postId.id}`);
      setPost(resp.data.data);
      console.table(post);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
    if (post && user.id === AdminIDs[1].id) {
      setValid(post.validator1 || false);
      setCheck(post.checked1 || false);
      setAdmin("admin1");
      setValidator("validator1");
      setChecked("checked1");
    }
    if (post && user.id === AdminIDs[2].id) {
      setValid(post.validator2 || false);
      setCheck(post.checked2 || false);
      setAdmin("admin2");
      setValidator("validator2");
      setChecked("checked2");
    }
    if (post && user.id === AdminIDs[3].id) {
      setValid(post.validator3 || false);
      setCheck(post.checked3 || false);
      setAdmin("admin3");
      setValidator("validator3");
      setChecked("checked3");
    }
    if (post && user.id === AdminIDs[4].id) {
      setValid(post.validator4 || false);
      setCheck(post.checked4 || false);
      setAdmin("admin4");
      setValidator("validator4");
      setChecked("checked4");
    }
    if (post && user.id === AdminIDs[5].id) {
      setValid(post.validator5 || false);
      setCheck(post.checked5 || false);
      setAdmin("admin5");
      setValidator("validator5");
      setChecked("checked5");
    }
  },[post._id]);



  const deletePost = async () => {
    const ans = confirm("are you shure delete this post");
    if(ans){
      try {
        await axios.delete(`https://project-phase-1-woku.onrender.com/auth/post/${postId.id}`);
        alert("you delete this post succesfully")
        navigate('/admin/');
      } catch (err) {
        console.log(err);
      }
    }
  };

  const validateBy = async (isValid) => {
    try {
      await axios.put(`https://project-phase-1-woku.onrender.com/auth/api/post/${admin}/${postId.id}`, {
        [`${validator}`]: isValid ? "true" : "false",
      });
      setValid(isValid);
    } catch (err) {
      console.log(err);
    }
  };

  const checkedBy = async (checkStatus) => {
    try {
      await axios.put(`https://project-phase-1-woku.onrender.com/auth/api/post/${admin}/${postId.id}`, {
        [`${checked}`]: checkStatus ? "true" : "false",
      });
      setCheck(checkStatus);
      alert("Thank you for validation");
      navigate('/admin/');
    } catch (err) {
      console.log(err);
    }
  };

  let validation_length=0;
  validation_length = (post.validator1 && 1) + post.validator2 + post.validator3 + post.validator4 + post.validator5;
console.log(validation_length);

  const [targetLang, setTargetLang] = useState('en');

  return (
    <>
      <div className='lg:w-10/12 lg:p-4 p-2  m-auto bg-white '>
        <div key={post._id} className='w-full bg-transparent text-black '>

          {user?.id === AdminIDs[0]?.id &&
            <div className='flex justify-between items-center'>
              <div>
                <div className='flex justify-end gap-[1px] m-2'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className={`${post[`validator${index + 1}`] ? 'bg-green' : 'bg-red-600'} rounded-sm w-6 h-2 my-[1px]`}
                    />
                  ))}
                </div>
                <div className='flex justify-end gap-[1px]'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className={`${post[`checked${index + 1}`] ? 'bg-yellow-400' : 'bg-red-500'} rounded-sm w-6 h-2 my-[1px]`}
                    />
                  ))}
                </div>
              </div>
              <div className='flex gap-4 justify-end my-4 mx-4'>
                <button onClick={deletePost} className='bg-red-500 px-4 py-2 text-white font-semibold'>Delete</button>
              </div>
            </div>
          }

          <div className='w-full m-auto p-2'>
            <div><img className='w-full lg:h-[550px] h-[250px]' src={post.img} alt="Post" /></div>

            <div className='flex justify-end text-3xl font-bold my-2 mr-4'>
              {save ? <button onClick={() => setSave(!save)} className=' text-red-500' >
                <BsBookmarkHeartFill />
              </button>
                :
                <button onClick={() => setSave(!save)}>
                  <BsBookmarkHeart />
                </button>
              }

            </div>
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="border p-2  outline-none rounded-md float-end"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="mr">Marathi</option>
            </select>
            <p className='text-sm font-extrabold bg-green text-white w-fit px-4 py-1 rounded-full my-4'>Published by @{post.username}</p>


            <h1 className="text-2xl font-bold text-gray-800 my-2">
              <Lang translateWord={post.title} targetLang={targetLang} />
            </h1>
            <div className='flex flex-wrap justify-start items-center gap-4 font-semibold'>Tags:
              {post.categories?.map((d, i) => (
                <p key={i} className='w-fit px-4 py-1 text-sm rounded-full font-semibold border-2 bg-green text-white text-nowrap'> <Lang translateWord={d} targetLang={targetLang} /> </p>
              ))}
            </div>
            <p className='text-sm my-4 font-semibold'>Upload Date : <span className='font-light'>{post.updatedAt}</span></p>
            <p className='text-sm text-gray-800 my-2 font-semibold'>Place of Origin : <span className='font-light'> <Lang translateWord={post.places} targetLang={targetLang} /> </span></p>
            <p className='text-sm text-gray-800 my-2 font-semibold'>Harmful for : <span className=' text-red-800 font-semibold'><Lang translateWord={post.wpmh} targetLang={targetLang} /></span></p>

            <hr />
            <p className='font-medium text-base text-gray-800 my-4 text-justify '><Lang translateWord={post.desc} targetLang={targetLang} /></p>
            <hr />

            <div className='flex justify-start font-semibold my-2'>Ingredients :
              <div>
                {post.ingredient?.map((d, i) => (
                  <p key={i} className='w-fit flex gap-4 justify-center items-center px-2 pb-2 text-sm font-normal'>
                    <input type="checkbox" /><Lang translateWord={d} targetLang={targetLang} />
                  </p>
                ))}
              </div>
            </div>

            <div className='flex justify-start font-semibold my-2'>Steps:
              <br />
              <div >
                {post.step?.map((d, i) => (
                  <>
                    <p key={i} className='w-fit flex gap-2 justify-start items-start px-2 pb-2 text-sm font-normal text-justify'>
                      <span className='bg-green text-sm text-white font-semibold lg:w-10 lg:h-10  rounded-full flex justify-center items-center'>{i + 1}</span>
                      <Lang translateWord={d} targetLang={targetLang} />
                    </p>
                    <hr className='border-[1px] my-2 border-green' />
                  </>
                ))}
              </div>
            </div>

            {
              post?.video_link &&
              <p className='flex items-center text-sm text-gray-800 mt-4 font-semibold'>Video link:
                <a target='_blank' rel="noopener noreferrer" href={post?.video_link} className='flex w-fit justify-center items-center ml-2 gap-2 bg-red-500 px-4 py-1 rounded-full text-white'>
                  <BsYoutube /> See Video
                </a>
              </p>
            }
          </div>

          {
            (user.id === AdminIDs[1].id || user.id === AdminIDs[2].id || user.id === AdminIDs[3].id
              || user.id === AdminIDs[4].id || user.id === AdminIDs[5].id
            )
            &&
            <div className='w-full p-4 border-2 lg:flex flex-row my-4 bg-[#275b21] text-white gap-2'>
              <div className=' w-full'>
              
              <div className=' w-full flex flex-col justify-center items-center gap-2  text-white'>
              <Email username={post.username} userEmail={post.email} validation_length={validation_length}/>

              <div className=' w-full  text-white'>
                Once you pick a choice from these options, you will still be able to change it later on!
              </div>
                <div className='flex justify-center items-center gap-2 w-full'>
                  <button
                    onClick={() => validateBy(true)}
                    className={`${valid ? "bg-green-700 border-2 border-white m-1" : "bg-green-500"} hover:bg-green-700 rounded-full px-4 py-1 font-semibold text-white w-full`}
                  >
                    {valid ? "Yes! ✓" : "Yes"}
                  </button>
                  <button
                    onClick={() => validateBy(false)}
                    className={`${valid ? "bg-red-500" : "bg-red-700 border-2 border-white m-1"} hover:bg-red-700 rounded-full px-4 py-1 font-semibold text-white w-full`}
                  >
                    {valid ? "No" : "No ✓"}
                  </button>
                </div>

                <button
                  onClick={() => checkedBy(!check)}
                  className={`${check ? "bg-yellow-700 border-2 border-white" : "bg-yellow-500"} hover:bg-yellow-700 rounded-full px-4 py-1 font-semibold text-white w-full`}
                >
                  {check ? "Checked! ✓" : "Check & Close"}
                </button>
              </div>
              </div>
              
            </div>
            
          }

        </div>
        <hr className='border-[1px] border-green mt-2' />
        <Comment post={post} />
      </div>
    </>
  );
};

export default PostDetails;
