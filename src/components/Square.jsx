import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Square = ({value , onClick}) => {
   
  return (
    <motion.button 
    className='w-[90px] h-[90px] border border-gray-600  
    bg-[#1E293B] flex items-center justify-center text-4xl font-bold 
    cursor-pointer hover:bg-[#334155]' 
    whileTap={{ scale: 0.9}}
    onClick={onClick}>
        {value}
    </motion.button>
  )
}

export default Square;