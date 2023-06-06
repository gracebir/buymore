import { dropdownInputProps } from '@/type'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function ComboBoxInput({label, placeholder,data,text, setText }:dropdownInputProps) {
    const [open, setOpen] = useState(false)
    const handleDropdownText = (i: number) => {
        setText(data[i])
        setOpen(false)
}
  return (
    <div className='flex flex-col gap-2'>
      <label>{label}</label>
      <div className="relative flex w-full">
            <div onClick={() => setOpen(!open)} className="bg-very-dark border border-dark-color px-3 py-2 cursor-pointer flex items-center w-full justify-between rounded-md">
                <span className={`font-semibold ${text ? 'text-white-color':'text-gray-400'}`}>{text ? text : placeholder}</span>
                {open ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {open && (
                <div className='absolute top-12 right-0 bg-dark-color flex flex-col w-full z-50 rounded-sm shadow-lg'>
                    <div className='flex flex-col gap-6 px-4 py-4'>
                        {data.map((pers, key) => (
                            <div onClick={() => handleDropdownText(key)} key={key} className='flex items-center cursor-pointer justify-between'>
                                <span>{pers}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    </div>
  )
}

export default ComboBoxInput
