
import React, { useRef } from "react";
import Bg from "../components/img/bg.gif";
import { BsMouse } from "react-icons/bs";
import { motion, spring } from "framer-motion";
import { staggerContainer, fadeIn } from "../utilities/AnimationAbs";
const Hero = () => {
  return (
    <div className=" overflow-clip">
      <div className="flex flex-col md:items-center items-start bg-[#0E0E0E] md:px-[2rem] px-[1rem] py-[3rem] gap-[30px]">
        <div className="relative w-full flex lg:flex-row flex-col gap-10 lg:items-center items-start justify-evenly">
          <div className=" absolute w-[100px] h-[100px] bottom-[-50%] right-[50%] gradient-01"></div>
          <div className="flex flex-col text-white gap-2">
            <h1 className="text-[30px] font-semibold">
              | LOOKING FOR TEST{" "}
              <div className="h-[50px] relative overflow-clip leading-[50px]">
                <span className=" absolute ani">
                  DATA?
                  <br />
                  IMAGE?
                  <br />
                  TEXT?
                  <br />
                  COLOR?
                </span>
              </div>
            </h1>
            <p className="text-[21px] font-thin">FROM GENERATING TEXT,IMAGES</p>
            <p className="text-[21px] font-thin">& COLOR SHADES TO</p>
            <p className="text-[21px] font-thin">RANDOM ACCESS NOTE</p>
          </div>
          <div className=" flex flex-col gap-4">
            {/* <p className="text-[18px] text-white">WE GOT ALL U NEED </p> */}
            <p className="text-white text-[18px]">
              | WE GOT EVERYTHING YOU NEED !
            </p>
            <div>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="text-white bg-white/30 backdrop-blur-sm p-[1rem] rounded-[20px]"
                onClick={() => {
                  const ReqDiv = document.getElementById("feat");
                  ReqDiv.scrollIntoView();
                }}
              >
                START NOW
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", ammount: 0.25 }}
        className="relative w-full h-[700px]"
      >
        <motion.div
          variants={fadeIn("left", "tween", 1, 1)}
          className="absolute  w-full h-[700px] flex-col flex justify-center items-center bg-black/80"
        >
          <p className="text-white uppercase md:translate-x-10 translate-x-0">
            Introducing...
          </p>
          <h1 className="text-white lg:text-[100px]  md:text-[70px] mb-[20px] text-[50px] font-bold md:translate-x-10 translate-x-0">
            | F-ENDZ |
          </h1>
          <BsMouse
            size={40}
            color={"white"}
            className="md:translate-x-10 translate-x-0"
          />
        </motion.div>
        <img
          className="w-full h-full object-top object-cover"
          src={Bg}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
