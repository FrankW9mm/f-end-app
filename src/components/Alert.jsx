
import { React, useEffect } from "react";

const Alert = ({ removeAlert, msg }) => {
  useEffect(() => {
    removeAlert(true, "Click the blocks to interact", "idk");
    const timeout = setTimeout(() => {
      removeAlert();
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="text-white absolute w-[300px] h-[50px] flex justify-center items-center bg-[#0c0b0b]">
      <p className="text-[18px]">{msg}</p>
    </div>
  );
};

export default Alert;
