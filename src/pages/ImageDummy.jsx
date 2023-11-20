
import React, { useDebugValue, useEffect } from "react";
import { RaceBy } from "@uiball/loaders";

const ImageDummy = () => {

  useEffect(()=>{
    // getImg();
    console.log('wtfffff');
  },[])

  // const getImg = async () => {
  //   let response = await fetch('https://api.unsplash.com/search/photos?page=1&query=office&client_id=Z8R2rY--5IIKwCbZ_joZW0D5OHBn9PUpIFKAuaBOJAM')
  //   let data = await response.json();
  //   dispatch({ type: "IMG_INCOME", data: data });
  //   console.log(data);
  // }
  return (
    <div
      className="w-full h-[100vh] bg-[#0c0b0b] flex justify-center flex-col gap-[30px] items-center"
      id="gallery"
    >
      <p className=" uppercase text-white text-[32px]">Image GAllery</p>
      <RaceBy size={200} lineWeight={5} speed={1.4} color="white" />
      <h1 className="text-white text-[20px]">IN DEVELOPMENT</h1>
    </div>
  );
};

export default ImageDummy;
