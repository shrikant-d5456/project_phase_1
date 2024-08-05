import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { URL } from '../url';
import { UserContext } from '../Context/UserContext';
import Comment from '../components/Comment';

const PostDetails = () => {

  const [post, setposts] = useState([]);
  const navigate = useNavigate();

  const { user } = useContext(UserContext)

  const postId = useParams()
  console.log(postId)

  const getPost = async () => {
    try {
      const resp = await axios.get(URL + `/auth/post/${postId.id}`);
      console.log(resp.data.data)
      setposts(resp.data.data);
      console.log(user.id+"hello"+post.userId)
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
      console.log(response);
      navigate('/');

    }
    catch (err) {
      console.log(err)
    }
  }



  return (
    <div className='lg:w-10/12 lg:p-1 p-2 m-auto' >
      <div key={post._id} className='w-full bg-transparent text-black pt-20'>
        {
          user.id === post.userId ?
            <div className='flex gap-4 justify-end my-4 mx-4'>
              <Link to={`/post/editpost/${post._id}`}><button className='btn1'>Edit</button></Link>
              <button onClick={deletepost} className='btn1'>Delete</button>
            </div> : ""
        }


        <div className='w-full m-auto p-2'>
          <div><img className='w-full lg:h-[550px] h-[250px]' src={post.img} alt="" /></div>
          <div>
            <h1 className=' text-2xl font-semibold text-gray-800 my-4'>{post.title}</h1>
            <span>
              <p className=' text-sm text-gray-400'>@{post.username}</p>
              <p  className=' text-sm my-4'>{post.updatedAt}</p>
            </span>
            <p className=' text-lg text-gray-600'>{post.desc}</p>
          </div>
          <div className='flex justify-start items-center gap-4 font-semibold'>Tags:
            {post.categories?.map((d, i) => (
              <p key={i} className='w-fit px-4 py-2 my-2 bg-sky-100 rounded-full font-normal'>{d}</p>
            ))}
          </div>
        </div>
      </div>


      <Comment post={post} />
    </div>

  )
}

export default PostDetails
