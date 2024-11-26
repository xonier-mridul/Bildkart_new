import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Footer = () => {
  return (
    <>
      <div className='bg-indigo-950 '>
        <div className='max-w-7xl mx-auto grid grid-cols-4 gap-8  py-20 '>

            <div className='flex flex-col gap-5'>
                <Link href={"/"}><Image 
                src="/BildKart-Logo-1.png"
                width={180}
                height={180}
                alt = "logo"
                /></Link>
                <p className='text-lg text-white '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem quae dignissimos eaque quis. </p>
            </div>
            <div>
                <h3 className='text-white text-2xl mb-6'>General Information</h3>
                
                <ul className='flex flex-col  gap-6 '>
                <li> <Link className='font-semibold text-white  hover:text-amber-400 transition-all' href={'/'}> Home</Link> </li>
                <li> <Link className='font-semibold text-white hover:text-amber-400 transition-all' href={"/buyer"}>Buyer</Link> </li>
                <li> <Link className='font-semibold text-white hover:text-amber-400 transition-all' href={"/supplier"}>Supplier</Link> </li>
                <li> <Link className='font-semibold text-white hover:text-amber-400 transition-all' href={"/about"}>About Us</Link> </li>
            </ul>
            </div>

            <div>
            <h3 className='text-white text-2xl mb-6'>Quick Access</h3>
            <ul className='flex flex-col  gap-6 '>
                <li> <Link className='font-semibold text-white  hover:text-amber-400 transition-all' href={'/'}> Register as a Buyer</Link> </li>
                <li> <Link className='font-semibold text-white hover:text-amber-400 transition-all' href={"/buyer"}>Register as a Suppier</Link> </li>
                <li> <Link className='font-semibold text-white hover:text-amber-400 transition-all' href={"/supplier"}>Login as a Buyer</Link> </li>
                <li> <Link className='font-semibold text-white hover:text-amber-400 transition-all' href={"/about"}>Login as a Supplier</Link> </li>
            </ul>
            </div>
            <div>
            <h3 className='text-white text-2xl mb-6'>Contact Us</h3>
            </div>
        </div>
        <div className='max-w-7xl m-auto border-t-[1px] broder-[#ffffff30] py-5 flex items-center gap-2'>
          
        </div>

      </div>
    </>
  )
}

export default Footer
