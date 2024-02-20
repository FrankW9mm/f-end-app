import React, { createContext, useContext, useState } from 'react'

const GlobalImageContext = createContext();

export const useGlobalImageContext = () => useContext(GlobalImageContext);

const ImageGLobal = ({children}) => {
  const [images,SetImages] = useState([]);
  const [testImageHolder, SetTestImageHolder] = useState('');
  const [showTestImageModal, setShowTestImageModal] = useState(false);
  const [loading,SetLoading] = useState(false);
  return (
      <GlobalImageContext.Provider value={{images,SetImages,testImageHolder,SetTestImageHolder
      ,showTestImageModal, setShowTestImageModal, loading,SetLoading}}>
        {children}
      </GlobalImageContext.Provider>
  )
}

export default ImageGLobal 