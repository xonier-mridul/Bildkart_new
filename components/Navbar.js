'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [headerScroll, setHeaderScroll] = useState(false)  
   
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   
 

  return (
    <>
      <div className={` ${headerScroll ? "bg-white shadow-md" :"header"}   fixed top-0 left-0 w-full z-30`}>
        <div className='max-w-7xl m-auto py-2 flex items-center '>
          <div className="w-1/6">
           <Image
            src="/BildKart_Logos.png"
            height={200}
            width={200}
            alt='Bildkart-logo'
          />
           </div>
          <div className="w-3/6">
          <nav>
            <ul className='flex items-center gap-12 pl-12'>
                <li> <Link className='font-semibold text-indigo-950 ' href={'/'}> Home</Link> </li>
                <li> <Link className='font-semibold text-indigo-950' href={"/buyer"}>Buyer</Link> </li>
                <li> <Link className='font-semibold text-indigo-950' href={"/supplier"}>Supplier</Link> </li>
                <li> <Link className='font-semibold text-indigo-950' href={"/about"}>About Us</Link> </li>
            </ul>
          </nav>
          
          </div>
          <div className="w-2/6 flex items-center justify-end gap-4">
          <Link href='' className='bg-amber-300 py-3 px-8 rounded-lg text-neutral-800 font-medium flex gap-2 items-center'> Get A Quote <FaArrowRightLong /></Link>
          <Link href='' className='bg-amber-300 py-3 px-8 rounded-lg text-neutral-800 font-medium flex gap-2 items-center'> Register <FaArrowRightLong /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
