import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Questions} from "../Data/Question"

const Quize = () => {

    return (
        <div className='sm:w-10/12 w-full m-auto h-full sm:p-8 p-4'>
            <div className=' flex gap-4 mb-4'>
            <Link to='/practitioner'><p className=' font-bold text-xl my-2 bg-white px-8 py-2 shadow-md w-fit rounded-full'>Files</p></Link>
            <p className=' font-bold text-xl my-2 bg-white px-8 py-2 shadow-md w-fit rounded-full'>Quiz</p>        
            </div>

            {Questions.map((ele, ind) => (
                <div className='bg-white flex flex-col mb-8'>
                    <QuizeSection ele={ele} ind={ind} />
                </div>
            ))}
        </div>
    )
}

export default Quize

const QuizeSection = ({ ele, ind }) => {

    const [ans1, setAns1] = useState(false);
    const [ans2, setAns2] = useState(false);
    const [ans3, setAns3] = useState(false);
    const [ans4, setAns4] = useState(false);

    const [exp, setExp] = useState(false);

    return (

        <div key={ind} className=' border-[1px] border-r-gray-50 shadow-xl sm:p-8 rounded-xl'>
            <p className=' mb-2 text-base'><span className=' font-semibold'>Question {ind + 1}</span> : {ele.q}</p>


            <div className='flex gap-2 justify-between my-2 '>
                <div className={` border-[1px] border-r-gray-50 shadow-sm ${ele.ans === ans1 ? " bg-green-200" : ans1 === false ? "" : "bg-red-200"} w-1/2 py-2 px-4 flex gap-2 rounded-full`}>
                    <input
                        type="checkbox"
                        onChange={(e) => setAns1("op1")}
                        name={ele.op1}
                        value={ele.op1}
                        id={ele.op1}
                    />
                    <label htmlFor={ele.op1}>{ele.op1}</label>
                </div>

                <div className={`   border-[1px] border-r-gray-50 shadow-sm ${ele.ans === ans2 ? " bg-green-200" : ans2 === false ? "" : "bg-red-200"} w-1/2 py-2 px-4 flex gap-2 rounded-full  `}>
                    <input
                        type="checkbox"
                        onChange={(e) => setAns2("op2")}
                        name={ele.op2}
                        value={ele.op2}
                        id={ele.op2}
                    />
                    <label htmlFor={ele.op2}>{ele.op2}</label>
                </div>
            </div>

            <div className='flex gap-2 justify-between items-center'>
                <div className={` border-[1px] border-r-gray-50 shadow-sm ${ele.ans === ans3 ? " bg-green-200" : ans3 === false ? "" : "bg-red-200"} w-1/2 py-2 px-4 flex gap-2 rounded-full `}>
                    <input
                        type="checkbox"
                        onChange={(e) => setAns3("op3")}
                        name={ele.op3}
                        value={ele.op3}
                        id={ele.op3}
                    />
                    <label htmlFor={ele.op3}>{ele.op3}</label>
                </div>

                <div className={`  border-[1px] border-r-gray-50 shadow-sm ${ele.ans === ans4 ? " bg-green-200" : ans4 === false ? "" : "bg-red-200"} w-1/2 py-2 px-4 flex gap-2 rounded-full  `}>
                    <input
                        type="checkbox"
                        onChange={(e) => setAns4("op4")}
                        name={ele.op4}
                        value={ele.op4}
                        id={ele.op4}
                    />
                    <label htmlFor={ele.op4}>{ele.op4}</label>
                </div>

            </div>
            {
                (ans1 || ans2 || ans3 || ans4)
                &&
                <button className=' font-bold py-1 px-2 mt-2 text-green underline text-white'
                    onClick={() => setExp(!exp)}
                >Explanation</button>
            }
            
            {
            exp &&
                <p className=' text-green-700 px-2'>
                    <hr className=' my-2 ' />
                    {ele.exp}
                </p>
            }
           
        </div>

    )
}
