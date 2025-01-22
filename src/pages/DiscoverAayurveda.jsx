import React from "react";
const DiscoverAayurveda = () => {
  const array = [
    {
      img: "https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2K2UNFU-atZtdELZ7sIbt5Nu0JHopIJRYSkujOP9d5aDShrEqAz7jqghzNfF80st8j6BJpOb88EpXga1Cnzo4MGfvGuANxvouRTGkrwTa47uHxz6c0BsooMJCj4E1R7-Klr16P3V0eANJHmAXeGIs6QOh~00eiahctOzofbKyt9In2Q~cSXmawPwpRK1En7hb6LuMW3c5rHrCEWCa1ARwWCXctpzbd-HREZpQ8wrRKLG4-Ezw48JJyt9yosUqNoiAW~VmbEI2kAQ4XFBpF8CC1DETKQJeEZ3~LV5uYjZs3p26URvsFtgbMAqgizkk4wx2TKGxrAvlW-qbFs~TczfA__",
      haeding: "Natural Healing",
      subheading:
        "Uses plant-based remedies and natural ingredients, ensuring safe and sustainable healing practices",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2K2UNFU-atZtdELZ7sIbt5Nu0JHopIJRYSkujOP9d5aDShrEqAz7jqghzNfF80st8j6BJpOb88EpXga1Cnzo4MGfvGuANxvouRTGkrwTa47uHxz6c0BsooMJCj4E1R7-Klr16P3V0eANJHmAXeGIs6QOh~00eiahctOzofbKyt9In2Q~cSXmawPwpRK1En7hb6LuMW3c5rHrCEWCa1ARwWCXctpzbd-HREZpQ8wrRKLG4-Ezw48JJyt9yosUqNoiAW~VmbEI2kAQ4XFBpF8CC1DETKQJeEZ3~LV5uYjZs3p26URvsFtgbMAqgizkk4wx2TKGxrAvlW-qbFs~TczfA__",
      haeding: "Preventive Care",
      subheading:
        "Focuses on maintaining balance in the body to prevent diseases before they occur",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2K2UNFU-atZtdELZ7sIbt5Nu0JHopIJRYSkujOP9d5aDShrEqAz7jqghzNfF80st8j6BJpOb88EpXga1Cnzo4MGfvGuANxvouRTGkrwTa47uHxz6c0BsooMJCj4E1R7-Klr16P3V0eANJHmAXeGIs6QOh~00eiahctOzofbKyt9In2Q~cSXmawPwpRK1En7hb6LuMW3c5rHrCEWCa1ARwWCXctpzbd-HREZpQ8wrRKLG4-Ezw48JJyt9yosUqNoiAW~VmbEI2kAQ4XFBpF8CC1DETKQJeEZ3~LV5uYjZs3p26URvsFtgbMAqgizkk4wx2TKGxrAvlW-qbFs~TczfA__",
      haeding: "Stress Reduction",
      subheading:
        "Incorporates yoga, meditation, and herbal remedies to effectively manage stress and enhance mental well-being",
    },
    /*{
      img: "https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2K2UNFU-atZtdELZ7sIbt5Nu0JHopIJRYSkujOP9d5aDShrEqAz7jqghzNfF80st8j6BJpOb88EpXga1Cnzo4MGfvGuANxvouRTGkrwTa47uHxz6c0BsooMJCj4E1R7-Klr16P3V0eANJHmAXeGIs6QOh~00eiahctOzofbKyt9In2Q~cSXmawPwpRK1En7hb6LuMW3c5rHrCEWCa1ARwWCXctpzbd-HREZpQ8wrRKLG4-Ezw48JJyt9yosUqNoiAW~VmbEI2kAQ4XFBpF8CC1DETKQJeEZ3~LV5uYjZs3p26URvsFtgbMAqgizkk4wx2TKGxrAvlW-qbFs~TczfA__",
      haeding:"Detoxification",
      subheading: "Encourages practices like Panchakarma to cleanse the body of toxins and improve overall vitality",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2K2UNFU-atZtdELZ7sIbt5Nu0JHopIJRYSkujOP9d5aDShrEqAz7jqghzNfF80st8j6BJpOb88EpXga1Cnzo4MGfvGuANxvouRTGkrwTa47uHxz6c0BsooMJCj4E1R7-Klr16P3V0eANJHmAXeGIs6QOh~00eiahctOzofbKyt9In2Q~cSXmawPwpRK1En7hb6LuMW3c5rHrCEWCa1ARwWCXctpzbd-HREZpQ8wrRKLG4-Ezw48JJyt9yosUqNoiAW~VmbEI2kAQ4XFBpF8CC1DETKQJeEZ3~LV5uYjZs3p26URvsFtgbMAqgizkk4wx2TKGxrAvlW-qbFs~TczfA__",
      haeding:"Boosted Immunity",
      subheading: "Strengthens your immune system with herbal formulations and lifestyle practices designed to improve resilience against diseases",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2K2UNFU-atZtdELZ7sIbt5Nu0JHopIJRYSkujOP9d5aDShrEqAz7jqghzNfF80st8j6BJpOb88EpXga1Cnzo4MGfvGuANxvouRTGkrwTa47uHxz6c0BsooMJCj4E1R7-Klr16P3V0eANJHmAXeGIs6QOh~00eiahctOzofbKyt9In2Q~cSXmawPwpRK1En7hb6LuMW3c5rHrCEWCa1ARwWCXctpzbd-HREZpQ8wrRKLG4-Ezw48JJyt9yosUqNoiAW~VmbEI2kAQ4XFBpF8CC1DETKQJeEZ3~LV5uYjZs3p26URvsFtgbMAqgizkk4wx2TKGxrAvlW-qbFs~TczfA__",
      haeding:"Enhanced Longevity",
      subheading: "Advocates a balanced lifestyle and natural remedies to promote healthy aging and increase life span",
    },
    */
  ];

  return (
    <main
      id="about"
      className=" bg-white w-full sm:h-screen h-full mt-20 mb-3 p-4"
    >
      <div className="header-section">
        <p className="heading">Discover Ayurveda’s magic with us </p>
        <p className="sub-heading">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.{" "}
        </p>
      </div>
      <div className="sm:flex">
        <div className="flex w-full justify-center items-center m-auto sm:hidden">
          <div className="relative w-full max-w-[600px] m-auto h-[500px] ml-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/328a/02bf/246a02b2aac7549c73dbe7dacc8e2553?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AcpNoRRMVHSjTVAz8ojJG6ss2oryK0OXcDoaG5OQzg4GVB87XiE92djyD~MlU72AXN~-wRow7Iow-do1FR5M7VJkJ-Ilk1nhirasx7AM-550hKABD2EYOSQe~thw0PMO7zmkUhA0GYChSSS1yCdVKl9-iEKkSlPY0pJi4EYWhVYejclLBGjT7Si6kG0SY-WRipVRSBAJlQf1bu192R-HHw~NRaHLD3z1~E7wtR4rdSuELpBMg0OCVhU2fE6FwTPgz4l3ZokcrtuyrPkKeyohAmpsR3U4Q9gMM43DVK9FnQPisuRH6mGXHfpOghLOFa03jVVi9YuR67RuS4eqyizc4g__"
              alt=""
              className="absolute"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/940c/90b2/b036ab89705f9413d552418bf0f9fa8f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNENf1nQaTZtff5tmHm9xnwWtH48Y~dvo9MiZFYBS6AEkuLsnbN7FxbmlOSn-SEDVGqX9D1rWCLekX3FEZC4FEbSf37cbmO~QnmiUbVqrVpe0-JN7jv~OLMDBlC4GDQV~Pt54nJCkemYfTZwz2se6OjLs5-rotD8rrM00~eziCWtYBkdEYTpMmPr29LdubTG7ww0KdlxLMvBNOaoPX-l8EQrX0Yn5K~srQuoJCu01jaPfYHBFY4Bv-00jgO4xWHqOhKZZD2WY50KX3oJCZdAytwExLRlUh526f~JuBS7nQArzz2F3CI0nvcos0WVyNyodq7iLTs8Ui96QSnwP6hVBQ__"
              alt=""
              className="absolute z-10 w-[430px] md:top-[-80px] top-[-40px]"
            />
          </div>
        </div>

        <div className=" sm:w-1/3 w-full h-fit grid md:grid-cols-1  justify-center items-center gap-1 ">
          {array.map((item) => (
            <div className="sm:flex flex flex-col sm:flex-row-reverse justify-center items-center gap-2 w-full py-4 ">
              <span className="flex  w-fit">
                <img src={item.img} alt="img" className=" w-10 " />
              </span>
              <span className=" w-60 flex flex-col text-sm text-center sm:text-left">
                <p className=" font-bold ">{item.haeding}</p>
                <p className=" ">{item.subheading}</p>
              </span>
            </div>
          ))}
        </div>

        <div className=" sm:w-1/3 sm:block hidden ">
          <div className=" relative w-full ml-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/328a/02bf/246a02b2aac7549c73dbe7dacc8e2553?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AcpNoRRMVHSjTVAz8ojJG6ss2oryK0OXcDoaG5OQzg4GVB87XiE92djyD~MlU72AXN~-wRow7Iow-do1FR5M7VJkJ-Ilk1nhirasx7AM-550hKABD2EYOSQe~thw0PMO7zmkUhA0GYChSSS1yCdVKl9-iEKkSlPY0pJi4EYWhVYejclLBGjT7Si6kG0SY-WRipVRSBAJlQf1bu192R-HHw~NRaHLD3z1~E7wtR4rdSuELpBMg0OCVhU2fE6FwTPgz4l3ZokcrtuyrPkKeyohAmpsR3U4Q9gMM43DVK9FnQPisuRH6mGXHfpOghLOFa03jVVi9YuR67RuS4eqyizc4g__"
              alt=""
              className=" absolute"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/940c/90b2/b036ab89705f9413d552418bf0f9fa8f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNENf1nQaTZtff5tmHm9xnwWtH48Y~dvo9MiZFYBS6AEkuLsnbN7FxbmlOSn-SEDVGqX9D1rWCLekX3FEZC4FEbSf37cbmO~QnmiUbVqrVpe0-JN7jv~OLMDBlC4GDQV~Pt54nJCkemYfTZwz2se6OjLs5-rotD8rrM00~eziCWtYBkdEYTpMmPr29LdubTG7ww0KdlxLMvBNOaoPX-l8EQrX0Yn5K~srQuoJCu01jaPfYHBFY4Bv-00jgO4xWHqOhKZZD2WY50KX3oJCZdAytwExLRlUh526f~JuBS7nQArzz2F3CI0nvcos0WVyNyodq7iLTs8Ui96QSnwP6hVBQ__"
              alt=""
              className=" absolute z-10 w-[430px] md:top-[-80px] top-[-40px]"
            />
          </div>
        </div>

        <div className=" sm:w-1/3 w-full h-fit grid md:grid-cols-1  justify-center items-center gap-1 ">
          {array.map((item) => (
            <div className="sm:flex flex flex-col sm:flex-row justify-center items-center gap-2 w-full py-4 ">
              <span className="flex  w-fit">
                <img src={item.img} alt="img" className=" w-10 " />
              </span>
              <span className=" w-60 flex flex-col text-sm text-center sm:text-left">
                <p className=" font-bold ">{item.haeding}</p>
                <p className=" ">{item.subheading}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DiscoverAayurveda;