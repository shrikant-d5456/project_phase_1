import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Utils/UserContext.jsx';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {

  const { user } = useContext(UserContext);
  // console.log(user);

  let userType;

  if(user?.username === "admin"){
    userType="admin";
  }
  else{
    userType="";
  }


  const updatedAtDate = new Date(post.updatedAt);
  
  // const hostPost = async () => {
  //   try {
  //     const resp = await axios.post(`https://project-phase-1-tpyd.onrender.com/auth/api/post/admin/postData/${post._id}`);
  //     console.log(resp.msg);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div key={post._id} className='w-full overflow-hidden'>
        {userType === "admin" ?
          <button className='absolute m-4 cursor-auto bg-green-500 px-4 py-1 text-white font-semibold'
          >{(post.validator1 && post.validator2 && post.validator3 && post.validator4 && post.validator5)? "uploaded":"uploading.."}</button>
          : ""}
        <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}> 
          <div className='w-full m-auto bg-white p-4 border-[1px] border-gray-200 rounded-md'>
            <div>
              <img className='w-full h-[150px]' src={post.img} alt="" />
            </div>

            <div>
              <h1 className='font-medium my-1 line-clamp-1'>{post.title}..</h1>
              <span>
                <p className=' text-xs text-gray-400 my-1'>@{post.username}</p>
                
                <p className=' text-[10px] text-gray-00 my-1'>{(updatedAtDate).toLocaleString()}</p>
              </span>
              <p className=' text-xs text-gray-500 my-1 line-clamp-2'>{post.desc}..<span className=' text-blue-400'>Read More</span></p>
            </div>


          </div>
        </Link>

      </div>
    </>
  )
}

export default PostCard
