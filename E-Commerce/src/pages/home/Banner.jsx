import React from 'react'
import { FaShoppingBag } from "react-icons/fa";


const Banner = () => {
  return (
    <div className='banner bg-primaryBG py-12 xl:px-28 px-4 justify-center flex'>
        <div className='flex py-28 flex-col md:flex-row-reverse justify-between items-center gap-14'>

            {/* bannerImg  */}
        {/* <div className='md:w-1/2'>
                <img src={bannerimg} alt="photo"  />
            </div> */}
     
            {/* bannerText */}
     
            <div className='md:me-96 bannerText'>
                <h1 className='text-5xl font-light mb-5'>Collections</h1>
                <p className='text-xl mb-7'>You Can Explore Ans Shop Many Differnt Collection From Various Barands Here</p>
                <button className='bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'><FaShoppingBag className='inline-flex visited:checked:' />
                <h1></h1>
 Shop Now</button>  
            </div>

           
        </div>
    </div>
  )
}

export default Banner