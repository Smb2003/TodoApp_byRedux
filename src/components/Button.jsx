import React from 'react'
import { IoIosSend } from "react-icons/io";

export const Button = ({handleTodo}) => {
  return (
    <div>
        <button onClick={handleTodo} className='flex flex-wrap justify-center text-xl mx-3 pt-1.5 w-9 h-10 overflow-hidden bg-white rounded-full transition-w duration-1000 ease-in-out hover:w-24 '>
            <IoIosSend className='text-xl md:text-2xl mt-1 ' />Submit
        </button>
    </div>
  )
}
