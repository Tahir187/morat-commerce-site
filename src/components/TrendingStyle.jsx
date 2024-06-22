import React from 'react'
import { Link } from 'react-router-dom'
    
const TrendingStyle = () => {
  return (
    <section className='bg-[#74a297] flex justify-center flex-col md:flex-row items-center gap-5 mb-20'>
        <div>
            <img src="https://miro.medium.com/v2/resize:fit:823/1*zdxXTH_qBm5bUawMVtnJQQ.jpeg" alt="trending image" className='w-full h-[450px] ' />
        </div>
        <div>
            <h3 className='text-4xl text-white text-center uppercase mb-3'>Trending style</h3>
            <p className='text-2xl capitalize text-white text-center'>New Shirt Collection 2023</p>
            <Link to='/women'>
        <button className="bg-[#5F8F83] rounded-sm uppercase w-[200px] font-semibold mt-5 text-white p-3 text-2xl">Shop now</button>
        </Link>
        </div>
        <div>
            <img src="https://miro.medium.com/v2/resize:fit:823/1*zdxXTH_qBm5bUawMVtnJQQ.jpeg" alt="trending image" className='w-full h-[450px]' />
        </div>
    </section>
  )
}

export default TrendingStyle