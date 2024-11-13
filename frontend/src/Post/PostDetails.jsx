import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from '../url';
import { UserContext } from '../Utils/UserContext';
import Comment from './Comment';
import { BsYoutube } from 'react-icons/bs';
import AdminIDs from "../AdminIDs";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const [valid, setValid] = useState(false);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const postId = useParams();

  const getPost = async () => {
    try {
      const resp = await axios.get(`${URL}/auth/post/${postId.id}`);
      setPost(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  useEffect(() => {
    if (post) {
      setValid(post.validator1 || false);
      setCheck(post.checked1 || false);
    }
  }, [post]);

  const deletePost = async () => {
    try {
      await axios.delete(`${URL}/auth/post/${postId.id}`);
      navigate('/admin/');
    } catch (err) {
      console.log(err);
    }
  };

  const validateBy1 = async (isValid) => {
    try {
      await axios.put(`${URL}/auth/api/post/admin1/${postId.id}`, {
        validator1: isValid ? "true" : "false",
      });
      setValid(isValid);
    } catch (err) {
      console.log(err);
    }
  };

  const checkedBy1 = async (checkStatus) => {
    try {
      await axios.put(`${URL}/auth/api/post/admin1/${postId.id}`, {
        checked1: checkStatus ? "true" : "false",
      });
      setCheck(checkStatus);
      alert("Thank you for validation");
      navigate('/admin/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='lg:w-10/12 lg:p-1 p-2 m-auto'>
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
            <p className='text-sm font-extrabold bg-green text-white w-fit px-4 py-1 rounded-full my-4'>Provided by @{post.username}</p>
            <h1 className='text-2xl font-bold text-gray-800 my-2'>{post.title}</h1>
            <div className='flex justify-start items-center gap-4 font-semibold'>Tags:
              {post.categories?.map((d, i) => (
                <p key={i} className='w-fit px-4 py-1 my-2 text-sm rounded-full font-semibold border-2 bg-green text-white'>{d}</p>
              ))}
            </div>
            <p className='text-sm my-4 font-semibold'>Upload Date: <span className='font-light'>{post.updatedAt}</span></p>
            <p className='text-sm text-gray-800 my-2 font-semibold'>Place of Origin: <span className='font-light'>{post.places}</span></p>
            <p className='text-sm text-gray-800 my-2 font-semibold'>Harmful for: <span className='font-light'>{post.wpmh}</span></p>

            <hr />
            <p className='font-medium text-base text-gray-800 my-2'>{post.desc}</p>
            <hr />

            <div className='flex justify-start font-semibold my-2'>Ingredients:
              <div>
                {post.ingredient?.map((d, i) => (
                  <p key={i} className='w-fit flex gap-4 justify-center items-center px-2 pb-2 text-sm font-normal'>
                    <input type="checkbox" />{d}
                  </p>
                ))}
              </div>
            </div>

            <div className='flex justify-start font-semibold my-2'>Steps:
              <div>
                {post.step?.map((d, i) => (
                  <>
                    <p key={i} className='w-fit flex gap-2 justify-start items-center px-2 pb-2 text-sm font-normal text-justify'>
                      <span className='bg-green w-fit text-white font-semibold p-2 rounded-full'>{i + 1}</span> {d}
                    </p>
                    <hr className='border-[1px] my-2 border-green' />
                  </>
                ))}
              </div>
            </div>

            <p className='flex items-center text-sm text-gray-800 mt-4 font-semibold'>Video link:
              <a target='_blank' rel="noopener noreferrer" href={post.video_link} className='flex w-fit justify-center items-center ml-2 gap-2 bg-red-500 px-4 py-1 rounded-full text-white'>
                <BsYoutube /> See Video
              </a>
            </p>
          </div>

          {
            user.id === AdminIDs[1].id && 
            <div className='w-full p-4 border-2 lg:flex flex-row my-4 bg-black text-white gap-2'>
            <div className='md:w-2/3 w-full bg-black text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis quia adipisci expedita cumque obcaecati eligendi quibusdam aut necessitatibus architecto.
            </div>
            <div className='md:w-1/3 w-full flex flex-col justify-center items-center gap-2 bg-black text-white'>
              <div className='flex justify-center items-center gap-2 w-full'>
                <button
                  onClick={() => validateBy1(true)}
                  className={`${valid ? "bg-green-700 border-2 border-white m-1" : "bg-green-300"} rounded-full px-4 py-1 font-semibold text-white w-full`}
                >
                  {valid ? "Yes! ✓" : "Yes"}
                </button>
                <button
                  onClick={() => validateBy1(false)}
                  className={`${valid ? "bg-red-400" : "bg-red-700 border-2 border-white m-1"} rounded-full px-4 py-1 font-semibold text-white w-full`}
                >
                  {valid ? "No" : "No ✓"}
                </button>
              </div>

              <button
                onClick={() => checkedBy1(!check)}
                className={`${check ? "bg-yellow-700 border-2 border-white" : "bg-yellow-400"} rounded-full px-4 py-1 font-semibold text-white w-full`}
              >
                {check ? "Checked! ✓" : "Check & Close"}
              </button>
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
