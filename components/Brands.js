import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import Image from 'next/image';

const Brands = () => {
  return (
    <>
      <div className='py-20 bg-indigo-950'>
         <div className='max-w-7xl mx-auto '>
         <div className="flex flex-col items-center gap-2 justify-center mb-20">
            <span className="text-white text-xl font-bold flex gap-5 items-center">
              <MdOutlineHorizontalRule className="w-5" />
              Boost Business Growth
              <MdOutlineHorizontalRule className="w-5" />
            </span>
            <h2 className="text-5xl text-amber-300 font-semibold w-2/3 text-center leading-tight pb-5">
            Trusted High-Rise Construction Brands
            </h2>
            <p className="text-white text-lg text-center w-3/4">
              
              Shop our selection of the most popular high-rise construction brands, including:
            </p>
          </div>
          <div className='grid grid-cols-6 gap-6 gap-y-8 items-center justify-center'>
            <Image 
            src="/Boise.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/CertainTeed.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/ClarkDietrich.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/Dupont.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/Hoover.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/Huber.png"
            height={130}
            width={130}
            alt='logo'
            />
            <Image 
            src="/Marinoware.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/National.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/Owens.png"
            className='text-center'
            height={110}
            width={110}
            alt='logo'
            />
            <Image 
            src="/Super.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/USG.png"
            height={150}
            width={150}
            alt='logo'
            />
            <Image 
            src="/Rockwool.png"
            height={150}
            width={150}
            alt='logo'
            />

          </div>
         </div>
      </div>
    </>
  )
}

export default Brands
