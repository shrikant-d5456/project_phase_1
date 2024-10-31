import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { URL } from '../url';
import { UserContext } from '../Context/UserContext';
import Comment from './Comment';
import Navbar from '../components/Navbar';
import { BsYoutube } from 'react-icons/bs';

const PostDetails = () => {

  const [post, setposts] = useState([]);
  const navigate = useNavigate();

  const userType = "admin";
  const { user } = useContext(UserContext)

  const postId = useParams()

  const getPost = async () => {
    try {
      const resp = await axios.get(URL + `/auth/post/${postId.id}`);
      console.log(resp.data.data)
      setposts(resp.data.data);
      console.log(user.id + "hello" + post.userId)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPost();
  }, [postId])

  const deletepost = async () => {
    try {
      const response = await axios.delete(URL + `/auth/post/${postId.id}`);
      // console.log(response.data);
      navigate('/');
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <div className='lg:w-10/12 lg:p-1 p-2 m-auto' >
        <div key={post._id} className='w-full bg-transparent text-black '>
          {
            userType === "admin" ?
              <div className='flex gap-4 justify-end my-4 mx-4'>
                {/* <Link to={`/post/editpost/${post._id}`}><button className='btn1'>Edit</button></Link> */}
                <button onClick={deletepost} className='btn1'>Delete</button>
              </div> : ""
          }
          <div className='w-full m-auto p-2'>

            <div><img className='w-full lg:h-[550px] h-[250px]' src={post.img} alt="loadimg" />
            </div>

            <div>
              <p className=' text-sm text-gray-800 font-extrabold bg-green-200 w-fit px-4 py-1 rounded-full my-4'>Provide by @{post.username}</p>
              <hr className='border-[1px] border-[#1aff00] mt-2' />
              <h1 className=' text-2xl font-bold text-gray-800 my-2'>{post.title}</h1>
              <hr className='border-[1px] border-[#1aff00]' />
              <div className='flex justify-start items-center gap-4 font-semibold  '>Tags :
                {post.categories?.map((d, i) => (
                  <p key={i} className='w-fit px-4 py-1 my-2 text-sm bg-green-100 rounded-full font-normal border-2 border-green-300'>{d}</p>
                ))}
              </div>
              <p className=' text-sm my-4 font-semibold'>Upload Date : <span className='font-light'>{(post.updatedAt)}</span></p>
              <p className=' text-sm text-gray-800 my-2 font-semibold'>Established Date : <span className='font-light'>{post.established}</span></p>
              <p className=' text-sm text-gray-800 my-4 font-semibold'>Place of Origine : <span className='font-light'>{(post.places)}</span></p>
              <p className=' text-sm text-gray-800 my-2 font-semibold'> Which Patient this medicine is harmful  : <span className='font-light'>{post.wpmh}</span></p>
              <p className=' text-sm my-4 font-semibold'>Vitamin : <span className='font-light bg-green-400 px-4 py-1 uppercase '>{(post.vitamin)}</span></p>

              <hr />
              <p className=' font-medium text-base text-gray-800 my-2'>{post.desc}</p>
              <hr />

              <div className='flex justify-start font-semibold my-2'>Ingredient              :
                <div>
                {post.ingredient?.map((d, i) => (
                    <p key={i} className='w-fit flex gap-4 justify-center items-center px-2 pb-2 text-sm font-normal'><input type="checkbox" />{d}</p>
                  ))}
                </div>
              </div>

              <div className='flex justify-start font-semibold my-2'>Steps           :
                <div>
                {post.step?.map((d, i) => (
                    <p key={i} className='w-fit flex gap-2 justify-center items-center px-2 pb-2 text-sm font-normal'> <span>{i+1} : </span> {d}</p>
                  ))}
                </div>
              </div>

            </div>
              <p className=' flex items-center text-sm text-gray-800 mt-4 font-semibold '>video link : <a href={post.video_link} className='flex w-fit justify-center items-center ml-2 gap-2 bg-red-500 px-4 py-1 rounded-full text-white'><BsYoutube/>See Video</a> </p>
          </div>

        </div>
        <hr className='border-[1px] border-[#1aff00] mt-2' />
        <Comment post={post} />
      </div>
    </>
  )
}

export default PostDetails
