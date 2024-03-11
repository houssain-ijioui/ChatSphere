import React from 'react'


function Input({ placeholderText, value, setValue }) {
  return (
    <input value={value} onChange={setValue((e) => e.target.value)} className='w-2/6 py-4 m-auto mt-4' type="text" placeholder={placeholderText} />
  )
}


export default Input;
