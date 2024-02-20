

import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { reducer } from "../utilities/Reducer";
import Values from "values.js";
import ColorSheet from "./ColorSheet";
import ColorError from "./ColorError";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RaceBy } from "@uiball/loaders";
import Palettes from "./Palettes";
const Shade = ({ color }) => {
  // console.log(color);
  const [colorHex, setcolorHex] = useState(color);
  // console.log(colorHex);
  useEffect(() => {
    // GetColors();
  }, []);

  const initialState = {
    color: "",
    option: 5,
    ShowModal: false,
    ShowPalette: false,
    list: new Values("#f34fff").all(5),
    requestColor:'#f34fff',
    palette: "",
  };

  // const GetColors = async () => {
  //   // let response = await fetch("http://127.0.0.1:5000/getColor/palette");
  //   let response = await fetch("https://api.unsplash.com/search/photos?page=1&query=office&client_id=Z8R2rY--5IIKwCbZ_joZW0D5OHBn9PUpIFKAuaBOJAM")
  //   let data = await response.json();
  //   // dispatch({ type: "PALETTE_INCOME", data: data });
  //   console.log(data);
  // };

  // GetColors();

  const closeModal = () => {
    dispatch({ type: "SHADE_MODAL_CLOSE", data: false });
  };
  const ShowModal = () => {
    dispatch({ type: "SHADE_MODAL_OPEN", data: true });
  };
  const ShowPalette = () => {
    dispatch({ type: "PALETTE_MODEL_OPEN", data: true });
  };
  const ClosePalette = () => {
    dispatch({ type: "PALETTE_MODEL_CLOSE", data: false });
  };

  const handleColorRequest = async (color_code) =>{

    if(color_code.startsWith('#')){
      color_code = color_code.substring(1)
    }
    
    let response = await fetch(`https://www.thecolorapi.com/scheme?hex=${color_code}&count=20&mode=analogic`);
    let data = await response.json();
    let incomedata = data.colors;
    console.log(incomedata);
    dispatch({type:'COLOR_LIST_INCOME', data:incomedata});
  }

  const handleOptionChange = (e) => {
    const Tempvalue = e.target.value;
    let value = parseInt(Tempvalue);
    dispatch({ type: "SET_SHADE_OPTION", data: value });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleShadeSumbit = (colorEntry) => {
    try {
      const newColorList = new Values(state.color).all(state.option);
      dispatch({ type: "SHADE_ENTRY", data: newColorList });
    } catch {
      ShowModal();
      // window.alert("Invalid color");
    }
  };
  return (
    <div className="w-full relative text-white mt-[30px] flex flex-col">
      <div className=" h-[100px]">
        <h1 className="text-[32px] uppercase">Color Shade generator</h1>
      </div>

      {state.ShowModal && (
        <ColorError removeModal={closeModal} msg={"WRONG INPUT"} />
      )}
      <div className="  p-3 w-full bg-[#191919] relative flex flex-col justify-start items-start gap-[40px]">
        <div className="flex md:mt-0 mt-[20px] w-full md:flex-row lg:justify-start justify-center flex-col items-center lg:gap-[30px] gap-[15px]">
          <input
            type="text"
            value={state.color}
            onChange={(e) => {
              dispatch({ type: "SHADE", data: e.target.value });
              // setcolorHex(e.target.value);
            }}
            name=""
            id=""
            placeholder="Enter your color code "
            className="px-[15px] w-[200px] h-[50px]  py-[10px] text-black outline-none rounded-[20px]"
          />
          <label for="cars">SHADES:</label>
          <select
            className="text-black h-[50px]  rounded-xl"
            placeholder="SHADES"
            onChange={handleOptionChange}
            name=""
            id=""
          >
            <option value="5">41 COLORS</option>
            <option value="10">21 COLORS</option>
            <option value="20">11 COLORS</option>
            <option value="30">7 COLORS</option>
          </select>
          <button
            className="bg-white w-[150px] h-[50px] font-normal uppercase rounded-[20px] bg-white/10 text-white backdrop-blur-xl"
            type="submit"
            onClick={() => {
              handleShadeSumbit();
            }}
          >
            generate
          </button>
          <button
            onClick={ShowPalette}
            className=" uppercase w-[200px] h-[50px] font-normal rounded-[20px] bg-white/10 text-white backdrop-blur-xl "
          >
            {" "}
            Color schemes{" "}
          </button>
        </div>

        {/* Palette */}
        {state.ShowPalette && (
          <div className="z-10 rounded-xl absolute p-[2rem] flex flex-col justify-center items-center top-0 left-0 w-full h-auto bg-[#191919]">
            <div className="w-full flex flex-row justify-between">
              <h1 className=" uppercase text-[20px]">Search schemes</h1>
              <AiOutlineCloseCircle onClick={ClosePalette} size={25} />
            </div>
            {/* palette header and search bar */}
            <div className="flex  w-full flex-col justify-center items-center">
              <div className="flex mt-[20px] md:flex-row flex-col items-center justify-center gap-[20px] w-full">
              <input className="w-[150px] p-[8px] rounded-md " 
              placeholder="Enter a Hex Code"
              type="text" name="colorCodeReceiver" id="" 
              value={state.requestColor}
              onChange={(e)=>{
                dispatch({ type: "COLOR_CODE_INCOME", data: e.target.value });
                
              }}
              />
              <button className=" md:p-[1rem] p-[0.5rem]  rounded-[20px] bg-white/10 text-white backdrop-blur-3xl"
              onClick={()=>handleColorRequest(state.requestColor)}
              >Get colors</button>
              </div>
              {
                state.palette &&(
                  <div className="flex flex-row justify-evenly lg:p-[4rem] p-[2rem] flex-wrap lg:gap-[40px] gap-[20px] items-center">
                    {state.palette.map((item, index)=>{
                      return(
                        // color palette resutls
                        < Palettes key={index} {...item} />
    
                      )
                    })}
                  </div>
                )
              }
            </div>
            {/* <div className="flex gap-[30px] h-[100vh] flex-col items-center justify-center">
              <RaceBy size={200} color="white"></RaceBy>
              <h1 className="text-[20px]">In Development</h1>
            </div> */}
            {/* <button onClick={GetColors}>Request Palettes</button> */}
            {/* {state.palette && (
              <div className="flex flex-wrap w-[50%]  flex-row items-center justify-around">
                {state.palette.data.map((data, index) => {
                  return (
                    <div
                      className="flex mt-[2rem]  flex-col p-[1rem] rounded-lg bg-white gap-0"
                      key={index} 
                    >
                      {data.colors.map((color, index) => {
                        return (
                          <div
                            className="w-[200px] h-[50px] flex items-center justify-center"
                            style={{ backgroundColor: `${color}` }}
                            key={index}
                          >
                            <p>{color}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}  */}
          </div>
        )}
      </div>
      <div className="w-full md:h-auto h-[500px] md:overflow-hidden overflow-scroll flex flex-row gap-[10px] flex-wrap justify-center mt-[20px] rounded-[20px] md:p-[20px] py-[10px] glassmorphism-outer">
        {state.list.map((color, index) => {
          // console.log(color);
          return <ColorSheet key={index} {...color} />;
        })}
      </div>
    </div>
  );
};

export default Shade;
