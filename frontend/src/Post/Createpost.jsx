import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../Utils/UserContext';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircleFill, BsXCircle } from 'react-icons/bs';
import Select from '../components/Select';
import { toast } from 'react-toastify';

const Createpost = () => {
    const { user } = useContext(UserContext);
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
    const [wpmh, setWpmh] = useState("");
    const [vitamin, setVitsmin] = useState("");
    const [video_link, setVideo_link] = useState("");

    const addCategory = () => {
        if (!cat.trim()) return toast.warn("Category can't be empty!");
        setCats([...cats, cat]);
        setCat("");
    };

    const deleteCategory = (i) => {
        setCats(cats.filter((_, index) => index !== i));
    };

    const addIngredient = () => {
        if (!ingredient.trim()) return toast.warn("Ingredient can't be empty!");
        setIngredients([...ingredients, ingredient]);
        setIngredient("");
        ingredientFocus.current.focus();
    };

    const deleteIngredient = (i) => {
        setIngredients(ingredients.filter((_, index) => index !== i));
    };

    const addStep = () => {
        if (!step.trim()) return toast.warn("Step can't be empty!");
        setSteps([...steps, step]);
        setStep("");
    };

    const deleteStep = (i) => {
        setSteps(steps.filter((_, index) => index !== i));
    };

    const validateForm = () => {
        if (!user?.id) {
            toast.error("Please login to create a post!");
            return false;
        }
        if (!title.trim()) { toast.error("Title is required!"); return false; }
        if (!img.trim()) { toast.error("Image URL is required!"); return false; }
        if (!desc.trim()) { toast.error("Description is required!"); return false; }
        if (!established) { toast.error("Established date is required!"); return false; }
        if (!places.trim()) { toast.error("Place of origin is required!"); return false; }
        if (!wpmh.trim()) { toast.error("Patient warning is required!"); return false; }
        if (!vitamin.trim()) { toast.error("Vitamin info is required!"); return false; }
        if (ingredients.length === 0) { toast.error("At least one ingredient is required!"); return false; }
        if (steps.length === 0) { toast.error("At least one step is required!"); return false; }
        if (cats.length === 0) { toast.error("At least one category is required!"); return false; }
        return true;
    };

    const uploadPost = async () => {
        if (!validateForm()) return;

        try {
            const payload = {
                title,
                desc,
                img,
                username: user.username,
                email: user.email,
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
            await axios.post(`http://localhost:8000/auth/post/create`, payload, {
                headers: { 'Content-Type': 'application/json' }
            });
            toast.success("Your post has been uploaded successfully!");
            usenavigate("/");
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong while uploading!");
        }
    };

    const tags = ['All', 'skin', 'cough', 'fever', 'diabetes', 'hair', 'diet', 'immunity-wellness', 'pain-reliever', 'juices'];

    return (
        <div className='flex flex-col gap-4 w-full h-full m-auto pb-8 bgImg'>
            <div className='flex flex-col lg:w-1/2 w-full m-auto gap-4 p-8 bg-[#d4ffdf] shadow-xl border-4 border-white'>
                <h1 className='text-2xl font-semibold my-2 text-gray-800'>Create Post</h1>

                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Your post title 💡' className='inp' />
                <input value={img} onChange={(e) => setImg(e.target.value)} type='text' placeholder='Image URL 🌐' className='inp' />
                <input value={video_link} onChange={(e) => setVideo_link(e.target.value)} type='text' placeholder='Video Link ▶️' className='inp' />
                <input value={established} onChange={(e) => setEstablished(e.target.value)} type='date' className='inp' />
                <input value={places} onChange={(e) => setPlaces(e.target.value)} type='text' placeholder='Origin Place 🗺️' className='inp' />
                <input value={wpmh} onChange={(e) => setWpmh(e.target.value)} type='text' placeholder='Harmful for patients 🤒' className='inp' />
                <input value={vitamin} onChange={(e) => setVitsmin(e.target.value)} type='text' placeholder='Vitamin Info 💪🏻' className='inp' />

                <div className='flex w-full'>
                    <input value={ingredient} onChange={(e) => setIngredient(e.target.value)} type="text" placeholder='Ingredient 🧺' className='inp w-full' ref={ingredientFocus} />
                    <button onClick={addIngredient} type="button" className='bg-green text-white font-semibold px-2'><BsPlusCircleFill /></button>
                </div>

                <div className='flex gap-2 flex-wrap'>{ingredients.map((c, i) => (
                    <div key={i} className='flex gap-2 text-sm bg-slate-200 py-1 px-2'><p>{c}</p>
                        <button onClick={() => deleteIngredient(i)} className='bg-gray-600 text-white p-1'><BsXCircle /></button>
                    </div>
                ))}</div>

                <div className='flex w-full'>
                    <input value={step} onChange={(e) => setStep(e.target.value)} type="text" placeholder='Step 🔢' className='inp w-full' />
                    <button onClick={addStep} type="button" className='bg-green text-white font-semibold px-2'><BsPlusCircleFill /></button>
                </div>

                <div className='flex flex-wrap items-center gap-2'>{steps.map((c, i) => (
                    <div key={i} className='flex gap-2 text-sm bg-slate-200 py-1 px-2'><p>Step {i + 1}: {c}</p>
                        <button onClick={() => deleteStep(i)} className='bg-red-600 text-white h-7 w-7 flex items-center justify-center'><BsXCircle /></button>
                    </div>
                ))}</div>

                <div className='flex w-full'>
                    <Select options={tags} className="border text-sm px-4 py-2 outline-none" placeholder="Add tags.." inp={cat} setInp={setCat} width={400} />
                    <button onClick={addCategory} type="button" className='bg-green text-white font-semibold px-2'><BsPlusCircleFill /></button>
                </div>

                <div className='flex gap-2 flex-wrap'>{cats.map((c, i) => (
                    <div key={i} className='flex gap-2 text-sm bg-slate-200 py-1 px-2'><p>{c}</p>
                        <button onClick={() => deleteCategory(i)} className='bg-gray-600 text-white p-1 rounded-full'><BsXCircle /></button>
                    </div>
                ))}</div>

                <ReactQuill theme="snow" value={desc} onChange={setDesc} placeholder="Enter description..." className="bg-white rounded-md" />

                <button onClick={uploadPost} className='p-2 bg-green text-white font-semibold mt-4'>Upload Post</button>
            </div>
        </div>
    );
};

export default Createpost;
