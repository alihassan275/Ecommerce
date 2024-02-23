import React from "react";
import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: "/images/brands/brand1.png" },
  { id: 2, img: "/images/brands/brand2.png" },
  { id: 3, img: "/images/brands/brand3.png" },
  { id: 4, img: "/images/brands/brand4.png" },
  { id: 5, img: "/images/brands/brand5.png" },
];

const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl-px-28 px-4 py-28'>
      {/* brands logo */}
      <div className='flex items-center justify-around flex-wrap gap-5 py-5'>
        {companyLogo.map(({ img, id }) => (
          <div key={id}>
            <img src={img} alt='photo' />
          </div>
        ))}
      </div>

      {/* category grid */}

      <div className='mt-8 flex flex-col md:flex-row items-center gap-4 '>
        <p className='font-semibold uppercase text-center md:-rotate-90 bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>
          Explore new and popular styles
        </p>
        <div>
          <Link to='/'>
            <img
              src='/public/images/category/demoooo.png'
              alt='photo'
              className=' w-full hover:scale-105 transition-all duration-200'
            />
          </Link>
        </div>
        <div className='md:w-1/2'>
          <div className='grid grid-cols-2 gap-3'>
            <Link to='/'>
              <img
                src='/public/images/oo/p5.png'
                className=' w-full hover:scale-105 transition-all duration-200'
                alt='photo'
              />
            </Link>
            <Link to='/'>
              <img
                src='/public/images/oo/p13.png'
                className=' w-full hover:scale-105 transition-all duration-200'
                alt='photo'
              />
            </Link>
            <Link to='/'>
              <img
                src='/public/images/oo/top4.png'
                className=' w-full hover:scale-105 transition-all duration-200'
                alt='photo'
              />
            </Link>
            <Link to='/'>
              <img
                src='/public/images/oo/p8.png'
                className=' w-full hover:scale-105 transition-all duration-200'
                alt='photo'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
