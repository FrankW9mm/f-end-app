import { motion } from "framer-motion";
import React from "react";

const Navigate = () => {
  return (
    <div className="relative flex flex-row justify-between bg-[#0E0E0E] md:px-[3rem] px-[1rem] md:py-[2rem] py-[1rem] shadow-2xl ">
      <div>
        <h1 className="text-white text-[32px]">| F-ENDZ |</h1>
      </div>
      <div>
        {/* <button className="p-[1rem]  rounded-[20px] bg-white/10 text-white backdrop-blur-3xl">
          Explore now
        </button> */}
        <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="p-[1rem]  rounded-[20px] bg-white/10 text-white backdrop-blur-3xl"
                onClick={() => {
                  const ReqDiv = document.getElementById("feat");
                  ReqDiv.scrollIntoView();
                }}
              >
                Explore now
              </motion.button>
      </div>
      <div className=" absolute w-[100px] h-[100px] top-1 left-1 gradient-01"></div>
    </div>
  );
};

export default Navigate;
