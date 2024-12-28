import React from "react";
const Service = () => {
  const array = [
    {
      id:"1",
      heading:"Make Appointment",
      subHeading:" You must make an appointment in advance, to choose the service and date.", 
    },
    {
      id:"2",
      heading:"Consultations",
      subHeading:"The next stage involves a thorough consultation with an Ayurveda practitioner.", 
    },
    {
      id:"3",
      heading:"Treatment Planning",
      subHeading:" The Ayurvedic practitioner creates a personalized treatment plan for you", 
    },
    {
      id:"4",
      heading:"Maintenance",
      subHeading:"These visits allow for assessment of progress, adjustments to the treatment.", 
    },
  ];

  return (
    <main  id="service" className=' w-full min-h-screen flex flex-col justify-center items-center m-auto'>
        
        <div>
            <img src="" alt="" />
            <p></p>
            <button></button>
        </div>
        <div className='header-section'>
            <p className='heading'>Our Aayurvedic Approach</p>
            <p className='sub-heading'>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions. </p>
        </div>

        <div className=' sm:w-10/12 w-full sm:flex flex-wrap gap-2 items-center justify-center'>
          {
           array.map((item)=>(
            <div className=' bg-white  sm:w-1/5 h-[250px] m-8 sm:m-1 border-t-2 border-green-800 rounded-3xl p-8 flex flex-col justify-center items-center shadow-xl'>
            <p className=' bg-green-100 w-10 h-10 rounded-full flex justify-center items-center '><span>{item.id}</span></p>
            <p className=' font-bold text-green-800 text-xl text-nowrap my-2'>{item.heading}</p>
            <p className=' text-center text-sm'>{item.subHeading}</p>
            </div>
           ))
          }
        </div>

    </main>
  )
}

export default Service
