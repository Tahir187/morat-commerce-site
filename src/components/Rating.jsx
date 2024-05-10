import React from 'react'
import {FaStar} from "react-icons/fa"
const Rating = () => {
  return (
    <div className='flex'>
        {[...Array(5)].map((star, index)=>{
            return(
                <FaStar size={20} key={index} className='text-[#fae421] flex' />
            )
        })}
    </div>
  )
}

export default Rating