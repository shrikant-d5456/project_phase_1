import React, { useContext, useEffect } from 'react'
<<<<<<< HEAD:frontend/src/pages/PostCard.jsx
import { UserContext } from '../Context/UserContext.jsx';
import { Link } from 'react-router-dom';

const Hearder = ({ post }) => {
=======
import { UserContext } from '../Utils/UserContext.jsx';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0:frontend/src/Post/PostCard.jsx

  const { user } = useContext(UserContext);
  // console.log(user);

  let userType;

  if(user?.username === "admin"){
    userType="admin";
  }
  else{
    userType="";
  }


<<<<<<< HEAD:frontend/src/pages/PostCard.jsx
=======
  const updatedAtDate = new Date(post.updatedAt);
  
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0:frontend/src/Post/PostCard.jsx
  // const hostPost = async () => {
  //   try {
  //     const resp = await axios.post(`${URL}/auth/api/post/admin/postData/${post._id}`);
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
<<<<<<< HEAD:frontend/src/pages/PostCard.jsx
              <img className='w-full h-[200px]' src={post.img} alt="" />
            </div>

            {userType === "admin" ?
              <div className='flex justify-end gap-[1px] mt-2'>
                {post.validator1 === true ? <div className='bg-green-600 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-600 rounded-sm w-6 h-2 my-[1px]' />}
                {post.validator2 === true ? <div className='bg-green-600 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-600 rounded-sm w-6 h-2 my-[1px]' />}
                {post.validator3 === true ? <div className='bg-green-600 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-600 rounded-sm w-6 h-2 my-[1px]' />}
                {post.validator4 === true ? <div className='bg-green-600 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-600 rounded-sm w-6 h-2 my-[1px]' />}
                {post.validator5 === true ? <div className='bg-green-600 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-600 rounded-sm w-6 h-2 my-[1px]' />}
              </div> : ""}
            {userType === "admin" ?
              <div className='flex justify-end gap-[1px]'>
                {post.checked1 === true ? <div className='bg-yellow-400 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-500 rounded-sm w-6 h-2 my-[1px]' />}
                {post.checked2 === true ? <div className='bg-yellow-400 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-500 rounded-sm w-6 h-2 my-[1px]' />}
                {post.checked3 === true ? <div className='bg-yellow-400 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-500 rounded-sm w-6 h-2 my-[1px]' />}
                {post.checked4 === true ? <div className='bg-yellow-400 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-500 rounded-sm w-6 h-2 my-[1px]' />}
                {post.checked5 === true ? <div className='bg-yellow-400 rounded-sm w-6 h-2 my-[1px]' /> : <div className='bg-red-500 rounded-sm w-6 h-2 my-[1px]' />}
              </div> : ""}

            <div>
              <h1 className='font-medium my-1'>{post.title}</h1>
              <span>
                <p className=' text-sm text-gray-400 my-1'>@{post.username}</p>
                <p className=' text-sm text-gray-00 my-1'>{post.updatedAt}</p>
              </span>
              <p className=' text-sm text-gray-400 my-1'>{post.desc.substring(0, 95)}..<span className=' text-blue-400'>Read More</span></p>
=======
              <img className='w-full h-[150px]' src={post.img} alt="" />
            </div>

            <div>
              <h1 className='font-medium my-1'>{post.title.substring(0, 30)}..</h1>
              <span>
                <p className=' text-sm text-gray-400 my-1'>@{post.username}</p>
                
                <p className=' text-[10px] text-gray-00 my-1'>{(updatedAtDate).toLocaleString()}</p>
              </span>
              <p className=' text-sm text-gray-400 my-1'>{post.desc.substring(0,35 )}..<span className=' text-blue-400'>Read More</span></p>
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0:frontend/src/Post/PostCard.jsx
            </div>


          </div>
        </Link>

      </div>
    </>
  )
}

<<<<<<< HEAD:frontend/src/pages/PostCard.jsx
export default Hearder
=======
export default PostCard
>>>>>>> 7b0c85063715e2ce6a98b30ded675395b737bff0:frontend/src/Post/PostCard.jsx
