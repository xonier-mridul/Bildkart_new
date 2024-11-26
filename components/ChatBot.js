import React from 'react'
import { BsRobot } from "react-icons/bs";

const ChatBot = () => {
  return (
    <>
      <div className='chatbot fixed z-30 right-9 bottom-7  rounded-full  h-16 w-16 flex items-center justify-center bg-amber-400 cursor-pointer'>
          <span className='relative z-30'><BsRobot className='text-3xl text-white '/></span>
      </div>
    </>
  )
}

export default ChatBot
