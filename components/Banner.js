'use client'
import React, {useState} from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import BannerTyperd from "@/clientComponet/BannerTyperd";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";



const Banner = () => {

  const [buyer, setbuyer] = useState(false);
  const [supplier, setsupplier] = useState(false);
  
  const buyerform = ()=>{
    setbuyer(!buyer)
    setsupplier(false)
  }

  const supplierform = ()=>{
    setsupplier(!supplier);
    setbuyer(false)
  }
  return (
    <>
      <div className="Banner relative top-0 pt-32">
        <div>
        <video className="banner-vid " autoPlay loop muted>
          <source src="/banner-vid.mp4" type="video/mp4" />
        </video>
        <div className="banner-overlay absolute z-20 top-0 left-0 w-full h-full "></div>
        </div>
        <div className="max-w-7xl m-auto flex relative z-20 py-16 pb-56 ">
          <div className="w-[55%]">
            <span className="text-amber-400 text-xl font-bold flex gap-5 items-center">
              <MdOutlineHorizontalRule className="w-5"/> Welcome to bildkart
            </span> 
            <h1 className=" text-6xl text-white font-semibold leading-tight mb-5">
              Welcome to BildKart Bildkart the future <br/>
             <BannerTyperd />
            </h1>
            
            <p className="text-white text-lg pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod eveniet sequi placeat pariatur deserunt?</p>
            <div className="flex gap-4 items-center">
            <Link href='' className='bg-amber-400 py-3 px-8 rounded-lg text-white font-medium flex gap-2 items-center' onClick={buyerform}> For Buyer <FaArrowRightLong /></Link>
            <Link href='' className='bg-amber-400 py-3 px-8 rounded-lg text-white font-medium flex gap-2 items-center' onClick={supplierform}> For Seller <FaArrowRightLong /></Link>
            </div>
          </div>
          <div className="w-[45%] ml-14 relative">

           <div className={ `${buyer ? "scale-100" :"scale-0 "} absolute top-0 transition-all buyer-form bg-white rounded-lg p-8`}>
              <div className="pb-6">
                <h3 className="text-2xl font-semibold text-neutral-700">Please fill the form</h3>
              </div>
              <form className="flex flex-col gap-5" action="">
                <div className="grid grid-cols-2 gap-11">
                  <input className="b-border py-3 outline-none text-indigo-950" type="text" name="" id="" placeholder="Company Number"/>
                  <input className="b-border py-3 outline-none" type="text" name="" id="" placeholder="Legal Form"/>
                </div>
                <div className="grid grid-cols-2 gap-11">
                  <input className="b-border py-3 outline-none text-indigo-950" type="number" name="" id="" placeholder="Trade Register Number"/>
                  <input className="b-border py-3 outline-none" type="email" name="" id="" placeholder="Email"/>
                </div>
                <div className="grid grid-cols-2 gap-11">
                  <input className="b-border py-3 outline-none text-indigo-950" type="number" name="" id="" placeholder="Phone Number"/>
                  <input className="b-border py-3 outline-none" type="text" name="" id="" placeholder="Website"/>
                </div>
                <textarea className="b-border outline-none" name="message" id="" rows={5} placeholder="Message"></textarea>
                <div className="pt-2">

                <button className="bg-amber-300 py-3 px-8 rounded-lg text-white font-medium flex gap-2 items-center" type="submit">Send <FaArrowRightLong /></button></div>
              </form>
          </div>
         <div className={`${supplier ? "scale-100" :"scale-0"} absolute top-0 transition-all supplier-form bg-white rounded-lg p-8`}>
              <div className="pb-6">
                <h3 className="text-2xl font-semibold text-neutral-700">Please fill the form</h3>
              </div>
              <form className="flex flex-col gap-5" action="">
                <div className="grid grid-cols-2 gap-11">
                  <input className="b-border py-3 outline-none text-indigo-950" type="text" name="" id="" placeholder="Company Number"/>
                  <input className="b-border py-3 outline-none" type="text" name="" id="" placeholder="Contact Person"/>
                </div>
                <div className="grid grid-cols-2 gap-11">
                  <input className="b-border py-3 outline-none text-indigo-950" type="text" name="" id="" placeholder="Type of Supplier"/>
                  <input className="b-border py-3 outline-none" type="email" name="" id="" placeholder="Email"/>
                </div>
                <div className="grid grid-cols-2 gap-11">
                  <input className="b-border py-3 outline-none text-indigo-950" type="number" name="" id="" placeholder="Phone Number"/>
                  <input className="b-border py-3 outline-none" type="text" name="" id="" placeholder="Location"/>
                </div>
                <textarea className="b-border outline-none" name="message" id="" rows={5} placeholder="Message"></textarea>
                <div className="pt-2">

                <button className="bg-amber-300 py-3 px-8 rounded-lg text-white font-medium flex gap-2 items-center" type="submit">Send <FaArrowRightLong /></button></div>
              </form>
          </div>
          
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
