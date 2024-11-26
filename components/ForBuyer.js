"use client"
import React, {useState} from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import Image from 'next/image';

const ForBuyer = () => {

    const [Tabs, setTabs] = useState(1);

  return (
    <>
      <div className='max-w-7xl mx-auto py-20'>
      <div className="flex flex-col items-center gap-2 justify-center mb-16">
          <span className="text-amber-400 text-xl font-bold flex gap-5 items-center">
            <MdOutlineHorizontalRule className="w-5" />
            Become a Buyer
            <MdOutlineHorizontalRule className="w-5" />
          </span>
          <h2 className="text-5xl text-neutral-800 font-semibold w-2/3 text-center leading-tight ">
          How Bildkart works for buyers
          </h2>
          <p className="w-3/4 text-xl text-center text-neutral-700">Bildkart offers unparalleled convenience, comprehensive selection, and exceptional service, making it the top choice for all your construction material needs. Experience the best!</p>
        </div>
        <div className=' w-full flex items-center gap-20'>
           <div className='w-[28%]'>
               <ul className='rounded-lg overflow-hidden'>
                <li className={`${Tabs === 1 ? "bg-amber-400 hover:bg-amber-400 text-white ": "bg-neutral-100 hover:bg-neutral-200" } p-5 px-8 border-b-[1px] border-[#dedede] text-xl cursor-pointer  transition-all`} onClick={()=>setTabs(1)}>Project Organisation</li>
                <li className={` ${Tabs === 2 ? " bg-amber-400  hover:bg-amber-400 text-white " : "bg-neutral-100 hover:bg-neutral-200"} p-5 px-8  border-b-[1px] border-[#dedede] text-xl cursor-pointer  transition-all`} onClick={()=>setTabs(2)}>Purchasing Meterials</li>
                <li className={`${Tabs === 3 ? " bg-amber-400  hover:bg-amber-400 text-white " : "bg-neutral-100 hover:bg-neutral-200"} p-5 px-8  border-b-[1px] border-[#dedede] text-xl cursor-pointer  transition-all`} onClick={()=>setTabs(3)}>Logistics</li>
                <li className={` ${Tabs === 4 ? "bg-amber-400  hover:bg-amber-400 text-white " : "bg-neutral-100 hover:bg-neutral-200"} p-5 px-8  text-xl cursor-pointer  transition-all`} onClick={()=>setTabs(4)}>Invoice Managemet</li>
               </ul>
           </div>
           <div className='w-[72%] '>
           {Tabs === 1 && <div className='flex items-center gap-3 p-5 rounded-xl bg-neutral-100 hover:scale-[1.03] hover:shadow-md transition-[.5s]'>
              <Image
              className='w-[35%] object-cover object-center h-[275px] rounded-lg'
              src="/Project-organisation.jpeg"
              height={400}
              width={400}
              alt=''
              />  
              <div className='pl-10 w-[65%]'>
                <h4 className='text-2xl font-semibold pb-4 text-amber-400'>Manage material requirements for one or multiple worksites easily and efficiently from one point.</h4>
                <p className='text-lg text-neutral-700'> Create projects within which you can launch one or multiple material quotation requests and eventually purchase orders. Easily keep track of purchases per worksite and control costs. </p>
              </div>            
           </div>}
           {Tabs === 2 &&<div className='flex items-center gap-3 p-5 rounded-xl bg-neutral-100 hover:scale-[1.03] hover:shadow-md transition-[.5s]'>
              <Image
              className='w-[35%] object-cover object-center h-[275px] rounded-lg'
               src="/Purchase.png"
              height={400}
              width={400}
              alt=''
              />  
              <div className='pl-10 w-[65%]'>
                <h4 className='text-2xl font-semibold pb-4 text-amber-400'>Streamline sourcing and ordering to receive materials efficiently and affordably.</h4>
                <p className='text-lg text-neutral-700'> Fill out Snapbau’s easy to use forms that allows buyers to input all relevant information to receive quotations from suppliers quickly. Compare offers received and confirm the order to the supplier who is offering the best material at the best price, within the time you need it. </p>
              </div>            
           </div>}
           {Tabs === 3 && <div className='flex items-center gap-3 p-5 rounded-xl bg-neutral-100 hover:scale-[1.03] hover:shadow-md transition-[.5s]'>
              <Image
              className='w-[35%] object-cover object-center h-[275px] rounded-lg'
               src="/logistics.png"
              height={400}
              width={400}
              alt=''
              />  
              <div className='pl-10 w-[65%]'>
                <h4 className='text-2xl font-semibold pb-4 text-amber-400'>After placing a purchase order, easily track the merchandise for either store pick up or delivery to worksite.</h4>
                <p className='text-lg text-neutral-700'> Suppliers update the status of buyers’ merchandise orders from the confirmation of the order. Receive alerts per email informing as to when the merchandise is ready for pick-up or has been delivered. </p>
              </div>            
           </div>}
           {Tabs === 4 && <div className='flex items-center gap-3 p-5 rounded-xl bg-neutral-100 hover:scale-[1.03] hover:shadow-md transition-[.5s]'>
              <Image
              className='w-[35%] object-cover object-center h-[275px] rounded-lg'
                src="/Project-organisation.jpeg"
              height={400}
              width={400}
              alt=''
              />  
              <div className='pl-10 w-[65%]'>
                <h4 className='text-2xl font-semibold pb-4 text-amber-400'>Receive invoices and process payments easily via Snapbau buyer accounts.</h4>
                <p className='text-lg text-neutral-700'> Suppliers log their invoices on Snapbau allowing buyers to easily manage supplier invoices per project, cross-referenced with the corresponding logistics updates.</p>
              </div>            
           </div>}
           
           </div>
        </div>

      </div>
    </>
  )
}

export default ForBuyer
