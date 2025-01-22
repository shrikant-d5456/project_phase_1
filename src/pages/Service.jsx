import React from "react";
const Service = () => {
  const array = [
    {
      id: "1",
      heading: "Scanner Feature",
      subHeading: " You can use a Scanner feature to identify a Plant.",
    },
    {
      id: "2",
      heading: "Language Translation",
      subHeading:
        "You can use our Translation feature to read Blogs in your preferred language.",
    },
    {
      id: "3",
      heading: "Text-to-Speech",
      subHeading: "Tired of reading? You can also listen to the Blogs!",
    },
    {
      id: "4",
      heading: "Informative Sections",
      subHeading:
        "Our system consists of various informative resources for a better understanding of Ayurveda!",
    },
  ];

  return (
    <main
      id="service"
      className=" w-full min-h-screen flex flex-col justify-center items-center m-auto"
    >
      <div>
        <img src="" alt="" />
        <p></p>
        <button></button>
      </div>
      <div className="header-section">
        <p className="heading">Our Services</p>
        <p className="sub-heading">
          At AayurMedGuide we follow a unique and personalized approach to the
          study of Ayurveda. Our system enables users to learn and know more
          about Ayurveda and its practices.{" "}
        </p>
      </div>

      <div className=" sm:w-10/12 w-full sm:flex flex-wrap gap-2 items-center justify-center">
        {array.map((item) => (
          <div className=" bg-white  sm:w-1/5 h-[250px] m-8 sm:m-1 border-t-2 border-green-800 rounded-3xl p-8 flex flex-col justify-center items-center shadow-xl">
            <p className=" bg-green-100 w-10 h-10 rounded-full flex justify-center items-center ">
              <span>{item.id}</span>
            </p>
            <p className=" font-bold text-green-800 text-xl text-nowrap my-2">
              {item.heading}
            </p>
            <p className=" text-center text-sm">{item.subHeading}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Service;