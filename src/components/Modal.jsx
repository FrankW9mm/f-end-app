
import React, { useEffect } from "react";

const Modal = ({ msg, removeModal }) => {
  useEffect(() => {
    const remove = setTimeout(() => {
      removeModal();
    }, 2000);

    return () => clearTimeout(remove);
  }, []);
  return (
    <div className="text-white absolute rounded-lg w-[300px] h-[50px] flex justify-center items-center bg-[#0c0b0b]">
      <p className="text-[18px] uppercase">{msg}</p>
    </div>
  );
};

export default Modal;
