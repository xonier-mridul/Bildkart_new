import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import Image from 'next/image';

const WaytoBuy = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto py-20'>

        <div className='flex flex-col items-center gap-2 justify-center mb-16'>
        <span className="text-amber-400 text-xl font-bold flex gap-5 items-center">
              <MdOutlineHorizontalRule className="w-5"/>Effortless Material Solutions  <MdOutlineHorizontalRule className="w-5"/>
            </span>
            <h2 className='text-5xl text-neutral-800 font-semibold w-2/3 text-center leading-tight'>Convenient High-Rise Construction Materials Purchase</h2>
        </div>

        <div className='grid grid-cols-6'>

            <div className='icon-box cursor-pointer flex flex-col gap-7 items-center'>
               <span className='buyIcons relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'> <Image 
                className='relative z-20'
               src='/frame.png'
               height={40}
               width={40}
               alt='frane'
               /></span>
               <h3 className='text-neutral-800 font-semibold text-2xl'>Framing</h3>
            </div>
            <div className='icon-box cursor-pointer flex flex-col gap-7 items-center'>
               <span className='buyIcons  relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'> <Image 
                className='relative z-20'
               src='/brick-wall.png'
               height={40}
               width={40}
               alt='frane'
               /></span>
               <h3 className='text-neutral-800 font-semibold text-2xl'>Drywall</h3>
            </div>
            <div className='icon-box cursor-pointer flex flex-col gap-7 items-center'>
               <span className='buyIcons  relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'> <Image 
                className='relative z-20'
               src='/cover.png'
               height={40}
               width={40}
               alt='frane'
               /></span>
               <h3 className='text-neutral-800 font-semibold text-2xl'>Insulation</h3>
            </div>
            <div className='icon-box cursor-pointer flex flex-col gap-7 items-center'>
               <span className='buyIcons  relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'> <Image 
                className='relative z-20'
               src='/firewood.png'
               height={40}
               width={40}
               alt='frane'
               /></span>
               <h3 className='text-neutral-800 font-semibold text-2xl'>Lumber</h3>
            </div>
            <div className='icon-box cursor-pointer flex flex-col gap-7 items-center'>
               <span className='buyIcons  relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'> <Image 
                className='relative z-20'
               src='/bricks.png'
               height={40}
               width={40}
               alt='frane'
               /></span>
               <h3 className='text-neutral-800 font-semibold text-2xl'>CMU</h3>
            </div>
            <div className='icon-box flex flex-col gap-7 items-center'>
               <span className='buyIcons cursor-pointer relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'> <Image 
               className='relative z-20'
               src='/frame.png'
               height={40}
               width={40}
               alt='frane'
               /></span>
               <h3 className='text-neutral-800 font-semibold text-2xl'>Stone and Tile</h3>
            </div>
            
            
            

        </div>

    </div>
      
    </>
  )
}

export default WaytoBuy
