import { reducer } from "../utilities/Reducer";
import { useReducer, useState } from "react";
import {motion} from 'framer-motion'
import React from 'react'

const Palettes = (props) => {
  const [show, SetShow ] = useState( false );
    console.log(props);
  return (
    <motion.div 
    onMouseEnter={()=> SetShow(true)}
    onMouseLeave={()=> SetShow(false)}
    initial={{ scale: 1}}
    whileTap={{scale:1.2}}
    whileHover={{scale:1.1}}
    className=" md:w-[100px] w-[70px] md:h-[130px] h-[70px]  items-center flex flex-col">
        <div 
        style={{ backgroundColor: `${props.rgb.value}` }}
        className={`w-[100%] rounded-lg  h-[100px]`}>

        </div>
        <p>{props.hex.value }</p>
        {
          show && (
            <p>Click to copy</p>
          )
        }
    </motion.div>
  )
}

export default Palettes