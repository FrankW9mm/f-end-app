import React from 'react'
import { RaceBy } from "@uiball/loaders";
const ImageLoading = () => {
  return (
    <div
      className="w-full h-[50vh] bg-[#0c0b0b] flex justify-center flex-col gap-[30px] items-center"
      id="gallery"
    >
      <p className=" uppercase text-white text-[32px]">Loading</p>
      <RaceBy size={200} lineWeight={5} speed={1.4} color="white" />
      {/* <h1 className="text-white text-[20px]">IN DEVELOPMENT</h1> */}
    </div>
  )
}

export default ImageLoading