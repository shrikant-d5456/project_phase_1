import React from 'react'

const Hearder = ({ post }) => {

  let str = "Hello, World!";
  let trimmedStr = str.substring(0, 5); // "Hello"
  console.log(trimmedStr); // Output: "Hello"

  return (

    <div key={post._id} className='w-full'>
      <div className='w-full m-auto bg-white p-2'>
        <div><img className='w-full h-[200px]' src={post.img} alt="" /></div>
        <div>
          <h1 className='font-medium my-1'>{post.title}</h1>
        <span>
          <p  className=' text-sm text-gray-400 my-1'>@{post.username}</p>
          <p className=' text-sm text-gray-00 my-1'>{post.updatedAt}</p>
        </span>
        <p  className=' text-sm text-gray-400 my-1'>{post.desc.substring(0,95)}..<span className=' text-blue-400'>Read More</span></p>
        </div>
        
        
      </div>
      
    </div>


  )
}

export default Hearder
