
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { SketchPicker } from "react-color";
//https://www.youtube.com/watch?v=ndRmJSv8AhM&ab_channel=Tutorend
const ColorPage = () => {
  const [color, setColor] = useState({ hex: "", rgb: "" });
  // const handleChangeComplete = (e) => {
  //   setColor(e.target.value);
  //   console.log(e.target.value);
  // };
  const handleChangeComplete = (color) => {
    console.log(color.rgb);
    setColor({ hex: color.hex, rgb: color.rgb });
  };
  const { r, g, b, a } = color;
  console.log(color);
  return (
    <div>
      <div className="bg-[#0c0b0b] md:p-[3rem] p-[1rem]">
        <p className="text-white text-[32px] ">LET&apos; DEAL WITH COLORS</p>
        <div className="flex  lg:flex-row flex-col justify-evenly items-center mt-[20px] ">
          <SketchPicker
            onChangeComplete={handleChangeComplete}
            onChange={(color) => setColor(color.rgb)}
            color={color}
          />
          <div className="md:p-[3rem] h-[350px] p-[1rem] bg-[#191919] flex flex-col justify-start gap-[30px] items-center">
            <p className="text-white text-[22px] ">YOUR CURRENT COLOR</p>
            <div
              style={{ backgroundColor: `rgba(${r},${g},${b},${a})` }}
              className={` w-[200px] rounded-[20px] h-[100px] `}
            ></div>
            <div className="h-[30px]">
              <p className="text-white">{color.hex}</p>
            </div>
            <div className="flex flex-row gap-[30px]">
              <button className="text-white">SAVE</button>
              <button>COPY</button>
            </div>
          </div>
          {/* {for color storage} */}

          {/* <ChromePicker onChangeComplete={handleChangeComplete} color={color} /> */}
          {/* React Color */}
          {/* <input
          className="today_color"
          onChange={handleChangeComplete}
          type="color"
          defaultValue={"#1f1f1f1"}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default ColorPage;
