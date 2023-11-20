import { reducer } from "../utilities/Reducer";
import { useReducer } from "react";
import {motion} from 'framer-motion'
import React from 'react'

const Palettes = (props) => {
    console.log(props);
  return (
    <motion.div 
    initial={{ scale: 1}}
    whileTap={{scale:1.2}}
    whileHover={{scale:1.1}}
    className=" w-[100px]  items-center flex flex-col">
        <div 
        style={{ backgroundColor: `${props.rgb.value}` }}
        className={`w-[100%] rounded-lg  h-[100px]`}>

        </div>
        <p>{props.hex.value }</p>
    </motion.div>
  )
}

export default Palettes