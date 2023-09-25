
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilities/AnimationAbs";
const FeatureBlock = ({ text, imgurl, id, title, reference }) => {
  console.log(title);
  return (
    <motion.div
      variants={fadeIn("up", "tween", id * 0.1, 1)}
      key={id}
      className="lg:w-[300px] group w-[250px] overflow-clip relative flex flex-col justify-center items-center gap-[20px] rounded-[20px] glassmorphism border-white  bg-[#0c0b0b] lg:h-[300px] h-[250px]"
    >
      <h1 className="text-white uppercase text-[18px]">{title}</h1>
      <div className="w-[50px]">
        <img
          className=" group-hover:rotate-[-30deg] duration-700 "
          src={imgurl}
          alt=""
        />
      </div>
      <div className="absolute group-hover:bg-[#131212] glassmorphism-inner flex gap-[10px] flex-col p-[2rem] translate-y-[-100%] group-hover:translate-y-[0%] duration-700 lg:w-[300px] w-[250px] lg:h-[300px] h-[250px] bg-[#0E0E0E] ">
        <h1 className="text-white font-semibold text-[20px] ">{title}</h1>
        <p className="text-white font-thin">{text}</p>
        {/* <a
          href={`#${reference}`}
          className=" bg-gradient-to-r text-white from-[#7853ff36] to bg-[#5454ff] bg-clip-text"
        >
          Go now
        </a> */}
        <a
          href={`#${reference}`}
          className="font-extrabold text-transparent  text-1xl bg-clip-text bg-gradient-to-r from-purple-400  to-pink-600 "
        >
          Go Now
          <div className="w-[0px] h-[2px] bg-white group-hover:w-[60px] duration-1000"></div>
        </a>
      </div>
    </motion.div>
  );
};

export default FeatureBlock;
