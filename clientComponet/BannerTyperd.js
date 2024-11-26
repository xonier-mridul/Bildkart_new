'use client'
import React from 'react'
import { ReactTyped } from "react-typed";

const BannerTyperd = () => {
  return (
    <>
       <ReactTyped
        className='text-amber-400'
        strings={["Services Marketplace", "Construction Materials"]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </>
  )
}

export default BannerTyperd
