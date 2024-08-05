import axios from 'axios';
import React, { useContext, useState } from 'react';
import { URL } from '../url';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';

const Createpost = () => {
    const { user } = useContext(UserContext);
    console.log("User ID:", user?.id, "Username:", user?.username);

    const usenavigate = useNavigate();

    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [desc, setDesc] = useState("");
    const[error,setError] = useState(false);
    

    const addCategory = () => {
        setCats([...cats, cat]);
        setCat("");
    };

    const deleteCategory = (i) => {
        setCats(cats.filter((_, index) => index !== i));
    };

    const uploadPost = async () => {
        if (!title || !desc || !img || !user?.id || !user?.username) {
            console.log('All fields are required.');
            return;
        }

        try {
            const payload = {
                title,
                desc,
                img,  // Assuming img is a URL or base64 encoded string
                username: user.username,
                categories: cats,
                userId: user.id
            };

            const resp = await axios.post(`${URL}/auth/post/create`, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(resp.data);
            
            usenavigate("/")
            
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className='flex flex-col gap-4 w-full m-auto  pt-20'>
            <div className='flex flex-col lg:w-1/2 w-full m-auto gap-4 p-8 border bg-[#f3daff99] '>
            <h1 className=' text-2xl font-semibold my-2 text-gray-800'>Edit Post</h1>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder='Enter post title'
                className='inp'
            />

            <input
                onChange={(e) => setImg(e.target.value)}
                type='text'
                placeholder='Enter image URL or base64 string'
                className='inp'
            />
             <div className='flex w-full'>
            <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                type="text"
                placeholder='Enter category'
                className='inp w-full'
            />
       
            <button
                onClick={addCategory}
                className='btn1 px-2'
            >
                <BsPlusCircleFill/>
            </button>
            
        </div>
            

            <div className='flex flex-wrap gap-4'>
                {cats.map((c, index) => (
                    <div key={index} className='flex'>
                        <p className='w-fit p-2 bg-slate-200 rounded-full shadow-lg'>{c}</p>
                        <button onClick={() => deleteCategory(index)}>del</button>
                    </div>
                ))}
            </div>
            
 
            <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder='Enter description'
                cols={10}
                rows={5}
                className='inp'
            />
            {error&& <p>error</p>}  

            <button onClick={uploadPost} className='btn1'>Upload Post</button>
        </div>
        </div>
    );
};

export default Createpost;
