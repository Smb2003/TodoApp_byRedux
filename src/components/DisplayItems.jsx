import React from 'react'
import {  useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
export const DisplayItems = ({DeleteTodoItems}) => {
    const Selector = useSelector((state)=>state.Todo_List.list);
    // console.log(Selector);

  return (
    <div>
        {
            Selector.map((item,index)=>{
                return(
                    <div key={index} className='flex justify-between mt-3 p-2 w- h-auto rounded-lg bg-white'>
                        <h1>{item.Title}</h1>
                        <div className='gap-2'>
                            <button onClick={(e)=>DeleteTodoItems(e.currentTarget,index)}><MdDelete className='text-2xl mx-3'/></button>
                            <button className='text-2xl mx-2'><FaEdit /></button>
                        </div>
                    </div>
                )
            })

        }
    </div>
  )
}
