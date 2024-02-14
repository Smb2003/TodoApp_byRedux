import React from 'react'

export const InputField = ({type,placeholder,id,onhandleChange,name}) => {
  return (
    <div>
        <input
        className='w-64 p-2 rounded-md'
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={(e)=>onhandleChange(name,e.target.value)}
        />
    </div>
  )
}
