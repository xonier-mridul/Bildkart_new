import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from 'next/image';

const ForSupplier = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto pt-6 pb-20'>
      <div className="flex flex-col items-center gap-2 justify-center mb-16">
          <span className="text-amber-400 text-xl font-bold flex gap-5 items-center">
            <MdOutlineHorizontalRule className="w-5" />
            Become a Buyer
            <MdOutlineHorizontalRule className="w-5" />
          </span>
          <h2 className="text-5xl text-neutral-800 font-semibold w-2/3 text-center leading-tight ">
          How Bildkart works for Suppliers
          </h2>
          <p className="w-3/4 text-xl text-center text-neutral-700">Bildkart brings customers to you. Prepare and send offers to your buyers and quickly receive offer confirmations. Work with clear and detailed orders that will significantly reduce the time taken to prepare orders.</p>
        </div>
        <div className='grid grid-cols-5 items-center gap-6'>
            <div className='icon-box cursor-pointer flex flex-col gap-7 items-center'>
                <span className='buyIcons  relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'><VscGitPullRequestGoToChanges  className='text-white text-3xl'/></span>
                <h4 className='text-xl text-center'>Receive material quotation requests</h4>

            </div>
            <div className='flex justify-center items-center'>
            {/* <HiOutlineArrowNarrowRight className='text-5xl text-neutral-800'/> */}
            <Image 
             className='supplierArrows'
            src="/right-arrow.svg"
            width={75}
            height={75}
            alt='arrow'
            />
            </div>
            <div className='icon-box cursor-pointer flex flex-col gap-7 items-center'>
                <span className='buyIcons  relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'><VscGitPullRequestGoToChanges  className='text-white text-3xl'/></span>
                <h4 className='text-xl text-center'>Send offer based on availability of material</h4>

            </div>
            <div className='flex justify-center items-center'>
            <Image 
            className='supplierArrows'
            src="/right-arrow.svg"
            width={75}
            height={75}
            alt='arrow'
            />
            </div>
            <div className='icon-box cursor-pointer flex flex-col gap-7 items-center'>
                <span className='buyIcons  relative h-16 w-16 rounded-full flex items-center justify-center bg-amber-400'><VscGitPullRequestGoToChanges  className='text-white text-3xl'/></span>
                <h4 className='text-xl text-center'>Receive confirmation, log invoice and prepare merchandise</h4>

            </div>

        </div>


      </div>
    </>
  )
}

export default ForSupplier
