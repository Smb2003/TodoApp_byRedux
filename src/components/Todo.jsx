import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { InputField } from './InputField'
import { Button } from './Button'
// import { addItems } from '../store/slices/List';
import {addData} from '../store/slices/Data'
import { addItems } from '../store/slices/List';
import { DisplayItems } from './DisplayItems';

export const Todo = () => {
    const Selector = useSelector((state)=>state)
    const dispatch = useDispatch();
    console.log(Selector.Todo_List.list);
    const submitTodo = (key,value) => {
        dispatch(addData({[key]:value}))
    }
    const todoGone = () => {
        dispatch(addItems(Selector.Data_Items.data))
    }
    const Delete = (e,index) => {
        e.parentElement.parentElement.remove()

       
    }
  return (
    <div className='max-w-sm md:w-4/5 h-auto p-2  '>
        <div className='flex justify-center w-full h-auto my-5 p-2 '>
            <InputField
            type={"text"}
            placeholder={"Enter the Items"}
            id={"text"}
            name={"Title"}
            onhandleChange={submitTodo}/>
            <Button handleTodo={todoGone}/>
        </div>
        <hr />
       <DisplayItems DeleteTodoItems={Delete}/>

    </div>
  )
}
