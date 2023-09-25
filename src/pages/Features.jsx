
import React, { useState } from "react";
import FeatureBlock from "../components/FeatureBlock";
import Alert from "../components/Alert";
import { motion } from "framer-motion";
import { staggerContainer } from "../utilities/AnimationAbs";
const Features = ({ data }) => {
  const [show, setShow] = useState({ show: "false", msg: "", type: "" });

  // abstract function for setshow
  const ShowAlert = (show = false, msg, type) => {
    setShow({ show: show, msg: msg, type: type });
  };
  console.log(data);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", ammount: 0.25 }}
      id="feat"
      className="flex lg:p-[2rem] p-[1rem] flex-col justify-center items-start bg-[#0E0E0E]"
    >
      <h1 className="self-start relative lg:text-[32px] md:text-[24px] text-[20px] text-white font-semibold uppercase">
        the features we have to offer
        {show.show && <Alert removeAlert={ShowAlert} {...show} />}
      </h1>

      <div className="w-full flex flex-col items-center justify-center">
        <div className=" mt-[2rem] flex lg:gap-[40px] gap-[20px] flex-row flex-wrap lg:p-[2rem] p-[1rem] lg:w-full items-center w-full justify-center">
          {data.map((items, index) => {
            console.log(items);
            return (
              <FeatureBlock {...items} id={index} key={index} />
              // <div
              //   key={index}
              //   className="lg:w-[300px] w-[250px] flex flex-col justify-center items-center gap-[20px] rounded-[20px] glassmorphism border-white  bg-[#0c0b0b] lg:h-[300px] h-[250px]"
              // >
              //   <h1 className="text-white uppercase text-[18px]">
              //     {items.text}
              //   </h1>
              //   <div className="w-[50px]">
              //     <img
              //       className="hover:rotate-[-30deg] duration-700 "
              //       src={items.imgurl}
              //       alt=""
              //     />
              //   </div>
              // </div>
            );
          })}
        </div>
        <div className="text-white flex mt-[2rem] flex-row lg:text-left text-left">
          <h1 className="lg:text-[30px] uppercase text-[20px] font-semibold">
            SPEED UP! your project with us
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
