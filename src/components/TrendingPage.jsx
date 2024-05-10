import React from 'react'
import Rating from './Rating'

const TrendingPage = () => {
  return (
    <div>
        <h2>Trending</h2>
        <div className='flex justify-center gap-10 text-gray-500'>
            <button>Sale</button>
            <button>Featured</button>
            <button>New Products</button>
        </div>
        <Rating />
    </div>
  )
}

export default TrendingPage