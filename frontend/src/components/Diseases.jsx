import React from "react";
import { diseases } from "../DiseasesData";

const Diseases = () => {
  console.log(diseases);
  return (
    <>
      {diseases.map((item, index) => (
        <div className="flex flex-col gap-2 w-10/12 m-auto">
          <div className=" w-full md:flex gap-2">
            <div className=" md:w-2/3 w-full border-[1px] border-gray-100 p-4 text-white rounded-xl shadow-md bg-gradient-to-r from-indigo-400 to-cyan-400">
              <p className=" font-bold my-1"> Name of Disease </p>
              {item.name}
              <hr className=" my-2" /> <p className=" font-bold mb-1">About</p>
              <p>{item.description}</p>
            </div>
            <div className=" md:w-1/3 w-full flex justify-center items-center border-[1px] border-gray-100  rounded-xl shadow-md">
              <img
                className=" w-full object-cover  rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgjaqDfvPS3vJ6rDaL7F6rbsbYBdKjGemvm62znUbLYQ1JL_Y_3ba_B4q5vMhmVvUMBo&usqp=CAU"
                alt="img"
              />
            </div>
          </div>

          <div className=" border-[1px] border-gray-100 p-4  rounded-xl shadow-md my-2">
            <p className=" font-bold mb-2">Description</p>
            <p>{item.description}</p>
            <hr className=" my-2" />
            <p>
              <p className=" font-bold my-2">Symptoms</p>
              {item.symptoms.map((item) => (
                <p className=" bg-blue-200 p-2 rounded-full my-1 text-center">
                  {item}
                </p>
              ))}
              <hr className=" my-2" />
            </p>
            <p>
              <p className=" font-bold my-2">Home Remedies</p>
              {item.remedies.map((item, index) => (
                <p>
                  {index + 1} : {item}
                </p>
              ))}
            </p>
          </div>
          <hr className=" my-4" />
        </div>
      ))}
    </>
  );
};

export default Diseases;
