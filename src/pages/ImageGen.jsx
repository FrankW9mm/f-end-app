import React from 'react'
import ImageSearchBar from '../components/ImageSearchBar'
import { ImageGrid } from '../components/ImageGrid'
import ImageLoading from '../components/ImageLoading'
import { useGlobalImageContext } from './ImageGLobal'

useGlobalImageContext
const ImageGen = () => {
  const {loading,SetLoading} = useGlobalImageContext();
  return (
    <div id='gallery' className='bg-[#0E0E0E]'>
        <ImageSearchBar />
        {
          loading ? (
            <ImageLoading />
          ) : (
            <ImageGrid />
          )
        }
        
        
    </div>
    
  )
}

export default ImageGen