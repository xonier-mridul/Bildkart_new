import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const AskDemo = () => {
    


  return (
    <>
      <div className='bg-neutral-100 py-14'>
        <div className="max-w-7xl mx-auto flex items-center ">
            
         <div className='w-1/2'>
            <h2 className='text-4xl font-semibold mb-4 w-2/3'>Request a Demo Today</h2>
            <p className='text-lg w-3/4 text-neutral-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint repellendus ullam quo quae nemo eaque!</p>
         </div>
         <div className='w-1/2 flex justify-end'>
         <Link href='' className='bg-amber-300 py-3 px-8 rounded-lg text-neutral-800 font-medium flex gap-2 items-center w-fit'> Get A Quote <FaArrowRightLong /></Link>
         </div>
        </div>

      </div>
    </>
  )
}

export default AskDemo
