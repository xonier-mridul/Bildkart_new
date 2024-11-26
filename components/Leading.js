"use client"
import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import CountUp from 'react-countup';

const Leading = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex flex-col items-center gap-2 justify-center mb-16">
          <span className="text-amber-400 text-xl font-bold flex gap-5 items-center">
            <MdOutlineHorizontalRule className="w-5" />
            Top Material Provider
            <MdOutlineHorizontalRule className="w-5" />
          </span>
          <h2 className="text-5xl text-neutral-800 font-semibold w-2/3 text-center leading-tight ">
          Leading Marketplace for Construction Materials
          </h2>
          <p className="w-3/4 text-xl text-center text-neutral-700">Bildkart offers unparalleled convenience, comprehensive selection, and exceptional service, making it the top choice for all your construction material needs. Experience the best!</p>
        </div>
        <div className="grid grid-cols-4 items-center">
           <div className="border-r-2 border-amber-300  p-6 flex flex-col gap-4 justify-center items-center">
               <div className="text-2xl text-amber-400 font-semibold">
               <CountUp 
               className="text-5xl text-neutral-800 font-semibold"
               start={0}
               end={42}
               duration={2}
               /> %</div>
               <h3 className="text-2xl">Builder save on the order</h3>

            </div>
           <div className="border-r-2 border-amber-300  p-6 flex flex-col gap-4 justify-center items-center font-bold">
               <div className="text-3xl text-amber-400">
               <CountUp 
               className="text-5xl text-neutral-800 font-semibold"
               start={0}
               end={6}
               duration={2}
               /> X</div>
               <h3 className="text-2xl font-normal">Faster Deliveries</h3>

            </div>
           <div className="border-r-2 border-amber-300  p-6 flex flex-col gap-4 justify-center items-center font-bold">
               <div className="text-3xl text-amber-400">
               <CountUp 
               className="text-5xl text-neutral-800 font-semibold"
               start={0}
               end={24}
               duration={2}
               /> X</div>
               <h3 className="text-2xl font-normal">Builder save on the order</h3>

            </div>
           <div className="  p-6 flex flex-col gap-4 justify-center items-center">
               <div className="text-2xl text-amber-400 font-bold">
               <CountUp 
               className="text-5xl text-neutral-800 font-semibold"
               start={0}
               end={5000}
               duration={2}
               /> +</div>
               <h3 className="text-2xl">Satisfied Clients</h3>

            </div>
        </div>
      </div>
    </>
  );
};

export default Leading;
