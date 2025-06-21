import React, { useEffect, useRef, useState } from "react";

const Select = ({ options, placeholder, inp, setInp, width }) => {
  const [showoptions, setShowoptions] = useState(false);
  const optionRef = useRef(null);

   useEffect(()=>{
    const handleClickOutside = (event) => {
        if(optionRef.current && !optionRef.current.contains(event.target)){
            setShowoptions(false);
        }
    }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    
}, []);
  return (
    <div
     ref={optionRef}
      className={`w-full relative cursor-pointer`}
      onClick={() => setShowoptions(!showoptions)}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 text-sm border outline-none`}
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        title="click here"
      />
      <div
        className={`w-full z-50 absolute transition-all transform shadow-md mt-[1px] rounded-sm overflow-scroll bg-white duration-500 ease-in-out`}
        style={{
          height: showoptions ? "110px" : "0px",
          opacity: showoptions ? 1 : 0,
        }}
      >
        {showoptions &&
          options.filter((ele) => ele.includes(inp)).map((ele, index) => (
              <Option
                key={index}
                ele={ele}
                setInp={setInp}
                setShowoptions={setShowoptions}
              />
            ))}
      </div>
    </div>
  );
};

const Option = ({ ele, setInp, setShowoptions }) => {
  const operation = (e) => {
    e.stopPropagation();
    setShowoptions(false);
    setInp(ele);
  };

  return (
    <div
      className="w-full z-90 border-b-[1px] text-sm bg-white overflow-scroll cursor-pointer transition-transform transform "
      onClick={operation}
    >
        <p className="w-full hover:bg-green-500 text-left hover:text-white bg-white p-1 overflow-x-scroll px-2">
        {ele}
      </p>
    </div>
 );
};

export default Select;
