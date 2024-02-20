import { useScroll } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { quickSearch, API_key, tempAPI} from '../data/FeaturesData';
import { useGlobalImageContext } from '../pages/ImageGLobal';
const ImageSearchBar = () => {
    const [search, SetSearch] = useState('');
    

    const {images,SetImages,loading,SetLoading} = useGlobalImageContext();

    

    const getImagesFromApi = async (imageName)=>{
      
      const url =`https://api.unsplash.com/search/photos?page=1&query=${imageName}&client_id=${API_key}`;
      SetLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      SetImages(data.results);
      

      let LoadingTimeOut =  setTimeout(()=>{
        SetLoading(false);
      },1000)
      LoadingTimeOut = null;
      // SetImages(tempAPI);

    }



  return (
    <div className='p-[3rem]'>
        <div className=' px-[3rem] py-[1rem] items-center gap-[20px] flex flex-row rounded-3xl w-[100%] bg-[#191919]'>
            {/* <p className='text-white text-[32px] uppercase'>Find your images Here</p> */}
        <input className="w-[200px] h-[50px] p-[8px] rounded-md " 
              placeholder="Search here..."
              type="text" name="colorCodeReceiver" id="imgaeSearch" 
              value={search}
              onChange={(e)=>{ 
                SetSearch(e.target.value)
              }}
              />

        <button className=" md:p-[1rem] p-[0.5rem]  rounded-[20px] bg-white/10 text-white backdrop-blur-3xl"
              onClick={()=> getImagesFromApi(search)}
        >
            <FaSearch />
        </button>

        <button className=" md:p-[1rem] p-[0.5rem]  rounded-[20px] bg-white/10 text-white backdrop-blur-3xl"
              //onClick={}
        >
            Preview
        </button>
              

        </div>
      {/* for qucik search buttons */}
      <div className='flex flex-wrap gap-[20px] flex-row justify-around w-full p-[2rem]'>
      {
        quickSearch.map((data, index)=>{
          return(
            <button key={data.id} className=" min-w-[80px] h-[60px] rounded-[20px] bg-white/10 text-white "
              onClick={()=>{
                getImagesFromApi(data.text)
              }}
        >
            {data.text}
        </button>
          )
        })
      }
        
      </div>
    </div>
  )
}

export default ImageSearchBar