
import React, { useState } from "react";
import rgbToHex from "../utilities/utils";
import { motion } from "framer-motion";
const ColorSheet = ({ rgb, type }) => {
  const [show,SetShow] = useState(false);
  const bg_color = rgb.join(",");
  const hex_color = rgbToHex(...rgb);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hex_color);
    // console.log(state.hex);
  };

  return (
    <motion.div
      onMouseOver={()=> SetShow(true)}
      onMouseLeave={()=> SetShow(false)}
      onClick={()=> handleCopy()}
      initial={{ scale: 1, borderRadius: ["0%"] }}
      whileHover={{ scale: 1.08, borderRadius: ["5%"] }}
      whileTap={{ scale: 1 }}
      style={{ backgroundColor: `rgb(${bg_color})` }}
      className={`lg:w-[150px] md:w-[100px] cursor-pointer flex flex-col justify-center items-center w-[80px] text-black lg:h-[150px] md:h-[100px] h-[80px] p-[10px] ${
        type === "shade" && "text-white"
      }`}
    >
      <p>{hex_color}</p>
      {
        show && (
          <p className=" text-[12px]">Click to copy</p>
        )
      }
    </motion.div>
  );
};

export default ColorSheet;
