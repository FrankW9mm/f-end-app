import React from 'react'
import { useGlobalImageContext } from '../pages/ImageGLobal'
export const ImageGrid = () => {

    const {images} = useGlobalImageContext();
  return (
    <div className='p-[0rem]'>
        <div className='bg-[#191919] lg:py-[3rem] md:py-[2rem] py-[1rem] lg:px-[2rem] md:px-[1rem] px-[0.5rem] justify-center items-center flex flex-row flex-wrap md:gap-[30px] gap-[15px] w-full rounded-2xl'>
            {/* {
                images && images.map((data)=>{
                    return(
                        <div className='md:w-[300px] w-[200px] md:h-[300px] h-[200px] '>
                            <img  className=' w-full h-full rounded-xl object-cover' src={data.urls.full} alt="" />
                        </div>
                    )
                })
                
            
            } */}

            {
                images.length === 0 ? (
                    <div className=' w-full h-[200px] rounded-[20px] bg-[#0E0E0E] flex flex-row justify-center items-center'>
                                 <p className='text-white text-[20px] uppercase'>Search for images</p>
                            </div>
                ): (
                    images.map((data)=>{
                        return(
                            <div className='md:w-[300px] w-[200px] md:h-[300px] h-[200px] '>
                                <img  className=' w-full h-full rounded-xl object-cover' src={data.urls.regular} alt="" />
                            </div>
                        )
                    })
                )
            }
        </div>
    </div>
  )
}
