import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { URL } from '../url';
import { UserContext } from '../Utils/UserContext';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircleFill, BsXCircle } from 'react-icons/bs';
import Select from '../components/Select';
// import Navbar from '../components/Navbar';

const Createpost = () => {
    const { user } = useContext(UserContext);
    // console.log("User ID:", user?.id, "Username:", user?.username);

    const usenavigate = useNavigate();
    const ingredientFocus = useRef(0);

    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);

    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const [step, setStep] = useState("");
    const [steps, setSteps] = useState([]);

    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [desc, setDesc] = useState("");
    const [established, setEstablished] = useState("");
    const [places, setPlaces] = useState("");
    const [error, setError] = useState("");
    const [wpmh, setWpmh] = useState("");
    const [vitamin, setVitsmin] = useState("");
    const [video_link, setVideo_link] = useState("");


    const addCategory = () => {
        setCats([...cats, cat]);
        setCat("");
    };
    const deleteCategory = (i) => {
        setCats(cats.filter((_, index) => index !== i));
    };

    const addIngredient = () => {
        setIngredients([...ingredients, ingredient]);
        setIngredient("");
        ingredientFocus.current.focus();
    };
    const deleteIngredient = (i) => {
        setIngredients(ingredients.filter((_, index) => index !== i));
    };

    const addStep = () => {
        setSteps([...steps, step]);
        setStep("");
    };
    const deleteStep = (i) => {
        setSteps(steps.filter((_, index) => index !== i));
    };

    console.log(user);

    const uploadPost = async () => {
        if (!title || !desc || !img || !user?.id || !user?.username) {
            setError(!user?.id ? "please login" : "All fields are required.");
            return;
        }
        else {
            try {
                const payload = {
                    title,
                    desc,
                    img,  // Assuming img is a URL or base64 encoded string
                    username: user.username,
                    email:user.email,
                    categories: cats,
                    userId: user.id,
                                 
                    established,
                    places,
                    wpmh,
                    vitamin,
                    ingredient: ingredients,
                    step: steps,
                    video_link,
                };
                const resp = await axios.post(`https://project-phase-1-tpyd.onrender.com/auth/post/create`, payload, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                // console.log(resp.data);
                alert("your post is uploadded");
                usenavigate("/");
            }
            catch (err) {
                console.log(err);
                setError("something went wrong");
            }
        }
    };
    const tags = ['All', 'skin', 'cough', 'fever', 'diabetes', 'hair', 'diet', 'immunity-wellness', 'pain-reliever', 'juices'];


    return (
        <div className='flex flex-col gap-4 w-full h-full m-auto pb-8 mt-4'>
            <div className='flex flex-col lg:w-1/2 w-full m-auto gap-4 p-8  bg-[#ccffc199] shadow-xl  border-4 border-white'>
                <h1 className=' text-2xl font-semibold my-2 text-gray-800'>Create Post</h1>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder='Enter post title'
                    className='inp'
                />

                <input
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    type='text'
                    placeholder='Enter image URL or base64 string '
                    className='inp'
                />

                <input
                    value={video_link}
                    onChange={(e) => setVideo_link(e.target.value)}
                    type='text'
                    placeholder='paste video link here..'
                    className='inp'
                />

                <input
                    value={established}
                    onChange={(e) => setEstablished(e.target.value)}
                    type='text'
                    placeholder='Enter established date'
                    className='inp'
                />

                <input
                    value={places}
                    onChange={(e) => setPlaces(e.target.value)}
                    type='text'
                    placeholder='Enter Place'
                    className='inp'
                />

                <input
                    value={wpmh}
                    onChange={(e) => setWpmh(e.target.value)}
                    type='text'
                    placeholder='Which Patient this medicine is harmful '
                    className='inp'
                />

                <input
                    value={vitamin}
                    onChange={(e) => setVitsmin(e.target.value)}
                    type='text'
                    placeholder='Vitamin section'
                    className='inp'
                />

                <div className='flex w-full'>
                    <input
                        value={ingredient}
                        onChange={(e) => setIngredient(e.target.value)}
                        type="text"
                        placeholder='Enter ingredients'
                        className='inp w-full'
                        ref={ingredientFocus}
                    />
                    <button
                        onClick={addIngredient}
                        className=' bg-green text-white font-semibold px-2'
                    >
                        <BsPlusCircleFill />
                    </button>
                </div>

                <div className='flex gap-2 flex-wrap'>
                    {ingredients.map((c, index) => (
                        <div key={index} className='flex gap-2 text-sm bg-slate-200 border-2 border-white rounded-full py-1 px-2 '>
                            <p className='w-fit'>{c}</p>
                            <button onClick={() => deleteIngredient(index)} className=' rounded-full text-white bg-gray-600 p-1' ><BsXCircle /></button>
                        </div>
                    ))}
                </div>

                <hr className='border-[1px] border-green-800' />
 

                <div className='flex w-full'>
                    <input
                        value={step}
                        onChange={(e) => setStep(e.target.value)}
                        type="text"
                        placeholder='Enter steps'
                        className='inp w-full'
                    />
                    <button
                        onClick={addStep}
                        className=' bg-green text-white font-semibold px-2'
                    >
                        <BsPlusCircleFill />
                    </button>
                </div>
                <div className='flex flex-wrap items-center gap-2'>
                    {steps.map((c, index) => (
                        <div key={index} className='flex gap-2 text-sm items-center bg-slate-200 rounded-r-full  py-1 px-2 shadow-xl'>
                            <p className='w-fit px-4'><span className='font-semibold'>step {index + 1} : </span> {c}</p>
                            <button onClick={() => deleteStep(index)} className=' rounded-full text-white bg-red-600 h-7 w-7 flex justify-center items-center' ><BsXCircle /></button>
                        </div>
                    ))}
                </div>

                <hr className='border-[1px] border-green-800' />

                <div className='flex w-full'>
                    <Select
                        options={tags}
                        className="border-[1px] text-sm border-gray-300 px-4 py-2  outline-none"
                        placeholder="Add tags.."
                        inp={cat}
                        setInp={setCat}
                        width={400} //width length 100 200 250 300 400
                    />
                    <button
                        onClick={addCategory}
                        className=' bg-green text-white font-semibold px-2'
                    >
                        <BsPlusCircleFill />
                    </button>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    {cats.map((c, index) => (
                        <div key={index} className='flex gap-2 text-sm bg-slate-200 border-2 border-white rounded-full py-1 px-2 '>
                            <p className='w-fit'>{c}</p>
                            <button onClick={() => deleteCategory(index)} className=' rounded-full text-white bg-gray-600 p-1' ><BsXCircle /></button>
                        </div>
                    ))}
                </div>

                <hr className='border-[1px] border-green-800' />

                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder='Enter description'
                    cols={10}
                    rows={5}
                    className='inp'
                />
                {error && <p className=' text-red-500 animate-pulse text-sm'>{error}</p>}

                <button onClick={uploadPost} className=' p-2 bg-green text-white font-semibold'>Upload Post</button>
            </div>
        </div>
    );
};

export default Createpost;