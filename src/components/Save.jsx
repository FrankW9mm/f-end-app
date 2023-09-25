
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DotWave } from "@uiball/loaders";
import {
  getLocalData,
  clearStorage,
  removeSingledata,
} from "../utilities/LocalData";

const Save = ({ closeSave, show }) => {
  const [saveData, setSaveData] = useState(getLocalData);

  useEffect(() => {
    // let initialLoad = getLocalData;
    // setSaveData(initialLoad);
    const intervalLoad = setInterval(() => {
      let initialLoad = getLocalData;
      setSaveData(initialLoad);
    }, 1000);
    return () => clearInterval(intervalLoad);
  }, []);
  return (
    <div
      className={` ${
        show ? "translate-x-[0%]" : "translate-x-[200%]"
      } absolute z-[1] lg:w-[100%]  w-full lg:p-[3rem] p-[1rem] rounded-2xl flex flex-col gap-[20px] justify-center items-center bg-[#0E0E0E] duration-500 ease-out`}
    >
      {/* <h1 className="text-white">IN DEVELOPMENT</h1>
      <DotWave size={47} speed={1} color="white" />; */}
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-white md:text-[26px] lg:text-[28px]">SAVED COLORS</h1>
        <AiOutlineCloseCircle
          size={32}
          onClick={() => closeSave()}
          color="white"
        />
      </div>
      <div>
        <button
          onClick={() => {
            clearStorage();
            setSaveData(getLocalData);
          }}
          className="text-white uppercase px-[10px] py-[10px] rounded-[10px] bg-white/10 backdrop-blur-3xl"
        >
          remove all
        </button>
      </div>
      <div className="flex w-full flex-col gap-[30px] text-white">
        {saveData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center w-full justify-evenly"
            >
              <p>{data}</p>
              <div
                style={{ backgroundColor: data }}
                className={`w-[10px] h-[10px]`}
              ></div>
              <button
                onClick={() => {
                  removeSingledata(data);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Save;
