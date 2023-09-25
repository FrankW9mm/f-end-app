
import React from "react";
import { useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const ColorError = ({ removeModal }) => {
  return (
    <div className=" z-20 rounded-xl gap-[20px] absolute justify-center items-center flex flex-col m-auto top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] glassmorphism-outer bg-black">
      <h1 className="text-[20px]">Make Sure you put the valid color code</h1>
      <h1 className="text-[20px]">
        and it includes the <span className=" text-red-600">#</span> at the
        front
      </h1>
      <div className=" flex flex-row items-center gap-2">
        <p>WEIWjiw</p>
        <AiOutlineClose color="red" />
      </div>
      <div className=" flex flex-row items-center gap-2">
        <p>#de6dee</p>
        <AiOutlineCheck color="green" />
      </div>

      <button
        className="py-[1rem] px-[1.5rem]  rounded-[20px] bg-white/10 text-white backdrop-blur-3xl"
        onClick={() => removeModal()}
      >
        GOT IT
      </button>
    </div>
  );
};

export default ColorError;
